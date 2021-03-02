/*
"SELECT ?(foodSel),?(restSel),?(priceSel),?(distSel),?(vegSel) FROM restaurants"
*/
var foodSel = id.food.value;
var restSel = id.rest.value;
var priceSel = id.price.value;
var distSel = id.dist.value;
var criteriaSelected = foodSel()restSel()priceSel()distSel();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT " + criteriaSelected + " from restaurants", "ORDER BY RANDOM()", "LIMIT 1", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
/*
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
*/

/*
SELECT column FROM table
ORDER BY RANDOM()
LIMIT 1
*/
/* BELOW SECTION IF FOR SELECTING A PARTICULAR CRITERIA SET FROM A DB */
/*
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
*/