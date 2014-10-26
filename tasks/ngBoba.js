/*
 * grunt-ng-boba
 * https://github.com/jessicavreeland/grunt-ng-boba
 *
 * Copyright (c) 2014 Jessica Vreeland
 * Licensed under the MIT license.
 */

'use strict';
var addBoba = require('ng-boba');

module.exports = function(grunt) {

  // we need.
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerMultiTask('ngBoba', 'Flexible dependency management.', function() {
    var done = this.async();

    var options = this.options({
      modules: [],
      moduleFormat: "anonymous"
    });
    var config = {};
    var fileList = [];

    // Iterate over all src-dest file pairs.
    this.files.forEach(function(f) {
      var src = f.src.filter(function(filepath) {

        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {

          // TODO: better error reporting
          grunt.log.warn('Source file not found.');
          return false;
        } else {
          return true;
        }
      });

      if (src.length === 0) {

        // TODO: better error reporting
        grunt.log.warn('Destination not written because src files were empty.');
        return;
      } else {

        // @note: can save f.dest for future functionality
        fileList = fileList.concat(src);
      }
    });

    // TODO: consider using grunt's internal require options to keep errors in grunt land
    config.output = options.output;
    config.files = fileList;
    config.modules = options.modules;
    config.moduleFormat = options.moduleFormat;
    config.dependencies = options.dependencies;
    config.ignoreModules = options.ignoreModules;
    config.shims = options.shims;
    var name = this.name;
    var target = this.target;
    addBoba(config).then(function(output) {
      
      // let's export our boba tasks for general grunt consumption
      grunt.config.set(name + '.' + target + '.output', output);
      done(output);
    }).done();
  });

};
