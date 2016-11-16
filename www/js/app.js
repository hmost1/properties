angular.module('directory', ['ionic', 'directory.controllers', 'directory.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            //.state('search', {
            //    url: '/search',
            //    templateUrl: 'templates/employee-list.html',
            //    controller: 'EmployeeListCtrl'
            //})
//
            //.state('employee', {
            //    url: '/properties/:employeeId',
            //    templateUrl: 'templates/employee-detail.html',
            //    controller: 'EmployeeDetailCtrl'
            //})
//
            //.state('reports', {
            //    url: '/properties/:employeeId/reports',
            //    templateUrl: 'templates/employee-reports.html',
            //    controller: 'EmployeeReportsCtrl'
            //})

            //Tabs: 
            // setup an abstract state for the tabs directive
            .state('tab', {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html"
            })
            
            // Each tab has its own nav history stack:
            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/dashboard.html',
                        controller: 'DashCtrl'
                    }
                }
            })

             // Each tab has its own nav history stack:
            .state('tab.calendar', {
                url: '/calendar',
                views: {
                    'tab-calendar': {
                        templateUrl: 'templates/calendar.html',
                        controller: 'CalendarCtrl'
                    }
                }
            })

             // Each tab has its own nav history stack:
            .state('tab.guests', {
                url: '/guests',
                views: {
                    'tab-guests': {
                        templateUrl: 'templates/guests.html',
                        controller: 'GuestsCtrl'
                    }
                }
            })

            .state('tab.more', {
                url: '/more',
                views: {
                "tab-more": {
                    templateUrl: 'templates/settings.html',
                    controller: 'SettingsCtrl'
                }}
            })
            
            //TODO: pretty sure we can get rid of this 
            .state('tab.search', {
                url: '/search',
                views: {
                "tab-search": {
                    templateUrl: 'templates/employee-list.html',
                    controller: 'EmployeeListCtrl'
                }}
            })
            //BuildingsListCtrl

            .state('tab.buildings', {
                url: '/buildings',
                views: {
                "tab-buildings": {
                    templateUrl: 'templates/buildings-list.html',
                    controller: 'BuildingsListCtrl'
                }}
            })

            .state('tab.building-properties', {
                url: '/buildings/:buildingId/properties',
                views: {
                "tab-buildings": {
                    templateUrl: 'templates/building-properties.html',
                    controller: 'PropertiesbyBuildingsListCtrl'
                }}
            })

            //drilling down from the above ^^
            .state('tab.property-detail', {
                url: '/buildings/:biuldingId/properties/:propertyId',
                views: {
                "tab-buildings": {
                    templateUrl: 'templates/employee-detail.html',
                    controller: 'EmployeeDetailCtrl'
                }}
            })

            //.state('tab.search', {
            //url: '/search',
            //views: {
            //'tab-friends': {
            //templateUrl: 'templates/tab-friends.html',
            //controller: 'FriendsCtrl'
            //}
            //}
            //})
            
            //.state('tab.friend-detail', {
            //url: '/friend/:friendId',
            //views: {
            //'tab-friends': {
            //templateUrl: 'templates/friend-detail.html',
            //controller: 'FriendDetailCtrl'
            //}
            //}
            //})
            //
            //.state('tab.account', {
            //url: '/account',
            //views: {
            //'tab-account': {
            //templateUrl: 'templates/tab-account.html',
            //controller: 'AccountCtrl'
            //}
            //}
            //});
 
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/dash');

        //$urlRouterProvider.otherwise('/search');

    });
