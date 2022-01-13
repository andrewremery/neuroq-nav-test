module.exports = function(grunt) {

	grunt.initConfig({
  
	  watch: {
		sass: {
		  files: '**/*.scss',
		  tasks: ['css'],
		  options: {
			
		  }
		},
		coffee: {
		  files: 'scripts/*.coffee',
		  tasks: ['coffee']
		},
		concat: {
		  files: ['scripts/menu.js','scripts/main.js'],
		  tasks: ['concat']
		},
		uglify: {
		  files: 'scripts/scripts.js',
		  tasks: ['uglify'],
		  options: {
		
		  }
		},
		all: {
		  files: ['**/*.html'],
		  options: {
		
		  }
		}
	  },
  
	  concat: {
		options: {
		  separator: '\n/*next file*/\n\n'
		},
		dist: {
		  src: ['scripts/menu.js', 'scripts/main.js'],
		  dest: 'scripts/scripts.js'
		}
	  },
  
	  uglify: {
		build: {
		  files: {
			'scripts/scripts.min.js': ['scripts/scripts.js']
		  }
		}
	  },
  
	  coffee: {
		compile: {
		 files: {
		   'scripts/menu.js': 'scripts/menu.coffee'
		 }
	   }
	 },
  
	 cssmin: {
	  build: {
		src: 'styles/style-expanded.css',
		// compressed styles
		dest: 'style.css'
	  }
	},
  
	sass: {
	  dev: {
		files: {
		   // destination     // source file
		   // compile expanded first for debugging
		  'styles/style-expanded.css': 'sass/style.scss'
				}
			  }
			}
		  });
  
	// Default task
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('css', ['sass', 'cssmin']);
	grunt.registerTask('js', ['coffee', 'concat', 'uglify']);
  
	// Load up tasks
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
  
  };