/**
 * Created by SueCher on 2016/6/10.
 */

var config = null;

if(process && process.env && process.env.NODE_ENV){
    config = require('./env/development.js');
}else{
    config = require('./env/development.js');
}

module.exports = config;