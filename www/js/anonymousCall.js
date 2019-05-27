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
        document.getElementById("goBack").addEventListener("click", commonUtils.gotoPage.bind(this,'index'), false);
        document.getElementById("anonymousCall").addEventListener("click", this.anonymousCall.bind(this), false);
    },

    anonymousCall() {
        const service = document.getElementById('service').value;
        const number = document.getElementById('number').value;
        const displayName = document.getElementById('displayName').value;
        if(commonUtils.isNullOrEmpty(service)) {
            alert('服务器不能为空！')
            return ;
        }
        if(commonUtils.isNullOrEmpty(number)) {
            alert('会议ID不能为空！')
            return ;
        }
        if(commonUtils.isNullOrEmpty(displayName)) {
            alert('用户名不能为空！')
            return ;
        }
        cordova.plugins.HjtCordova.anonymousCall(service, number, displayName, function(msg){
            // alert(msg);
        },function(error){
            alert(error);
        });
    }
};

app.initialize();