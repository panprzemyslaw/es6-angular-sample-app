/**
 * ******************************************************************************************************
 *
 *   Defines a home feature
 *
 *  @author  przemek zakoscielny
 *  @date    Dec 13, 2015
 *
 * ******************************************************************************************************
 */
'use strict';
import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';
import HomeController from './controller/HomeController';
import HomeService from './service/HomeService';
import customTpl from './partials/custom.html';

class Feature extends FeatureBase {

    constructor() {
        super('home');
        this.routes = Routes;
    }

    execute() {
        this.controller('HomeController', HomeController);
        this.service('HomeService', HomeService);
        this.run([
            '$templateCache',
            function($templateCache) {
                $templateCache.put('customTpl', customTpl);
            }
        ]);
    }
}

export default Feature;
