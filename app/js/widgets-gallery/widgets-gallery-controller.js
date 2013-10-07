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

dashDemo.app.controller('WidgetsGalleryController', ['$scope', '$rootScope', 'events', function ($scope, $rootScope, events) {

    $scope.widgets = [
        {
            name: 'Pi Calculator',
            directiveName: 'dd-widget-picalc'
        },
        {
            name: 'Yahoo Finance Quotes',
            directiveName: 'dd-widget-yfiquotes'
        }
    ];

    /**
     * When you click on a widget name in the gallery, broadcast an event with the widget object.
     *
     * @param widget
     */
    $scope.onWidgetSelected = function (widget) {
        console.log('widget selected', widget);
        $rootScope.$broadcast(events.ADD_WIDGET_D, widget);
    };

}]);
