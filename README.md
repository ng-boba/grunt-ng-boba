# grunt-ng-boba

> Grunt task for ng-boba, an Angular dependency bundler.

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
In your project's Gruntfile, add a section named `ng_boba` to the data object passed into `grunt.initConfig()`.

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