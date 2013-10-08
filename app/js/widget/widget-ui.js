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

// This is a base widget directive.
// This offers common functionality like close, start and stop actions.
// The controller can define some common functions in the scope which will be shared with the specific directive.
dashDemo.app.directive('ddWidget', ['$compile', function ($compile) {

    function closeWidget(scope, $el) {
        $el.remove();
        scope.$destroy(); // manually destroy because scope for this was manually created new.
    }

    function createTitle() {
        return angular.element('<header>Widget: {{ getTitle() }}</header>');
    }

    function createCloseBtn() {
        return angular.element('<span class="dd-close" ng-click="closeWidget()">&times;</span>');
    }

    function createControlPanel() {
        return angular.element(
            '<div class="dd-widget-control-panel">' +
                '<span class="dd-start-btn" ng-hide="streamingStarted" ng-click="startStreamingInternal()">Start</span>' +
                '<span class="dd-stop-btn" ng-show="streamingStarted" ng-click="stopStreamingInternal()">Stop</span>' +
            '</div>');
    }

    function linker(scope, $el, attrs) {
        console.log('widget linked');
        scope.closeWidget = angular.bind(null, closeWidget, scope, $el);

        var $titleEl = createTitle(),
            $closeBtnEl = createCloseBtn(),
            $controlPanelEl = createControlPanel();

        $el.prepend($titleEl).prepend($closeBtnEl).append($controlPanelEl);

        // compile the appended elements as they have ng-xyz directives
        $compile($titleEl)(scope);
        $compile($closeBtnEl)(scope);
        $compile($controlPanelEl)(scope);
    }

    return {
        restrict: 'A',
        link: linker,
        controller: 'WidgetController'
    };
}]);

