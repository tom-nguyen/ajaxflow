module.exports = function( grunt ) {

	// Project configuration
	grunt.initConfig( {
		pkg:    grunt.file.readJSON( 'package.json' ),
		phpcs: {
			application: {
				dir: '../'
			},
			options: {
				bin: 'phpcs',
				standard: 'WordPress',
				ignore: '_build/*'
			}
		}
	} );

	// Load other tasks
	grunt.loadNpmTasks('grunt-phpcs');

	// Default task.
	grunt.registerTask( 'default', ['phpcs'] );

};