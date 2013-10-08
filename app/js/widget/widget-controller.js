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
 * @fileoverview
 */

'use strict';

dashDemo.app.controller('WidgetController', ['$scope', 'events', 'util', function ($scope, events, util) {

    // can be overridden by the controller of a specific widget directive
    $scope.__name = 'widget-controller';

    $scope.streamingStarted = false;

    $scope.getTitle = function () {
        return $scope.uniqWidget.widget.name;
    };

    // These will be overridden by the specific widget controllers
    $scope.startStreaming = angular.noop;
    $scope.stopStreaming = angular.noop;

    // Internal function to take care of state
    $scope.startStreamingInternal = function () {
        $scope.streamingStarted = true;
        $scope.startStreaming();
    };

    // Internal function to take care of state
    $scope.stopStreamingInternal = function () {
        $scope.streamingStarted = false;
        $scope.stopStreaming();
    };

}]);