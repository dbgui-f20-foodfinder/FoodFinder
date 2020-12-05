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


// Edit an existing product in the products table.
app.put('/editproduct', async (req, res) => {
  var productID = req.param('productID');
  var editedProduct = {
    name : req.param('name'),
    price : req.param('price'),
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


// creates new account
app.post('/newaccount', async (req, res) => {
  var newAccount = {
    username : req.param('username'),
    password : req.param('password'),
    firstName : req.param('firstName'),
    lastName : req.param('lastName'),
    inStoreCredit : 0,
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


// gets firstname, last name and in store credit
app.get('/profileInfo', function (req, res) {
  var userID = req.param('userID');

  connection.query("SELECT firstName, lastName, inStoreCredit FROM user WHERE userID = ?", userID, function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});


// giving in store credit to a customer
app.put('/give/instorecredit', async (req, res) => {
  var userID = req.param('userID');
  var credit = req.param('credit');

  connection.query('UPDATE user SET inStoreCredit = inStoreCredit + ? WHERE userID = ?', [credit, userID], function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});


// gives all users in store credit
app.put('/give/all/instorecredit', async (req, res) => {
  var credit = req.param('credit');

  connection.query('UPDATE user SET inStoreCredit = inStoreCredit + ?', credit, function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});


// Retrieve all notifications with notification category included
app.get('/notifications', function (req, res) {

  connection.query("SELECT * FROM notifications n	INNER JOIN notifCategories nc	ON n.notifCategoryID = nc.notifCategoryID WHERE userID = 12", function (err, result, fields) {
    if (err) {
      res.end("Incorrect username or password. Please try again!");
      throw err;
    } 
    else  {
      res.end(JSON.stringify(result));
    }
  });
});


// Recieve all notifications for a given user (including global notifications)
app.get('/notifications/user', function (req, res) {
  var userID = req.param('userID');

  connection.query("SELECT * FROM notifications n	INNER JOIN notifCategories nc	ON n.notifCategoryID = nc.notifCategoryID WHERE userID = ?", userID, function (err, result, fields) {
    if (err) {
      res.end("Incorrect username or password. Please try again!");
      throw err;
    } 
    else  {
      res.end(JSON.stringify(result));
    }
  });
});


// creates new global notification
app.post('/newnotification/global', async (req, res) => {
  var newNotification = {
    notifCategoryID : req.param('notifCategoryID'),
    notifText : req.param('notifText')
  };

  connection.query('INSERT INTO notifications SET userID = 12, ?', newNotification, function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});


// creates new notification specific to user
app.post('/newnotification/user', async (req, res) => {
  var newNotification = {
    userID : req.param('userID'),
    notifCategoryID : req.param('notifCategoryID'),
    notifText : req.param('notifText')
  };

  connection.query('INSERT INTO notifications SET ?', newNotification, function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

// Delete all notifications for a given user
app.delete('/deletenotification', async (req, res) => {
  var userID = req.param('userID')

  connection.query('DELETE FROM notifications WHERE userID = ?', userID, function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});


//connecting the express object to listen on a particular port as defined in the config object.
app.listen(config.port, config.host, (e) => {
  if (e) {
    throw new Error('Internal Server Error');
  }
  logger.info(`${config.name} running on ${config.host}:${config.port}`);
});
