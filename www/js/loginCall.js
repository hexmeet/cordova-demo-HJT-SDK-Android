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
        document.getElementById("loginCall").addEventListener("click", this.loginCall.bind(this), false);
    },

    loginCall(){
        const service = document.getElementById('service').value;
        const user = document.getElementById('user').value;
        const password = document.getElementById('password').value;
        if(commonUtils.isNullOrEmpty(service)) {
            alert('服务器不能为空！')
            return ;
        }
        if(commonUtils.isNullOrEmpty(user)) {
            alert('账号/手机号/邮箱不能为空！')
            return ;
        }
        if(commonUtils.isNullOrEmpty(password)) {
            alert('密码不能为空！')
            return ;
        }
        cordova.plugins.HjtCordova.login(service, user, password, (msg)=> {
            // alert(msg);
            commonUtils.gotoPage('makeCall', msg);
        }, (error) => {
            alert(error);
        });
    }
};

app.initialize();