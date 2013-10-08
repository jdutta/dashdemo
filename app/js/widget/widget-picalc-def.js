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
 * @fileoverview Widget definition: Simulated value of Pi using monte-carlo estimation
 */

'use strict';

dashDemo.app.factory('widgetPicalcDef', [function () {

    var me = {
        name: 'Pi Calculator',
        directiveName: 'dd-widget-picalc'
    };

    // This will come from a simulator or ideally an output port (in Malhar terminology)
    me.getNextValue = function () {
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
    };

    return me;
}]);