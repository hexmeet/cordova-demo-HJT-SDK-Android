/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.getElementById("head").innerHTML = commonUtils.getQueryString('name');
        document.getElementById("goBack").addEventListener("click", commonUtils.gotoPage.bind(this, 'loginCall'), false);
        document.getElementById("makeCall").addEventListener("click", this.makeCall.bind(this), false);
        document.getElementById("logout").addEventListener("click", this.logout.bind(this), false);
    },

    makeCall() {
        const number = document.getElementById('number').value;
        if(commonUtils.isNullOrEmpty(number)) {
            alert('会议号码不能为空！')
            return ;
        }
        cordova.plugins.HjtCordova.makeCall(number, (msg) => {
            // alert(msg);
        }, (error) => {
            alert(error);
        });
    },

    logout(){
        cordova.plugins.HjtCordova.logout((msg) => {
            // alert(msg);
            commonUtils.gotoPage('index');
        }, (error) => {
            alert(error);
        });
    }
};

app.initialize();