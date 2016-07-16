/**
 * Created by SueCher on 2016/6/10.
 */

"use strict";

let request = require('request');
let config = require('../../config/config');

module.exports = {
    scoreByPoint:function(userId,callback){
        let options = {
            url:config.interface + "/pointgroup",
            headers:{
                'Content-Type':'application/json',
                'User-Agent':'request'
            },
            json:{
                "userId":userId
            }
        };
        request.post(options,function(error,res,body){

            if (!error && res.statusCode == 200) {
                callback(body);
            }
        });
    },
    userActivity:function(userId,begindate,enddate,callback){
        let options = {
            url:config.interface + "/useractivity",
            headers:{
                'Content-Type':'application/json',
                'User-Agent':'request'
            },
            json:{
                "userId":userId,
                "begindate":begindate,
                "enddate":enddate
            }
        };
        request.post(options,function(error,res,body){
            if (!error && res.statusCode == 200) {
                callback(body);
            }
        });
    }

};