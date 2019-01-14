
module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
  
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.initConfig({
      project: {
        dev: 'src',
        dist: 'dist',
      },
      clean: ['dist'],
      sass: {
        options: {
          sourceMap: true
        },
        dist: {
          files: {
            "dist/css/app.dark.css": "src/sass/app.dark.scss",
            "dist/css/app.light.css": "src/sass/app.light.scss",
            "dist/css/app.office.css": "src/sass/app.office.scss",
          }
        }
      },
      less: {
        dev: {
          files: [{
            expand: true,
            cwd: 'src/less',
            src: ['*'],
            dest: 'dist/css/',
            rename: function(dest, src) {
              var filename = `${dest}${src.replace("less", "css")}`;
              console.log(`created ${filename}`);
              return filename;
            },
          }],
          options: {
            compress: true,
          }
        },
      },
      webpack: {
        options: {
          // stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
          stats: {
            colors: true,
            modules: true,
            reasons: false
          },
          progress: true,
        },
        prod: require('./build/webpack.prod'),
        dev: Object.assign({ watch: true }, require('./build/webpack.dev'))
      },
      
      watch: {
        styles: {
          files: [
            '<%= project.dev %>/sass/**/*.scss',
            '<%= project.dev %>/less/**/*.less'
          ],
          tasks: ['less:dev', 'sass'],
          options: {
            livereload: 35728
          }
        },
        scripts: {
          files: ['Gruntfile.js',
            '<%= project.dev %>/**/*.js',
            '<%= project.dev %>/**/*.ts',
            '<%= project.dev %>/**/*.html',
            '<%= project.dev %>/**/*.json',
            '<%= project.dev %>/**/*.svg',
            '<%= project.dev %>/img/**',
          ],
          tasks: ['webpack:dev'], // !important
          options: {
            livereload: 35729
          }
        },
      }
    });
  
    grunt.registerTask('default', [
      'clean',
      'less:dev',
      'sass',
      'webpack:prod',
    ]);
  };
  