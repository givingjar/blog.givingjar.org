module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jekyll: {
      dist: {
        options: {
          serve: false,
          drafts: false,
          future: false
        }
      },
      test: {
        options: {
          serve: true,
          drafts: true,
          future: true
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-jekyll');
  
  grunt.registerTask('default', ['jekyll:dist']);
  grunt.registerTask('test', ['jekyll:test']);
};
