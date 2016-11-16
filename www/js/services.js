angular.module('directory.services', ['ngResource'])

    .factory('Employees', function ($resource) {
        return $resource('/properties/:employeeId/:data');
    })

    .factory('Buildings', function ($resource) {
        return $resource('/buildings/:buildingId/:data');
    });
