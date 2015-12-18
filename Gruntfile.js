module.exports = function(grunt) {
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    jade: {
      html: {
        
            files: [
              {
                expand: true,         // Enable dynamic expansion.
                cwd: 'jade/',         // Src matches are relative to this path.
                src: ['**/*.jade', '!**/includes/**'],   // Actual pattern(s) to match.
                dest: './',          // Destination path prefix.
                ext: '.html'          // Dest filepaths will have this extension.
              },

          ],
          options: {
          client: false,
          pretty: true
        }
      }
    },

    watch: {

      jade: {
        files: ['jade/**/*.jade'],
        tasks: ['jade'],
        options: {
          livereload: true,
        },
      }
      
    },

    clean: {
      build: {
        src: ["index.html"]
      }
    }
  

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['jade']);
  grunt.registerTask('default', ['clean','build','watch']);
}