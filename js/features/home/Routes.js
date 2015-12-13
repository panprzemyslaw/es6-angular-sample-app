/**
 *
 *  Routes module expose route information used in home feature
 *
 *  @author  przemek zakoscielny
 *  @date    Dec 13, 2015
 *
 */
import tpl from './partials/home.html';

export default [
    {
        id: 'home',
        isDefault: true,
        when: '/home',
        controller: 'HomeController',
        template: tpl
    }
];
