/*
* grunt-ng-boba
* https://github.com/jessicavreeland/grunt-ng-boba
*
* Copyright (c) 2014 Jessica Vreeland
* Licensed under the MIT license.
*/

'use strict';
var addBoba = require('../node_modules/ng-boba/src/ngBobaMain');

module.exports = function(grunt) {

  // we need.
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerMultiTask('ngBoba', 'The best Grunt plugin ever.', function() {
      // Merge task-specific and/or target-specific options with these defaults.

      var done = this.async();

      var options = this.options({
          modules: [],
          moduleFormat: "anonymous"
      });

      var config = {};
      var fileList = [];
      var fileDest;

      // Iterate over all src-dest file pairs.
      this.files.forEach(function(f) {
          var src = f.src.filter(function(filepath) {
              // Warn on and remove invalid source files (if nonull was set).
              if (!grunt.file.exists(filepath)) {
                  grunt.log.warn('Source file not found.');
                  return false;
              } else {
                  return true;
              }
          });

          if (src.length === 0) {
              grunt.log.warn('Destination not written because src files were empty.');
              return;
          } else {
              fileList = fileList.concat(src);
              fileDest = f.dest;
          }
      });

      config.files = fileList;
      config.modules = options.modules;
      config.moduleFormat = options.moduleFormat;
      addBoba(config).then(function(files) {
          grunt.initConfig({
              concat: {
                  basic: {
                      src: files,
                      dest: fileDest
                  }
              }
          });
          grunt.task.run('concat');
          done();
      }).done();
  });

};


