/**
 *  Defines the HomeService
 *
 *  @author  przemek zakoscielny
 *  @date    Dec 13, 2015
 *
 */
'use strict';
var HomeService = function($http, utils) {

    this.getStates = function() {
        return $http.get(utils.getApi('/states'));
    };

    this.getMenus = function() {
        return $http.get(utils.getApi('/menus'));
    };

    this.getDropdown = function() {
        return $http.get(utils.getApi('/dropdown'));
    };

};

HomeService.$inject = ['$http', 'utils'];

export default HomeService;
