/*
 * grunt-cli
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tyler Kellen, contributors
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt-init/blob/master/LICENSE-MIT
 */

'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            css: {
                src: ['public/css/bootstrap.css', 'public/css/style.css'],
                dest: 'public/css/main.css'
            },
        },
        uglify: {
            js: {
                src: 'public/js/jquery-3.3.1.js',
                dest: 'public/js/jquery-3.3.1.min.js'
            }
        },
        cssmin: {
            css: {
                src: 'public/css/main.css',
                dest: 'public/css/main.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('build', ['concat', 'uglify', 'cssmin']);
};