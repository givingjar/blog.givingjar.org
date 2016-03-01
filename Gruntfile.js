module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    gitfetch: {
      latest: {
        options: {
          all: true
        }
      }
    },
    
    gitreset: {
      latest: {
        options: {
          mode: 'hard',
          commit: 'origin/master'
        }
      }
    },
  
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
    },
    surge: {
      qa: {
        options: {
          project: '_site.qa/',
          domain: 'givingjarblog.surge.sh'
        }
      },
      prod: {
        options: {
          project: '_site/'
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-git');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-surge');
  
  grunt.registerTask('default', ['jekyll:dist']);
  grunt.registerTask('qa', ['jekyll:qa', 'surge:qa']);
  grunt.registerTask('prod', ['gitfetch:latest', 'gitreset:latest', 'jekyll:dist', 'surge:prod']);
  grunt.registerTask('test', ['jekyll:test']);
};
