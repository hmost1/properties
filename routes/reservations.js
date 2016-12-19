var db = require('./db');

//TODO: when to call next?
exports.getAll = function(req, res, next) {
    var sql = "SELECT reservations.*, units.unit_number, buildings.street, buildings.city from reservations left join units on units.id = reservations.unit_id left join buildings on buildings.id = units.building_id;"
    console.log("selecting");
    //TODO: make parameter option in db.query null 
    db.query(sql, [], function(results) {
        res.send(results.rows);
    });
}

exports.create = function(req, res, next) {
    var sql = "INSERT into reservations VALUES (DEFAULT, $1, $2, $3 ,$4, $5, $6, $7, $8)"; 
    //TODO: do you need parseInt?
    //TODO: probably need to convert the start_day/end_day
    var property = [parseInt(req.body.unit_id), req.body.start_day, req.body.end_day, req.body.first_name, req.body.phone, req.body.email, req.body.adults, req.body.children];
    console.log(property);
    db.query(sql, property, function(results) {
        console.log(results.rows[0]);
        res.send(200); 
    });
}

exports.delete = function(req, res, next) {
    var sql = "DELETE from reservations where id = $1;"
    db.query(sql, [req.params.id], function(results) {
        res.send(200); 
    });
}
