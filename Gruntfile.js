module.exports = function(grunt) {

  grunt.initConfig({
	  
    watch: {
            less: {
                files: ['less/*.less'],
                tasks: ['less'],
                options: {
                    livereload: false
                }
            }
    },
	less: { 
		production: {
			options: {
				cleancss: true
			},
			files: {
				"assets/css/style.min.css": 'less/style.less'
			}
		},
		development: {
			files: {
				"assets/css/style.css": 'less/style.less'
			}
		}
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
 
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-reload');
  grunt.loadNpmTasks('grunt-contrib-watch');
};