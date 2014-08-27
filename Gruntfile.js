/*
 * grunt-ng-boba
 * https://github.com/jessicavreeland/grunt-ng-boba
 *
 * Copyright (c) 2014 Jessica Vreeland
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');

//          grunt.initConfig({
//              concat: {
//                  basic: {
//                      src: files,
//                      dest: fileDest
//                  }
//              }
//          });
//          grunt.task.run('concat');

  // By default, lint and run all tests.
  grunt.registerTask('default', []);

};
