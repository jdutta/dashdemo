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

dashDemo.app.directive('ddWidgetsDash', ['$compile', function ($compile) {

    var _$el = null,
        _scope = null;

    /**
     * Create a widget directive, add to dom and compile it.
     *
     * @param widgetInstance
     */
    function addWidgetToDom(widgetInstance) {

        // Prepare the widget directive. Create a new child scope of this scope and put the widget info in there.
        // Compile the directive using the new scope.
        var $widgetEl = angular.element('<div dd-widget '+widgetInstance.widget.directiveName+'></div>'),
            childScope = _scope.$new(true);
        childScope.widgetInstance = widgetInstance;

        _$el.append($widgetEl);
        $compile($widgetEl)(childScope);
    }

    function linker (scope, $el, attrs) {
        console.log('widgets dash linked');
        _$el = $el;
        _scope = scope;

        scope.addWidgetToDom = addWidgetToDom;
    }

    return {
        restrict: 'A',
        replace: true,
        scope: true,
        link: linker,
        templateUrl: 'templates/widgets-dash.html',
        controller: 'WidgetsDashController'
    };
}]);

