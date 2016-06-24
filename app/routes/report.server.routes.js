/**
 * Created by SueCher on 2016/6/10.
 */

"use strict";

module.exports = function(app){
    app.route('/report/statistics/:id')
        .get(function(req,res){
            let userId = req.params.id;
            res.render('report');
        });
};