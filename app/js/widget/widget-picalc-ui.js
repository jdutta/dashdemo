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
 * @fileoverview Directive for the PiCalc widget
 */

'use strict';

dashDemo.app.directive('ddWidgetPicalc', ['$compile', function ($compile) {

    function linker (scope, $el, attrs) {
        console.log('picalc widget linked', scope);
    }

    return {
        restrict: 'A',
        require: 'ddWidget',
        // scope: false means not to create another isolated scope, so the scope that was used to compile this
        // directive stays in effect. same as not specifying it at all.
        //scope: false,
        replace: true,
        link: linker,
        templateUrl: 'templates/widget-picalc.html',
        controller: 'WidgetPicalcController'
    };
}]);

