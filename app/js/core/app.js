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
 * @fileoverview Entry point for the DashDemo app. This file needs to be included before any other app js files.
 */

'use strict';

// Top level namespace
window.dashDemo = window.dashDemo || {};

// Declare app level module
dashDemo.app = angular.module('dashDemo.app', []);

// Route configuration
dashDemo.app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    $routeProvider
        .when('/', { })
        .otherwise({ redirectTo: '/' });
}]);

// A central place to catch all errors in the app
dashDemo.app.factory('$exceptionHandler', ['$injector', function ($injector) {
    //var _logger = Logger.create('dashdemo-error');

    return function (exception, cause) {
        //_logger.error(exception.message, exception.stack);

        // broadcast events for any subscriber to consume
        //var rootScope = $injector.get('$rootScope');
        //if (rootScope) {
        //    rootScope.$broadcast(...)
        //}
    };
}]);