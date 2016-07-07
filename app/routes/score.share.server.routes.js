/**
 * Created by SueCher on 2016/6/10.
 */

"use strict";


let config = require('../../config/config');

module.exports = function(app){
    app.route('/sharescore/')
        .get(function(req,res){

            let avgeragePoint = req.query.avgeragePoint;
            let arrowRoadStandard = req.query.arrowRoadStandard;
            let arrowCount = req.query.arrowCount;
            let date = req.query.date;
            let pic = req.query.pic;
            let totalPoint = req.query.totalPoint;

            res.redirect("/ibaxin.scoreshare.page.html?avgeragePoint="+avgeragePoint+"&&arrowRoadStandard="+arrowRoadStandard+"&&arrowCount="+arrowCount+"&&date="+date+"&&pic="+pic+"&&totalPoint="+totalPoint);
        });
};