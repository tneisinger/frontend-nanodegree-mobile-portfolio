//var ngrok = require('ngrok');
module.exports = function(grunt) {

  // Load grunt tasks
  require('load-grunt-tasks')(grunt);

  // Grunt configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      js: {
        src: ['src/js/perfmatters.js'],
        dest: 'dist/js/perfmatters.js'
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    compress: {
      main: {
        options: {
          mode: 'gzip'
        },
        files: [
          {expand: true, src: ['dist/js/*.js', 'dist/*.html', 'dist/css/*.css']}
        ]
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css/',
          src: ['*.css'],
          dest: 'dist/css/'
        }]
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [
          {
            expand: true,     // Enable dynamic expansion
            cwd: 'src/',
            src: ['*.html'],
            dest: 'dist'
          }
        ]
      }
    },
    image_resize: {
      resize: {
        options: {
          width: 100
        },
        files: {
          'src/views/images/pizzeria.jpg': 'dist/views/images/pizzeria.jpg'
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-image-resize');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  //grunt.registerTask('default', ['jshint', 'htmlmin', 'uglify', 'cssmin', 'compress']);
  grunt.registerTask('default', ['jshint', 'htmlmin', 'uglify', 'cssmin', 'image_resize', 'imagemin']);
};
