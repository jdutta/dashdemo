/**
 * Copyright 2013 Joy Dutta
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @fileoverview Base widget controller with common functionality
 */

'use strict';

dashDemo.app.controller('WidgetController', ['$scope', '$timeout', 'events', 'util', function ($scope, $timeout, events, util) {

    /**
     * Refresh delay in msecs is not a widget spec, as it can vary within instances
     *
     * @type {number}
     */
    var refreshDelay = 200,

        refreshTimer = null;

    function updateValueUsingTimer() {
        stopTimer();
        refreshTimer = $timeout(function () {
            $scope.updateValue(); // this is defined in specific widget controller
            $scope.$digest(); // better than $apply, hence the 'false' is in $timeout argument list.
            updateValueUsingTimer();
        }, refreshDelay, false);
    }

    function stopTimer() {
        if (refreshTimer) {
            $timeout.cancel(refreshTimer);
        }
    }

    // can be overridden by the controller of a specific widget directive
    $scope.__name = 'widget-controller';

    // keep track of streaming state, which will reflect in the control buttons
    $scope.streamingStarted = false;

    // will be overridden by a specific widget controller
    $scope.updateValue = angular.noop;

    $scope.getTitle = function () {
        return $scope.widgetInstance.widget.name;
    };

    $scope.getUid = function () {
        return $scope.widgetInstance.uid;
    };

    // Internal function to take care of state
    $scope.startStreamingInternal = function () {
        if ($scope.streamingStarted) { return; }
        $scope.streamingStarted = true;
        updateValueUsingTimer();
    };

    // Internal function to take care of state
    $scope.stopStreamingInternal = function () {
        if (!$scope.streamingStarted) { return; }
        $scope.streamingStarted = false;
        stopTimer();
    };

}]);