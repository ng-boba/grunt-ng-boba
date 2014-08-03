/*

* grunt-ng-boba
* https://github.com/jessicavreeland/grunt-ng-boba
*
* Copyright (c) 2014 Jessica Vreeland
* Licensed under the MIT license.
*/

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('ng_boba', 'The best Grunt plugin ever.', function() {
      // Merge task-specific and/or target-specific options with these defaults.
      var options = this.options({
          compress: false
      });

      // Iterate over all src-dest file pairs.
      this.files.forEach(function(f) {
          console.log(f.src);
          var src = f.src.filter(function(filepath) {

              console.log(filepath);
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
          }
      });
  });

};


