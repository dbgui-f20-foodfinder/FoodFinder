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


app.get('/product/get', async (req, res) => {
  var productID = req.param('productID');

  connection.query('SELECT * FROM products WHERE productID = ?', [productID], function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});


// Delete a product
app.delete('/deleteproduct', async (req, res) => {
  var productID = req.param('productID')

  connection.query('DELETE FROM products WHERE productID = ?', productID, function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});


// Add a new product to the products table.
app.post('/newproduct', async (req, res) => {
  var newProduct = {
    name : req.param('name'),
    price : req.param('price'),
    numSearches : req.param('numSearches'),
    expirationDate : req.param('expirationDate'),
    storeID : req.param('storeID'),
    locationID : req.param('locationID'),
    stock : req.param('stock'),
    category : req.param('category'),
    isFresh : req.param('isFresh'),
    isLocallyGrown : req.param('isLocallyGrown'),
    rating : req.param('rating'),
    imageURL : req.param("imageURL"),
    productDesc : req.param("productDesc")
  };

  connection.query('INSERT INTO products SET ?', newProduct, function (err, result, fields) {
    //if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// ! - NOT TESTED
// Add a new product to the products table.
app.put('/editproduct', async (req, res) => {
  var productID = req.param('productID');
  var editedProduct = {
    name : req.param('name'),
    price : req.param('price'),
    numSearches : req.param('numSearches'),
    expirationDate : req.param('expirationDate'),
    storeID : req.param('storeID'),
    locationID : req.param('locationID'),
    stock : req.param('stock'),
    category : req.param('category'),
    isFresh : req.param('isFresh'),
    isLocallyGrown : req.param('isLocallyGrown'),
    rating : req.param('rating'),
    imageURL : req.param("imageURL"),
    productDesc : req.param("productDesc")
  };

  connection.query('UPDATE products SET ? WHERE productID = ?', [editedProduct,productID], function (err, result, fields) {
    //if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// Displays items sorted by expiration date
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
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// /products
// Displays local items only
app.get('/products/local', function (req, res) {
  connection.query("SELECT * FROM products WHERE isLocallyGrown = 1", function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// /products
// Displays items ordered by popularity (highest first)
app.get('/products/popular', function (req, res) {
  connection.query("SELECT * FROM products ORDER BY popularity DESC", function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// Set the stock of a particular item in the store
app.put('/products/update/stock', async (req, res) => {
  var productID = req.param('productID');
  var stock = req.param('stock');

  connection.query('UPDATE products SET stock = ? WHERE productID = ?', [stock, productID], function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// TODO: Should we change locationID to locationName?
// Changes the aisle location of a product named productName
app.put('/products/update/location', async (req, res) => {
  var productName = req.param('productName');
  var locationID = req.param('locationID');

  connection.query('UPDATE products SET locationID = ? WHERE productName = ?', [locationID, productName], function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// changes the aisle location of a product to 0 (i.e. off the shelves)
app.put('/products/update/remove_location', async (req, res) => {
  var productID = req.param('productID');

  connection.query('UPDATE products SET locationID = 0 WHERE productID = ?', productID, function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// Gets all locations that do not have products (locationID = 0)
app.get('/products/location/empty_locs', function (req, res) {
  connection.query("SELECT l.locationID, locationName, isSpecial from locations l LEFT OUTER JOIN products p ON l.locationID = p.locationID WHERE p.locationID IS NULL", function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// Gets all products that do not have a location (locationID = 0)
app.get('/products/location/empty_prods', function (req, res) {
  connection.query("SELECT * FROM products WHERE locationID = 0", function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// Gets prices in different stores
// 2.1
app.get('/products/compare_prices', async (req, res) => {
  var productName = req.param('productName');

  connection.query('SELECT name, pricePerItem, storeID FROM products WHERE name = ?', [productName], function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// Gets qualities in different stores
// 2.2
app.get('/products/compare_qty', async (req, res) => {
  var productName = req.param('productName');

  connection.query('SELECT name, qty, storeID FROM products WHERE name = ? order by qty', [productName], function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// Gets long in different stores
// 3.4
app.get('/products/compare_qty', async (req, res) => {
  var expDate = req.param('expDate');

  connection.query('SELECT productID FROM peoducts WHERE expirationDate > addDate(CURDATE(), ?)', [expDate], function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// update items' price in the store
// 7.1
app.put('/products/set_price', async (req, res) => {
  var productID = req.param('productID');
  var price = req.param('price');

  connection.query('UPDATE products SET pricePerItem = ? WHERE productID = ?', [price, productID], function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// update update items' quality in the store
// 7.2
app.put('/products/set_qty', async (req, res) => {
  var productID = req.param('productID');
  var qty = req.param('qty');

  connection.query('UPDATE products SET qty = ? WHERE productID = ?', [qty, productID], function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});


// -------------------------------------------------------------------------------------
//                              LOCATIONS (AISLES) TABLE
// -------------------------------------------------------------------------------------

app.get('/locations', function (req, res) {
  connection.query("SELECT * FROM locations", function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// Add a new location to the locations table.
// 10.2
app.post('/newlocation', async (req, res) => {
  var newLocation = {
    locationName : req.param('locationName'),
    isSpecial : req.param('isSpecial'), // isSpecial: 1 if it's a special location (Bathroom, Checkout, etc.), 0 otherwise
    aisleNum : req.param('aisleNum') // aisleNum: This will be the number displayed on the map. Set this to 0 if it's a special location.
  };

  connection.query('INSERT INTO locations SET ?', newLocation, function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// Remove a location from the table, along with all the productLocations that correspond to that location.
// 10.2
app.delete('/removelocation', async (req, res) => {
  var locToRemove = req.param('locationID')

  connection.query('DELETE FROM locations WHERE locationID = ?', locToRemove, function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});



// /locations
// Selects all empty locations. Returns data from all locations without any products
app.get('/locations/empty', function (req, res) {
  connection.query("SELECT * FROM locations l LEFT OUTER JOIN products p ON l.locationID = p.locationID WHERE p.productID IS NULL", function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// ! - NOT TESTED
// Selects the aisle numbers and the corresponding categories for each aisle (User story 1.5)
app.get('/locations/empty', function (req, res) {
  connection.query("SELECT l.aisleNum, p.category from products p INNER JOIN productLocations pl ON p.productID = pl.productID INNER JOIN locations l ON l.locationID = pl.locationID GROUP BY l.aisleNum;", function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// Returns all products in the given aisle (location).
// 1.6
app.get('/locations/get_products', async (req, res) => {
  var locationID = req.param('locationID');

  connection.query('SELECT * FROM products WHERE productID = ?', [productID], function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});


// -------------------------------------------------------------------------------------
//                                        USERS
// -------------------------------------------------------------------------------------

app.post('/newaccount', async (req, res) => {
  var newAccount = {
    username : req.param('username'),
    password : req.param('password'),
    firstName : req.param('firstName'),
    lastName : req.param('lastName'),
    inStoreCredit : 0,
    userLocLong : 0,
    userLocLat : 0,
    accountTypeID : req.param('accountTypeID')
  };

  connection.query('INSERT INTO user SET ?', newAccount, function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// given a username, return the userID (This can be used to fetch other userInfo).
app.get('/userinfo', function (req, res) {
  var username = req.param('username');

  connection.query("SELECT userID FROM user WHERE username = ?", username, function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});


// how a user logins
app.get('/login', function (req, res) {
  var username = req.param('username');
  var password = req.param('password');

  connection.query("SELECT * FROM user WHERE username = ? AND password = ?", [username, password], function (err, result, fields) {
    if (err) {
      res.end("Incorrect username or password. Please try again!");
      throw err;
    } 
    else  {
      res.end(JSON.stringify(result));
    }
  });
});


// 5.1
app.get('/profileInfo', function (req, res) {
  var userID = req.param('userID');

  connection.query("SELECT firstName, lastName, inStoreCredit FROM user WHERE userID = ?", userID, function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});


// 5.4
// giving in store credit to a customer
app.put('/give/instorecredit', async (req, res) => {
  var userID = req.param('userID');
  var credit = req.param('credit');

  connection.query('UPDATE user SET inStoreCredit = inStoreCredit + ? WHERE userID = ?', [credit, userID], function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
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
