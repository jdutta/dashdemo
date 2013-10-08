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

dashDemo.app.controller('WidgetPicalcController', ['$scope', '$timeout', 'events', 'util', function ($scope, $timeout, events, util) {

    var refreshDelay = 200, // msec
        refreshTimer = null;

    // This will come from a simulator or ideally an output port (in Malhar terminology)
    function getNextValue() {
        var R = 1000, x, y, i,
            inCir = 0,
            nPoints = 10000;

        // monte-carlo simulation for pi
        for (i = 0; i < nPoints; i++) {
            x = Math.floor(2*R*Math.random() - R); // between -R and R
            y = Math.floor(2*R*Math.random() - R);
            if (x*x + y*y < R*R) {
                inCir++;
            }
        }
        return inCir * 4.0 / nPoints;
    }

    function updateValueUsingTimer() {
        $scope.stopStreaming();
        refreshTimer = $timeout(function () {
            $scope.simulatedPi = getNextValue();
            $scope.$digest(); // better than $apply, hence the 'false' is in $timeout argument list.
            updateValueUsingTimer();
        }, refreshDelay, false);
    }

    $scope.__name = 'widget-picalc-controller';

    // This will be called from the base widget directive on clicking the start button
    $scope.startStreaming = function () {
        console.log('picalc start', $scope.uniqWidget.uid);

        updateValueUsingTimer();
    };

    $scope.stopStreaming = function () {
        if (refreshTimer) {
            $timeout.cancel(refreshTimer);
        }
    };
}]);