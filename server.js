var express = require('express'),
    employees = require('./routes/employees'),
    app = express();

app.use(express.static('www'));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/properties', employees.findAll);
app.get('/properties/:id', employees.findById);
app.get('/properties/:id/stats', employees.findReports);

app.get('/buildings', employees.findAllBuildings);
app.get('/buildings/:id', employees.findBuildingById);
app.get('/buildings/:id/properties', employees.findAllFromBuilding);

//TODO: not sure if this needs to be structured like that 
app.get('/buildings/:buildingId/properties/:id', employees.findById);

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
