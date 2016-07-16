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

                if(!result["0"]){
                    result["0"] = 0;
                }

                if(!result["1"]){
                    result["1"] = 0;
                }

                if(!result["2"]){
                    result["2"] = 0;
                }

                if(!result["3"]){
                    result["3"] = 0;
                }

                if(!result["4"]){
                    result["4"] = 0;
                }

                if(!result["5"]){
                    result["5"] = 0;
                }

                if(!result["6"]){
                    result["6"] = 0;
                }

                if(!result["7"]){
                    result["7"] = 0;
                }

                if(!result["8"]){
                    result["8"] = 0;
                }

                if(!result["9"]){
                    result["9"] = 0;
                }

                if(!result["10"]){
                    result["10"] = 0;
                }


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




                ReportController.userActivity(userId,"2016-01-01","2016-12-31",function(resultactivity){

                    if(!resultactivity["0"]){
                        resultactivity["0"] = 0;
                    }

                    if(!resultactivity["1"]){
                        resultactivity["1"] = 0;
                    }

                    if(!resultactivity["2"]){
                        resultactivity["2"] = 0;
                    }

                    if(!resultactivity["3"]){
                        resultactivity["3"] = 0;
                    }

                    if(!resultactivity["4"]){
                        resultactivity["4"] = 0;
                    }

                    if(!resultactivity["5"]){
                        resultactivity["5"] = 0;
                    }

                    if(!resultactivity["6"]){
                        resultactivity["6"] = 0;
                    }

                    if(!resultactivity["7"]){
                        resultactivity["7"] = 0;
                    }

                    if(!resultactivity["8"]){
                        resultactivity["8"] = 0;
                    }

                    if(!resultactivity["9"]){
                        resultactivity["9"] = 0;
                    }

                    if(!resultactivity["10"]){
                        resultactivity["10"] = 0;
                    }

                    if(!resultactivity["11"]){
                        resultactivity["11"] = 0;
                    }


                    let arractivity = [
                        resultactivity["0"].length,
                        resultactivity["1"].length,
                        resultactivity["2"].length,
                        resultactivity["3"].length,
                        resultactivity["4"].length,
                        resultactivity["5"].length,
                        resultactivity["6"].length,
                        resultactivity["7"].length,
                        resultactivity["8"].length,
                        resultactivity["9"].length,
                        resultactivity["10"].length,
                        resultactivity["11"].length
                    ];


                    console.log(resultactivity);
                    res.render('report',{userId:userId,pointlist:arrpoint,activitylist:arractivity});
                });
            });
        });
};