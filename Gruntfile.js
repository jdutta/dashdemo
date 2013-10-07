/*global module:false*/

module.exports = function (grunt) {

    'use strict';

    // specify --hostname='*' to make the webserver bind to all interfaces (and not just localhost).
    var hostname = (grunt.option('hostname') === '*') ? '0.0.0.0' : 'localhost',
        appPort = grunt.option('port') || '8001',

        lintTargets = [
            'Gruntfile.js',
            'app/js/**/*.js'
        ];

    // Project configuration.
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: './jshint.json'
            },
            main: lintTargets
        },

        watch: {},

        connect: {
            app: {
                options: {
                    port: appPort,
                    hostname: hostname,
                    base: '.'
                }
            }
        }
    });

    // Load Npm Tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // jshint
    grunt.registerTask('lint', 'jshint');

    // start web server
    grunt.registerTask('web', ['connect:app', 'watch']);
};
