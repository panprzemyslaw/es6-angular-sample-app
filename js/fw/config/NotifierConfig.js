/**
 *  NotifierConfig set angular-sweetnotifier needed configuration
 *
 *
 *  @author  przemek zakoscielny
 *  @date    Dec 13, 2015
 *
 */
'use strict';
import ConfiguratorBase from 'lib/ConfiguratorBase';

class Configurator extends ConfiguratorBase {
    constructor(features, app) {
        super(features, app);
    }

    notifierConfig(notifierProvider) {
        notifierProvider.setPlacement('top', 'right');
        notifierProvider.setUseNativeWhileBlur(true);
    }

    execute() {
        this.notifierConfig.$inject = ['notifierProvider'];
        this.config(this.notifierConfig);
    }
}

export default Configurator;
