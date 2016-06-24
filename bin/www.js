/**
 * Created by Administrator on 2016/6/24.
 */

"use strict";
var app = require('../app');
var config = require('../config/config.js');


process.on('uncaughtException',function (err){
    console.log(err);
    console.log(err.stack);
});

app.listen(config.port,'192.168.1.254',function(){
    console.log('app started, listening on port:',config.port);
});