/**
 *  Defines the AboutService
 *
 *  @author  przemek zakoscielny
 *  @date    Dec 13, 2015
 *
 */
'use strict';
var AboutService = function($http, utils) {

    this.getDemoList = function() {
        return $http.get(utils.getApi('/demolist'));
    };

};

AboutService.$inject = ['$http', 'utils'];

export default AboutService;
