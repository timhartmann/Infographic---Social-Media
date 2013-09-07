module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: true
      },
      files: [
        'src/**'
      ],
      tasks: ['default']
    },
    sass: {
      build: {
        options: {
          style: 'expanded',
          compass: true
        },
        files: [
          {
            expanded: true,
            src: ['src/assets/scss/application.scss'],
            dest: 'build/assets/stylesheets/application.css',
            filter: 'isFile'
          }
        ]
      }
    },
    clean: {
      files: [
        'build/assets/stylesheets/application.css'
      ]
    },
    copy: {
      fonts: {
        expand: true,
        src: ['src/assets/fonts/*'],
        dest: 'build/assets/fonts',
        filter: 'isFile',
        flatten: true
      },
      html: {
        expand: true,
        src: ['src/*.html'],
        dest: 'build/',
        flatten: true,
        filter: 'isFile'
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'build/assets/stylesheets/',
        src: [
          'application.css'
        ],
        dest: 'build/assets/stylesheets/',
        ext: '.min.css'
      }
    },
    concat: {
      build: {
        src: [
          'src/assets/components/jquery/jquery.js',
          'src/assets/components/html5shiv/dist/html5shiv.js',
          'src/assets/js/application.js'
        ],
        dest: 'build/assets/javascript/application.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/assets/javascript/application.js',
        dest: 'build/assets/javascript/application.min.js'
      }
    },
    release: {
      options: {
        file: [
          'package.json',
          'bower.json'
        ],
        npm: false,
        tagMessage: 'release <%= version %>'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'copy', 'concat']);
  grunt.registerTask('release', ['default', 'cssmin', 'uglify', 'clean', 'release']);
};