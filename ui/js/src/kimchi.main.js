/*
 * Project Kimchi
 *
 * Copyright IBM Corp, 2013-2016
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

kimchi.config = undefined;
kimchi.getConfig(function(result) {
    kimchi.config = result;

    if(kimchi.config.federation == true)
        $('#peers').removeClass('hide-content');
}, function() {
    kimchi.config = {}
});

kimchi.capabilities = undefined;
kimchi.getCapabilities(function(result) {
    kimchi.capabilities = result;
}, function() {
    kimchi.capabilities = {};
});

$(function(){
    $('body').removeClass('wok-list wok-gallery');
});
