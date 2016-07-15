/**
 * Created by SueCher on 2016/6/10.
 */

"use strict";

let ReportController = require('../controllers/report.server.controller');

module.exports = function(app){
    app.route('/report/statistics/:id')
        .get(function(req,res){
            let userId = req.params.id;



            ReportController.scoreByPoint(userId,function(result){

                let arrpoint = [
                    result["0"].length,
                    result["1"].length,
                    result["2"].length,
                    result["3"].length,
                    result["4"].length,
                    result["5"].length,
                    result["6"].length,
                    result["7"].length,
                    result["8"].length,
                    result["9"].length,
                    result["10"].length
                ];


                res.render('report',{userId:userId,pointlist:arrpoint});
            });
        });
};