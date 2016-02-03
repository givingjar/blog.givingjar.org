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
      qa: {
        options: {
          serve: false,
          drafts: false,
          future: true,
          dest: './_site.qa',
          config: '_config.yml,_config.qa.yml'
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
  grunt.registerTask('qa', ['jekyll:qa']);
  grunt.registerTask('test', ['jekyll:test']);
};
