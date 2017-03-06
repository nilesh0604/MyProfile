module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        cssmin: {
            target: {
                files: {
                    'dist/css/main.min.css': ['assets/css/*.css'],
                    'dist/css/vendor.min.css': ['assets/plugins/**/*.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');


};