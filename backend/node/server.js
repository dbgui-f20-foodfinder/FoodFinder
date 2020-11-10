const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');

//mysql connection
var connection = mysql.createConnection({
  host: 'backend-db.czkrggrgqm0l.us-west-2.rds.amazonaws.com',
  port: '3306',
  user: 'mainuser',
  password: 'Password',
  database: 'food'
});

//set up some configs for express.
const config = {
  name: 'sample-express-app',
  port: 8000,
  host: '0.0.0.0',
};

//create the express.js object
const app = express();

//create a logger object.  Using logger is preferable to simply writing to the console.
const logger = log({ console: true, file: false, label: config.name });

app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));
app.use(ExpressAPILogMiddleware(logger, { request: true }));

//Attempting to connect to the database.
connection.connect(function (err) {
  if (err)
    logger.error("Cannot connect to DB!");
  logger.info("Connected to the DB!");
});

//GET /
app.get('/', (req, res) => {
  res.status(200).send('Go to http://localhost:3001.');
});

// -------------------------------------------------------------------------------------
//                                    PRODUCTS TABLE
// -------------------------------------------------------------------------------------

// /products
// This Route is used to retrieve the entire products table.
app.get('/products', function (req, res) {
    connection.query("SELECT * FROM products",
    function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});


app.get('/products/expirationDate', function (req, res) {
  connection.query("SELECT * FROM products ORDER BY expirationDate DESC",
  function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result)); // Result in JSON format
  });
});

// /products
// Displays fresh items only
app.get('/products/fresh', function (req, res) {
  connection.query("SELECT * FROM products WHERE isFresh = 1", function (err, result, fields) {
    if (err) throw error;
    res.end(JSON.stringify(result));
  });
});

// /products
// Displays local items only
app.get('/products/local', function (req, res) {
  connection.query("SELECT * FROM products WHERE isLocallyGrown = 1", function (err, result, fields) {
    if (err) throw error;
    res.end(JSON.stringify(result));
  });
});

// /products
// Displays items ordered by popularity (highest first)
app.get('/products/popular', function (req, res) {
  connection.query("SELECT * FROM products ORDER BY popularity DESC", function (err, result, fields) {
    if (err) throw error;
    res.end(JSON.stringify(result));
  });
});

app.put('/products/update/stock', async (req, res) => {
  var productID = req.param('productID');
  var stock = req.param('stock');

  connection.query('UPDATE products SET stock = ? WHERE productID = ?', [stock, productID], function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// changes the aisle location of a product
app.put('/products/update/location', async (req, res) => {
  var productID = req.param('productID');
  var locationID = req.param('locationID');

  connection.query('UPDATE products SET locationID = ? WHERE productID = ?', [locationID, productID], function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// Gets all products that do not have a location (locationID = 0)
app.get('/products/location/empty', function (req, res) {
  connection.query("SELECT * FROM products WHERE locationID = 0", function (err, result, fields) {
    if (err) throw error;
    res.end(JSON.stringify(result));
  });
});

// Gets prices in different stores
app.get('/products/compare_prices', async (req, res) => {
  var productName = req.param('productName');

  connection.query('SELECT name, pricePerItem, storeID FROM products WHERE name = ?', [productName], function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// Gets qualities in different stores
app.get('/products/compare_qty', async (req, res) => {
  var productName = req.param('productName');

  connection.query('SELECT name, qty, storeID FROM products WHERE name = ? order by qty', [productName], function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// Gets long in different stores
app.get('/products/compare_qty', async (req, res) => {
  var expDate = req.param('expDate');

  connection.query('SELECT productID FROM peoducts WHERE expirationDate > addDate(CURDATE(), ?)', [expDate], function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// -------------------------------------------------------------------------------------
//                              LOCATIONS (AISLES) TABLE
// -------------------------------------------------------------------------------------

app.get('/locations', function (req, res) {
  connection.query("SELECT * FROM locations", function (err, result, fields) {
    if (err) throw error;
    res.end(JSON.stringify(result));
  });
});

app.get('/locations/empty', function (req, res) {
  connection.query("SELECT * FROM locations WHERE ", function (err, result, fields) {
    if (err) throw error;
    res.end(JSON.stringify(result));
  });
});

// /locations
// Selects all empty locations. Returns locationID (this will probably change) of all locations without any products
app.get('/locations/empty', function (req, res) {
  connection.query("SELECT l.locationID FROM locations l LEFT OUTER JOIN products p ON l.locationID = p.locationID WHERE p.productID IS NULL", function (err, result, fields) {
    if (err) throw error;
    res.end(JSON.stringify(result));
  });
});

// -------------------------------------------------------------------------------------
//                                        USERS
// -------------------------------------------------------------------------------------
app.post('/newcustomer', async (req, res) => {
  var newCustomer = {
    username : req.param('username'),
    password : req.param('password'),
    firstName : req.param('firstName'),
    lastName : req.param('lastName'),
    inStoreCredit : 0,
    userLocLong : req.param('userLocLong'),
    userLocLat : req.param('userLocLat'),
    accountTypeID : 1
  };

  connection.query('INSERT INTO user SET ?', newCustomer, function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

app.post('/newemployee', async (req, res) => {
  var newEmployee = {
    username : req.param('username'),
    password : req.param('password'),
    firstName : req.param('firstName'),
    lastName : req.param('lastName'),
    inStoreCredit : 0,
    userLocLong : 0,
    userLocLat : 0,
    accountTypeID : 2
  };

  connection.query('INSERT INTO user SET ?', newEmployee, function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// how a user logins
app.get('/login', function (req, res) {
  var username = req.param('username');
  var password = req.param('password');

  connection.query("SELECT username FROM user WHERE username = ? AND password = ?", [username, password], function (err, result, fields) {
    if (err) {
      res.end("Incorrect username or password. Please try again!");
      throw err;
    } 
    else  {
      res.end(JSON.stringify(1));
    }
  });
});


// -------------------------------------------------------------------------------------
//                                        OTHER
// -------------------------------------------------------------------------------------

//connecting the express object to listen on a particular port as defined in the config object.
app.listen(config.port, config.host, (e) => {
  if (e) {
    throw new Error('Internal Server Error');
  }
  logger.info(`${config.name} running on ${config.host}:${config.port}`);
});
