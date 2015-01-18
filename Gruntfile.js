module.exports = function(grunt) {

    grunt.initConfig({

        compass: {
            dist: {
                options: {
                    sassDir: 'assets/sass',
                    cssDir: 'assets/css',
                    sourcemap: true
                }
            }
        },

        browserSync: {
            bsFiles: {
                src: ['assets/css/*.css', '*.html', '*.php']
            },
            options: {
                watchTask: true,
                // if php server
                proxy: 'localhost/portfolio'
            }
        },

        watch: {
            files: ["assets/sass/**/*.scss", "assets/sass/**/*.css", 'assets/javascripts/app.js'],
            tasks: ['compass', 'concat', 'uglify']
        },

        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['assets/vendor/jquery/dist/jquery.js', 'assets/vendor/fancybox/source/jquery.fancybox.js', 'assets/vendor/isotope/dist/isotope.pkgd.min.js', 'assets/javascripts/app.js'],
                dest: 'assets/javascripts/main.js'
            },
        },

        uglify: {
            my_target: {
                files: {
                    'assets/javascripts/main.min.js': 'assets/javascripts/main.js'
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('watching', ['browserSync', 'watch']);

}
