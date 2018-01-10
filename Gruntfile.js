module.exports = function(grunt) {

  grunt.initConfig({
    htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'index.html': 'large-html/index.html',
        'project-2048.html':'large-html/project-2048.html',
        'project-webperf.html':'large-html/project-webperf.html',
        'views/pizza.html':'large-html/pizza.html',
        'project-mobile.html':'large-html/project-mobile.html',     // 'destination': 'source'
      }
    },
  },
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.registerTask('default', ['htmlmin']);

};
