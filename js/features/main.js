/**
 *  Entrance of features
 *
 *  @author  przemek zakoscielny
 *  @date    Dec 13, 2015
 *
 */
'use strict';
import about from './about/main';
import common from './common/main';
import home from './home/main';

export default [about, ...common, home];
