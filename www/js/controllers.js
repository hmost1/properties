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

    //TODO: add all other tabs 
    .controller('BuildingsListCtrl', function ($scope, Buildings) {
        console.log('buildings'); 
        $scope.buildings = Buildings.query();
    })

    .controller('PropertiesbyBuildingsListCtrl', function ($scope, $stateParams, Buildings) {
        console.log('properties-buildings'); 
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


