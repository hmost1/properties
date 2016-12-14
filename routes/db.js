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
console.log(config);

//TODO: just a quick POC, want to only initialize once, then let query get called
//for every connection and query. 
//check implementation details here https://github.com/brianc/node-pg-pools
var pool = new pg.Pool(config);
console.log("db connection made");

pool.on('error', function (err, client) {
   console.error('idle db pool client error', err.message, err.stack)
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
        return console.error('error running query', err);
      }
      callback(result);
    });
  });
}
