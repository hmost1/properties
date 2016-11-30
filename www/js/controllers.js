angular.module('directory.controllers', [])

    .controller('EmployeeListCtrl', function ($scope, Employees) {

        $scope.searchKey = "";

        $scope.clearSearch = function () {
            $scope.searchKey = "";
            $scope.employees = Employees.query();
        }

        $scope.search = function () {
            $scope.employees = Employees.query({name: $scope.searchKey});
        }

        $scope.employees = Employees.query();
    })

    .controller('EmployeeDetailCtrl', function($scope, $stateParams, Employees) {
        console.log('details');
        $scope.employee = Employees.get({employeeId: $stateParams.propertyId});
    })

    .controller('EmployeeReportsCtrl', function ($scope, $stateParams, Employees) {
        console.log('reports');
        $scope.employee = Employees.get({employeeId: $stateParams.employeeId, data: 'reports'});
    })

    //TODO: should this be all part of the buildingslistctrl? 
    .controller('NewBuildingCtrl', function ($scope, Buildings) {
        console.log('new building'); 
        $scope.building = {};
        $scope.add = function() {
            Buildings.save($scope.building, function(res) {
                console.log("got it!");
                console.log(res);

            });
        }
    })

    //TODO: add all other tabs 
    .controller('BuildingsListCtrl', function ($scope, Buildings) {
        console.log('buildings'); 
        $scope.buildings = Buildings.query();
    })

    .controller('NewPropertybyBuildingsListCtrl', function ($scope, $stateParams, Employees) {
        console.log('new-property'); 
        $scope.buildingId = $stateParams.buildingId;
        $scope.property = {buildingId: $scope.buildingId};
        $scope.add = function() {
            Employees.save($scope.property, function(res) {
                console.log(res);
            });
        }
    })

    .controller('PropertiesbyBuildingsListCtrl', function ($scope, $stateParams, Buildings) {
        console.log('properties-by-building'); 
        $scope.building = Buildings.get({buildingId: $stateParams.buildingId, data: 'properties'});
    })

    .controller('DashCtrl', function ($scope, $stateParams, Buildings) {
        console.log('dash-ctrl'); 
    })

    .controller('CalendarCtrl', function ($scope, $stateParams, Buildings) {
        console.log('cal-ctrl'); 
    })

    .controller('GuestsCtrl', function ($scope, $stateParams, Buildings) {
        console.log('guests-ctrl'); 
    })

    .controller('SettingsCtrl', function ($scope, $stateParams, Buildings) {
        console.log('settings-ctrl'); 
    });


