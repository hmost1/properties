var pg = require('pg');
var url = require('url');

db = exports

var params = url.parse(process.env.DATABASE_URL || "postgres://dlgvuuuqxrdobm:66NqOGhtzsdp1hLT3Y94iPzC01@ec2-79-125-24-188.eu-west-1.compute.amazonaws.com:5432/d1vh6ucknjckk7");
var auth = params.auth.split(':');

var config = {
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  ssl: true
};
//query.connectionParameters = 'postgres://localhost:5432/properties-app';
//DB STUFF: 
//var config = {
//  user: 'haley', //env var: PGUSER
//  database: 'property_app', //env var: PGDATABASE
//  //password: '', //env var: PGPASSWORD
//  host: 'localhost', // Server hosting the postgres database
//  port: 5432, //env var: PGPORT
//  max: 10, // max number of clients in the pool
//  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
//};

//TODO: just a quick POC, want to only initialize once 
var pool = new pg.Pool(config);
console.log("connection made");

pool.on('error', function (err, client) {
  // if an error is encountered by a client while it sits idle in the pool
  // the pool itself will emit an error event with both the error and
  // the client which emitted the original error
  // this is a rare occurrence but can happen if there is a network partition
  // between your application and the database, the database restarts, etc.
  // and so you might want to handle it and at least log it out
  console.error('idle client error', err.message, err.stack)
})

db.query = function(query, params, callback) {
   // to run a query we can acquire a client from the pool,
   // run a query on the client, and then return the client to the pool
   pool.connect(function(err, client, done) {
   	 	//TODO: return something else or make the callback with an error
        if(err) {
        	return console.error('error fetching client from pool', err);
        } 

        client.query(query, params, function(err, result) {
            done();
            //TODO: same comment as above
            if(err) {
              return console.error('error runsning query', err);
            }
            //console.log(result);
            callback(result);
        });
    });
}
