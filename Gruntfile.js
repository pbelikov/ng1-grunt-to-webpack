module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // uglify: {
    //   dist: {
    //     files: {
    //       'build/app.js': [
    //         // 'node_modules/angular/angular.js',
    //         // 'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
    //         'src/app/*.module.js',
    //         'src/app/**/*.module.js',
    //         'src/app/*.config.js',
    //         'src/app/*.component.js',
    //         'src/app/*.controller.js',
    //         'src/app/**/*.js',
    //         'tmp/*.js'
    //       ]
    //     },
    //     options: {
    //       mangle: false,
    //       sourceMap: {
    //         includeSources: true
    //       }
    //     }
    //   }
    // },

    clean: {
      temp: {
        src: [ 'tmp' ]
      },
      dist: {
        src: [ 'build' ]
      }
    },

    // concat: {
    //   options: {
    //     separator: ';'
    //   },
    //   dist: {
    //     src: [
    //       'node_modules/angular/angular.js',
    //       'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
    //       'src/app/*.module.js',
    //       'src/app/**/*.module.js',
    //       'src/app/*.states.js',
    //       'src/app/*.component.js',
    //       'src/app/*.controller.js',
    //       'src/app/**/*.js',
    //       'tmp/*.js'
    //     ],
    //     dest: 'build/app.js'
    //   }
    // },

    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 8080,
          base: 'build/'
        }
      }
    },

    copy: {
      main: {
        expand: true,
        src: ['src/index.html'],
        dest: 'build/',
        flatten: true
      }
    },

    watch: {
      pack: {
        files: [ 'Gruntfile.js', 'src/app/**/*.js', 'src/app/**/*.html', '!src/app/**/*.spec.js', 'assets/**/*.less' ],
        tasks: [ /*'karma:unit',*/ 'ngtemplates', 'less:dist', 'browserify:code', 'clean:temp' ],
        options: {
          atBegin: true
        }
      }
    },

    less: {
      dev: {
        options: {
          paths: [ "assets/less" ]
        },
        files: {
          "build/style.css": "assets/less/style.less"
        }
      },
      dist: {
        options: {
          paths: [ "assets/less" ],
          cleancss: true
        },
        files: {
          "build/style.css": "assets/less/style.less"
        }
      }
    },

    karma: {
      options: {
        configFile: 'config/karma.conf.js'
      },
      unit: {
        singleRun: true
      },
      junit: {
        singleRun: true,
        reporters: ['junit', 'coverage']
      },
      continuous: {
        singleRun: false,
        autoWatch: true
      }
    },

    ngtemplates: {
      app: {
        src: 'src/app/**/*.html',
        dest: 'tmp/templates.js',
        options: {
          prefix: '',
          module: 'demoApp'
        }
      }
    },

    browserify: {
      code: {
        src: [
          'node_modules/angular/angular.js',
          'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
          'src/app/*.module.js',
          'src/app/**/*.module.js',
          'src/app/*.config.js',
          'src/app/*.component.js',
          'src/app/*.controller.js',
          'src/app/**/*.js',
          'tmp/*.js',
          '!src/app/**/*.spec.js'
        ],
        dest: './build/app.js',
        options: {
          browserifyOptions: { debug: true },
          transform: [['babelify', { 'presets': ['env'] }]]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('package', [ 'clean:dist', 'copy:main', /*'karma:unit', */ 'ngtemplates',
    'connect:server', 'watch:pack' ]);
};