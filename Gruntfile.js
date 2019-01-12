module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    src: [
                        'src/assets/plugins/jpreloader/css/jpreloader.css',
                        'src/assets/plugins/magnificPopup/magnific-popup.css',
                        'src/assets/plugins/flexSlider/flexslider.css',
                        'src/assets/plugins/morphext/morphext.css',
                        'src/assets/css/berg.css'
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
                        'src/assets/plugins/detectmobilebrowser/detectmobilebrowser.js',
                        'src/assets/plugins/debouncer/debouncer.js',
                        'src/assets/plugins/sticky/sticky.js',
                        'src/assets/plugins/countTo/countTo.js',
                        'src/assets/js/text-rotator.js',
                        'src/assets/js/animation.js',
                        'src/assets/js/main.js'
                    ],
                    ext: '.min.js'
                }]
            }
        },

        concat: {
            js: {
                src: [
                    'src/assets/plugins/jquery.min.js',
                    'src/assets/plugins/bootstrap/js/bootstrap.min.js',
                    'src/assets/plugins/jpreloader/js/jpreloader.min.js',
                    'src/assets/plugins/detectmobilebrowser/detectmobilebrowser.min.js',
                    'src/assets/plugins/debouncer/debouncer.min.js',
                    'src/assets/plugins/easing/jquery.easing.min.js',
                    'src/assets/plugins/inview/jquery.inview.min.js',
                    'src/assets/plugins/matchHeight/jquery.matchHeight-min.js',
                    'src/assets/plugins/magnificPopup/jquery.magnific-popup.min.js',
                    'src/assets/plugins/flexSlider/jquery.flexslider-min.js',
                    'src/assets/plugins/countTo/jquery.countTo.min.js',
                    'src/assets/plugins/morphext/morphext.min.js',
                    'src/assets/js/text-rotator.min.js',
                    'src/assets/js/animation.min.js',
                    'src/assets/plugins/sticky/sticky.min.js',
                    'src/assets/js/main.min.js'
                ],
                dest: 'dist/js/compressed.min.js'
            },
            css: {
                src: [
                    /*'src/assets/plugins/bootstrap/css/bootstrap.min.css',
                    'src/assets/plugins/fontawesome/css/font-awesome.min.css',*/
                    'src/assets/plugins/jpreloader/css/jpreloader.min.css',
                    'src/assets/plugins/animate-css/animate.min.css',
                    'src/assets/plugins/magnificPopup/magnific-popup.min.css',
                    'src/assets/plugins/flexSlider/flexslider.min.css',
                    'src/assets/plugins/morphext/morphext.min.css',
                    'src/assets/css/berg.min.css'
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
                    'dist/index.html': 'src/index.html' // 'destination': 'source'
                }
            }
        },

        copy: {
            images: {
              files: [
                { 
                  expand: true,
                  cwd: 'src/assets/images/', 
                  src: ['**/*.{png,jpg,svg}'], 
                  dest:'dist/images/' 
                }
              ]
            }
        },

        watch: {
            options: { livereload: true },
            files: ['src/**'],
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
    grunt.loadNpmTasks('grunt-contrib-copy');


    grunt.registerTask('default', ['cssmin', 'uglify', 'concat', 'htmlmin', 'copy', 'express', 'watch']);
    grunt.registerTask('build', ['cssmin', 'uglify', 'concat', 'htmlmin', 'copy']);

};