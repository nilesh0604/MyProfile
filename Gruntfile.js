module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    src: [
                        'dev/assets/plugins/jpreloader/css/jpreloader.css',
                        'dev/assets/plugins/magnificPopup/magnific-popup.css',
                        'dev/assets/plugins/flexSlider/flexslider.css',
                        'dev/assets/plugins/morphext/morphext.css',
                        'dev/assets/css/berg.css'
                    ],
                    ext: '.min.css'
                }]
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: [{
                    expand: true,
                    src: [
                        'dev/assets/plugins/detectmobilebrowser/detectmobilebrowser.js',
                        'dev/assets/plugins/debouncer/debouncer.js',
                        'dev/assets/plugins/sticky/sticky.js',
                        'dev/assets/plugins/countTo/countTo.js',
                        'dev/assets/js/text-rotator.js',
                        'dev/assets/js/animation.js',
                        'dev/assets/js/main.js'
                    ],
                    ext: '.min.js'
                }]
            }
        },

        concat: {
            js: {
                src: [
                    'dev/assets/plugins/jquery.min.js',
                    'dev/assets/plugins/bootstrap/js/bootstrap.min.js',
                    'dev/assets/plugins/jpreloader/js/jpreloader.min.js',
                    'dev/assets/plugins/detectmobilebrowser/detectmobilebrowser.min.js',
                    'dev/assets/plugins/debouncer/debouncer.min.js',
                    'dev/assets/plugins/easing/jquery.easing.min.js',
                    'dev/assets/plugins/inview/jquery.inview.min.js',
                    'dev/assets/plugins/matchHeight/jquery.matchHeight-min.js',
                    'dev/assets/plugins/magnificPopup/jquery.magnific-popup.min.js',
                    'dev/assets/plugins/flexSlider/jquery.flexslider-min.js',
                    'dev/assets/plugins/countTo/jquery.countTo.min.js',
                    'dev/assets/plugins/morphext/morphext.min.js',
                    'dev/assets/js/text-rotator.min.js',
                    'dev/assets/js/animation.min.js',
                    'dev/assets/plugins/sticky/sticky.min.js',
                    'dev/assets/js/main.min.js'
                ],
                dest: 'dist/js/compressed.min.js'
            },
            css: {
                src: [
                    'dev/assets/plugins/bootstrap/css/bootstrap.min.css',
                    'dev/assets/plugins/fontawesome/css/font-awesome.min.css',
                    'dev/assets/plugins/jpreloader/css/jpreloader.min.css',
                    'dev/assets/plugins/animate-css/animate.min.css',
                    'dev/assets/plugins/magnificPopup/magnific-popup.min.css',
                    'dev/assets/plugins/flexSlider/flexslider.min.css',
                    'dev/assets/plugins/morphext/morphext.min.css',
                    'dev/assets/css/berg.min.css'
                ],
                dest: 'dist/css/compressed.min.css'
            }
        },

        htmlmin: { // Task
            dist: { // Target
                options: { // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: { // Dictionary of files
                    'dist/index.html': 'dev/index.html' // 'destination': 'source'
                }
            }
        },

        watch: {
            options: { livereload: true },
            files: ['dev/**'],
            tasks: []
        },

        express:{
            all:{
                options:{
                    port:3000,
                    hostname:'localhost',
                    bases:['dist'],
                    livereload:true 
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');

    grunt.registerTask('default', ['cssmin', 'uglify', 'concat', 'htmlmin', 'express', 'watch']);

};