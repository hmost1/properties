angular.module('directory.services', ['ngResource'])

    .factory('Employees', function ($resource) {
        return $resource('/properties/:employeeId/:data');
    })
    //TODO: figure out how th is is supposed to be structured wrt to buildings
    .factory('Properties', function ($resource) {
        return $resource('/buildings/:buildingId/properties/:id/:data');
    })

    .factory('Buildings', function ($resource) {
        return $resource('/buildings/:buildingId/:data');
    })

    .factory('Reservations', function ($resource) {
        return $resource('/reservations/:id/:data');
    });


//.factory('Projects', function() {
//  return {
//    all: function() {
//      var projectString = window.localStorage['projects'];
//      if(projectString) {
//        return angular.fromJson(projectString);
//      }
//      return [];
//    },
//    save: function(projects) {
//      window.localStorage['projects'] = angular.toJson(projects);
//    },
//    newProject: function(projectTitle) {
//      // Add a new project
//      return {
//        title: projectTitle,
//        tasks: []
//      };
//    },
//    getLastActiveIndex: function() {
//      return parseInt(window.localStorage['lastActiveProject']) || 0;
//    },
//    setLastActiveIndex: function(index) {
//      window.localStorage['lastActiveProject'] = index;
//    }
//  }
//})//
