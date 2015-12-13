/**
 *  Defines the AboutController controller
 *
 *  @author  przemek zakoscielny
 *  @date    Dec 13, 2015
 *
 */
'use strict';
var AboutController = function($scope, AboutService, events) {

    $scope.showSpinner = true;

    AboutService.getDemoList()
        .success(function(data) {
            $scope.showSpinner = false;
            $scope.originDemolist = data;
            $scope.demolist = [].concat($scope.originDemolist);
        }).error(function(err) {
        events.emit('error', {content: err});
    });

    $scope.$on('$destroy', function() {});
};

AboutController.$inject = [
    '$scope',
    'AboutService',
    'events'
];

export default AboutController;
