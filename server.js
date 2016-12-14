var express = require('express'),
    employees = require('./routes/employees'),
    bodyParser = require('body-parser'),
    app = express();
    
app.use(express.static('www'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

//app.get('/properties', employees.findAll);
//app.get('/properties/:id', employees.findUnitById/*employees.findById*/);

//TODO: should this be /buildings/:id/properties
app.post('/properties', employees.addNewProperty);


app.get('/buildings', employees.findAllDB /*employees.findAllBuildings*/);
app.get('/buildings/:id', employees.findBuildingById);
app.get('/buildings/:id/properties', employees.findAllFromBuilding);
app.post('/buildings', employees.addNewBuilding);
app.post('/buildings/:id', employees.updateBuilding);
app.delete('/buildings/:id', employees.deleteBuilding);

//TODO: not sure if this needs to be structured like that 
app.get('/buildings/:buildingId/properties/:id', employees.findUnitById);
app.post('/buildings/:buildingId/properties/:id', employees.updateProperty);
app.delete('/buildings/:buildingId/properties/:id', employees.deleteProperty);

//reservations
app.get('/reservations', reservations.getAll);
app.post('/reservations', reservations.create);


app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
