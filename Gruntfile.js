module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: 5000
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
            cwd: 'src/assets',
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
      main: {
        expand: true,
        src: ['src/assets/fonts/*'],
        dest: 'build/assets/fonts',
        filter: 'isFile',
        flatten: true
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
    bumpup: ['package.json', 'bower.json'],
    tagrelease: {
      file: 'package.json',
      commit:  false,
      message: 'Release %version%',
      prefix:  '',
      annotate: false
    }
  });

  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-tagrelease');
  grunt.loadNpmTasks('grunt-bumpup');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'copy', 'concat']);
  grunt.registerTask('release', function (type) {
    type = type ? type : 'patch';
    grunt.task.run('default');
    grunt.task.run('cssmin');
    grunt.task.run('clean');
    grunt.task.run('uglify');
    grunt.task.run('bumpup:' + type);
    grunt.task.run('tagrelease');
  });
};