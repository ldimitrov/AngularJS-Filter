'use strict';
var App = angular.module('filterApp', ['ngResource', 'App.filters']);
App.controller('phoneController', ['$scope', function ($scope) {
    $scope.selectedPhone = [];
    $scope.phoneList = [{
        id: 1,
        name: 'Apple'
    }, {
        id: 2,
        name: 'HTC'
    }, {
        id: 3,
        name: 'LG'
    }];
    
    $scope.phones = [{
        model: 'iPhone 4s',
        os: 'iOS',
        company: {
            id: 1,
            name: 'Apple'
        }
    }, {
        model: 'Nexus X',
        os: 'Android',
        company: {
            id: 3,
            name: 'LG'
        }
    }, {
        model: 'One',
        os: 'Android',
        company: {
            id: 2,
            name: 'HTC'
        }
    }, {
        model: 'iPhone 6 Plus',
        os: 'iOS',
        company: {
            id: 1,
            name: 'Apple'
        }
    }, {
        model: 'Nexus 4',
        os: 'Android',
        company: {
            id: 3,
            name: 'LG'
        }
    }, {
        model: 'Nexus 5',
        os: 'Android',
        company: {
            id: 3,
            name: 'LG'
        }
    }, {
        model: 'iPhone 6',
        os: 'iOS',
        company: {
            id: 1,
            name: 'Apple'
        }
    }];
    
    $scope.setSelectedModel = function () {
        var id = this.company.id;
        if (_.contains($scope.selectedPhone, id)) {
            $scope.selectedPhone = _.without($scope.selectedPhone, id);
        } else {
            $scope.selectedPhone.push(id);
        }
        return false;
    };
    
    $scope.isChecked = function (id) {
        if (_.contains($scope.selectedPhone, id)) {
            return 'fa-check pull-right';
        }
        return false;
    };
}]);

angular.module('App.filters', []).filter('phoneFilter', [function () {
    return function (phones, selectedPhone) {
        if (!angular.isUndefined(phones) && !angular.isUndefined(selectedPhone) && selectedPhone.length > 0) {
            var tempPhones = [];
            angular.forEach(selectedPhone, function (id) {
                angular.forEach(phones, function (phone) {
                    if (angular.equals(phone.company.id, id)) {
                        tempPhones.push(phone);
                    }
                });
            });
            return tempPhones;
        } else {
            return phones;
        }
    };
}]);