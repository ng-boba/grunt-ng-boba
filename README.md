# grunt-ng-boba

> Grunt task for ng-boba, an Angular dependency manager.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ng-boba --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ng-boba');
```

## The "ng_boba" task

### Overview
In your project's Gruntfile, add a section named `ngBoba` to the data object passed into `grunt.initConfig()`.

Check out our sample project [ng-boba-sandbox](https://github.com/ng-boba/ng-boba-sandbox) to see an example of how to use ngBoba with grunt.

```js
grunt.initConfig({
    ngBoba: {
        options: {
            modules: ["myModule"],
            moduleFormat: "anonymous",
            dependencies: [
                "src/someDependency.js"
            ]
        },
        build: {
            src: 'src/project/**/*.js',
            dest: 'build/project.min.js'
        }
    }
});
```

### Options

#### options.modules
Type: `String[]`
Default value: `[]`

The module's dependencies that you want to bundle.

#### options.moduleFormat
Type: `String`
Default value: `'anonymous'`

The format used to define your module dependencies, `'anonymous'` or `'array'` depending on if anonymous functions or array notation is used.

#### options.dependencies
Type: `String[]`
Default value: `[]`

Scripts that cannot be detected by Angular's dependency injection, but are required for the project.
An example of this would be jQuery.

#### options.shims
Type: `{}`

Allows dependencies to specified manually

#### options.ignoreModules
Type: `String[]`

Modules that will not be included in the bundle.


#### Usage Examples

```js
grunt.initConfig({
    ngBoba: {
        options: {
            modules: ["myModule"],
            moduleFormat: "anonymous",
            dependencies: [
                "src/someDependency.js"
            ],
            ignoreModules: [
                "mModule"
            ],
            shims: {
                "file/path.js": [
                  "moduleName",
                  "moduleName.ControllerName",
                  "moduleName.directiveName"
                ],
                "other/file.js": [
                  "moduleName.directiveName2"
                ]
            },
        },
        build: {
            src: 'src/project/**/*.js',
            options: {
                modules: ['moduleName']
                output: 'path/to/outputFile.json'
            }
        }
    }
});
```