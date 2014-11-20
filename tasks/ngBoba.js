/*
 * grunt-ng-boba
 * https://github.com/ng-boba/grunt-ng-boba
 *
 * Copyright (c) 2014 Jessica Vreeland, Guerric Sloan
 * Licensed under the MIT license.
 */

'use strict';
var addBoba = require('ng-boba');

module.exports = function(grunt) {

  grunt.registerMultiTask('ngBoba', 'Angular dependency manager.', function() {
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
        grunt.log.warn('Empty source list specified.');
      } else {

        // @note: can save f.dest for future functionality
        fileList = fileList.concat(src);
      }
    });

    // TODO: consider using grunt's internal require options to keep errors in grunt land
    config.verbose = options.verbose || grunt.option('debug') || false;
    config.output = options.output;
    config.files = fileList;
    config.modules = options.modules;
    config.moduleFormat = options.moduleFormat;
    config.dependencies = options.dependencies;

    // TODO: consider a default module set for angular bits?
    config.ignoreModules = options.ignoreModules;
    config.shims = options.shims;
    var name = this.name;
    var target = this.target;
    try {
      addBoba(config).then(function(output) {

        // let's export our boba tasks for general grunt consumption
        grunt.config.set(name + '.' + target + '.output', output);
        done(output);
      }).done();
    } catch (msg) {
      grunt.log.error(msg);
    }

  });

};
