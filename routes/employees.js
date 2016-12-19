var db = require('./db');

//TODO: not sure why this is in "routes"
//should be models, handle db stuff here 

//TODO: when to call next?
exports.findAllDB = function(req, res, next) {
    var sql = "SELECT buildings.*, count(units.building_id) as units from buildings left join units on (buildings.id = units.building_id) group by buildings.id";
    
    //TODO: make parameter option in db.query null 
    db.query(sql, [], function(results) {
        console.log("got results");
        res.send(results.rows);
    });
}

exports.findAllProperties = function(req, res, next) {  
    var sql = "SELECT units.*,buildings.street from buildings left join units on buildings.id = units.building_id;"
    
    //TODO: make parameter option in db.query null 
    db.query(sql, [], function(results) {
        res.send(results.rows);
    });
}

exports.findAll = function (req, res, next) {
    var name = req.query.name;
    if (name) {
        res.send(properties.filter(function(employee) {
            return (employee.firstName + ' ' + employee.lastName).toLowerCase().indexOf(name.toLowerCase()) > -1;
        }));
    } else {
        res.send(properties);
    }
};

exports.findUnitById = function (req, res, next) {
    var sql = "SELECT * from units where id = $1 and building_id = $2"
    db.query(sql, [req.params.id, req.params.buildingId], function(results) {
        console.log(results.rows);
        res.send(results.rows[0]); 
    });
};

exports.findAllFromBuilding = function(req, res, next) {
    console.log(req.params);
    var id = parseInt(req.params.id)
    console.log("in find all from building");
    console.log(id)
    var sql = "SELECT * from units where building_id = $1";
    
    db.query(sql, [id], function(results) {
        res.send(results.rows);
    });
}

//To be exported into buildings
exports.findBuildingById = function (req, res, next) {
    var sql = "SELECT * from buildings where id = $1"
    db.query(sql, [req.params.id], function(results) {
        res.send(results.rows[0]); 
    });
};

exports.addNewBuilding = function(req, res, next) {
    var sql = "INSERT into buildings VALUES (DEFAULT, $1, $2, $3 ,$4, $5)"; 
    var building = [req.body.number, req.body.street, req.body.city, req.body.state, req.body.zip];

    db.query(sql, building, function(results) {
        res.send(200); 
    });
}

exports.addNewProperty = function(req, res, next) {
    var sql = "INSERT into units VALUES (DEFAULT, $1, $2, $3 ,$4, $5, $6, $7)"; 
    console.log("furnished: ")
    console.log(req.body.furnished);
    //TODO: do you need parseInt?
    var property = [parseInt(req.body.buildingId), req.body.unit_number, req.body.bedrooms, req.body.bathrooms, req.body.beds, req.body.nightly, req.body.furnished];
    
    db.query(sql, property, function(results) {
        console.log(results.rows[0]);
        res.send(200); 
    });
}

exports.updateBuilding = function(req, res, next) {
    var sql = "UPDATE buildings set number=$1, street=$2, city=$3, state=$4, zip=$5 where id = $6;" 
    var building = [req.body.number, req.body.street, req.body.city, req.body.state, req.body.zip, req.params.id];

    db.query(sql, building, function(results) {
        res.send(200); 
    });
}

exports.updateProperty = function(req, res, next) {
    console.log("update property")
    var sql = "UPDATE units set unit_number=$1, bedrooms=$2, bathrooms=$3, beds=$4, nightly=$5, furnished=$6 where id = $7;" 
    var property = [req.body.unit_number, req.body.bedrooms, req.body.bathrooms, req.body.beds, req.body.nightly, req.body.furnished, req.params.id];

    db.query(sql, property, function(results) {
        res.send(200); 
    });
}

//TODO: need to have cascading deletes turned on for units, then will include all the properties referencing this 
exports.deleteBuilding = function(req, res, next) {
    var sql = "DELETE from buildings where id = $1;"
    db.query(sql, [req.params.id], function(results) {
        res.send(200); 
    });
}

exports.deleteProperty = function(req, res, next) {
    var sql = "DELETE from units where id = $1;"
    db.query(sql, [req.params.id], function(results) {
        res.send(200); 
    });
}
