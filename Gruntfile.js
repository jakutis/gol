'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        jasmine : {
            src : 'src/**/*.js',
            options : {
                specs : 'specs/**/*.js'
            }
        },
        watch: {
            files: ['src/**/*.js', 'specs/**/*.js'],
            tasks: 'jasmine'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
