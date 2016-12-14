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

    .controller('NewBuildingCtrl', function ($scope, Buildings) {
      $scope.title = "New Building"
    	$scope.building = {};
      $scope.add = function() {
        Buildings.save($scope.building, function(res) {
          //console.log(res);, 
          //TODO: check for error
        });
      }
    })


    .controller('EditBuildingCtrl', function ($scope, $stateParams, Buildings) {
      //$scope.building = $stateParams.building_id
      $scope.title = "Edit Building"
      $scope.building = Buildings.get({buildingId: $stateParams.buildingId});
      $scope.add = function() {
        $scope.building.$save({buildingId: $stateParams.buildingId}); 
      }
    })

    .controller('BuildingsListCtrl', function ($scope, $ionicPopup, Buildings) {
       console.log('buildings'); 

       var updateList = function() {
       	$scope.buildings = Buildings.query();
       };

       updateList();

       //TODO: this looks kind of weird when it reloads, maybe just pass in the index
       //and remove it from the list
       $scope.delete = function(id) {
        var confirmPopup = $ionicPopup.confirm({
          title: 'Delete Building ' + id,
          template: 'Are you sure you want to delete this building?'
        });

        confirmPopup.then(function(res) {
          if(res) {
            Buildings.delete({buildingId: id}, updateList);
            console.log('deleting');

          } else {
            console.log('not deleting');
          }
        });
      };
    })

    .controller('NewPropertybyBuildingsListCtrl', function ($scope, $stateParams, Employees) {
      console.log('new-property'); 
      $scope.buildingId = $stateParams.buildingId;
      $scope.title = "New Unit";

      $scope.property = {
          unitNumber: "",
          guests: 0, 
          beds: 0, 
          bedrooms: 0,
          bathrooms: 0,
          nightlyRate: 0, 
          buildingId: $scope.buildingId, 
          furnished: false
      };
      $scope.save = function() {
        console.log($scope.property)
        Employees.save($scope.property, function(res) {
        	//TODO: check for error
        });
      }
    })
    //TODO: check if these should use "query"
    .controller('PropertiesbyBuildingsListCtrl', function ($scope, $stateParams,  $ionicPopup, Buildings, Employees, Properties) {
        console.log('properties-by-building'); 
        
        var updateList = function() {
          Buildings.query({buildingId: $stateParams.buildingId, data: 'properties'}, function(res){
            $scope.properties=res;
          });
        };
        
       updateList();
       $scope.building = Buildings.get({buildingId: $stateParams.buildingId}); 

        //TODO: this looks kind of weird when it reloads, maybe just pass in the index
       //and remove it from the list
       $scope.delete = function(id) {
        var confirmPopup = $ionicPopup.confirm({
          title: 'Delete Unit ' + id,
          template: 'Are you sure you want to delete this unit?'
        });

        confirmPopup.then(function(res) {
          if(res) {
            Properties.delete({buildingId: $stateParams.buildingId, id: id}, updateList);
            console.log('deleting unit');

          } else {
            console.log('not deleting unit');
          }
        });
      };
    })

    .controller('EditPropertyCtrl', function ($scope, $stateParams, Buildings, Employees, Properties) {
      $scope.buildingId = $stateParams.buildingId;
      $scope.title = "Edit Unit";

      Properties.get({buildingId: $stateParams.buildingId, id: $stateParams.propertyId}, function(res){
        $scope.property = res;
      });

      $scope.save = function() {
        $scope.property.$save({buildingId: $stateParams.buildingId, id: $stateParams.propertyId}); 
      }
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


