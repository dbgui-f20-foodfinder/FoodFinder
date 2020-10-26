-- Creating main user to connect to database
CREATE USER 'mainuser'@'%' IDENTIFIED BY 'Password';

-- Giving all privileges to our new user
GRANT ALL PRIVILEGES ON *.* TO 'mainuser'@'%';

-- Set password method to native password
ALTER USER 'mainuser'@'%' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY 'Password';

-- Flushing privileges
FLUSH PRIVILEGES;

-- Creating initial database
CREATE DATABASE IF NOT EXISTS food;

-- Using new database
USE food;

-- Creating locations table in database
DROP TABLE IF EXISTS `locations`;
CREATE TABLE `locations` (
    `locationID` INT PRIMARY KEY,
    `locationName` VARCHAR(20),
    `isSpecial` INT,
    `aisleNum` INT
); 
INSERT INTO `locations` (`locationID`, `locationName`, `isSpecial`, `aisleNum`) VALUES
    (1, 'Bathroom', 1, NULL),
    (2, 'Check Out Stand', 1, NULL),
    (3, 'Bathroom', 1, NULL);


-- Creating products table in database
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
    `productID` INT PRIMARY KEY,
    `name` VARCHAR(20),
    `pricePerItem` DECIMAL(3,2),
    `numSearches` INT,
    `expirationDate` DATE,
    `storeID` INT NOT NULL,
    `locationID` INT NOT NULL,
    `qty` INT,
    `category` VARCHAR(20),
    `isFresh` INT,
    `isLocallyGrown` INT
);
INSERT INTO `products` (`productID`, `name`, `pricePerItem`, `numSearches`, `expirationDate`, `storeID`, `locationID`, `qty`, `category`, `isFresh`, `isLocallyGrown`) VALUES 
    (1, 'Cheddar Cheese', 003.99, 5, '2021-03-01', 1, 1, 20, 'Dairy', 0, 0),
    (2, 'HoneyCrisp Apples', 001.99, 50, '2020-11-01', 2, 5, 50, 'Produce', 1, 1),
    (3, 'Whole Wheat Bread', 005.99, 5, '2021-03-01', 1, 1, 20, 'Dairy', 0, 0);


-- Creating stores table in database
DROP TABLE IF EXISTS `stores`;
CREATE TABLE `stores` (
    `storeID` INT PRIMARY KEY,
    `name` VARCHAR(20),
    `storeLocLong` INT,
    `storeLocLat` INT
);
INSERT INTO `stores` (`storeID`, `name`, `storeLocLong`, `storeLocLat`) VALUES
    (1, 'StoreA', 100, 50),
    (2, 'StoreA', 100, 50),
    (3, 'StoreA', 100, 50);


-- Creating users table in database
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
    `userID` INT PRIMARY KEY,
    `username` VARCHAR(50), 
    `password` VARCHAR(50), 
    `firstName` VARCHAR(20), 
    `lastName` VARCHAR(20), 
    `inStoreCredit` INT, 
    `accountType` INT, 
    `userLocLong` INT,
    `userLocLat` INT
);
INSERT INTO `users` (`userID`, `username`, `password`, `firstName`, `lastName`, `inStoreCredit`, `accountType`, `userLocLong`, `userLocLat`) VALUES
    (1, 'bob_smith123', 'pass123', 'Bob', 'Smith', 5, 1, 50, 100),
    (2, 'john.smith2', 'pass1234', 'John', 'Smith', 0, 1, 50, 100),
    (3, 'frank-smith', 'pass12345', 'Frank', 'Smith', 3, 1, 50, 100);


-- Creating notifications table in database
DROP TABLE IF EXISTS `notifications`;
CREATE TABLE `notifications` (
    `notifID` INT PRIMARY KEY, 
    `userID` INT NOT NULL, 
    `notifText` VARCHAR(100), 
    `notifCategory` INT
);
INSERT INTO `notifications` (`notifID`, `userID`, `notifText`, `notifCategory`) VALUES 
    (1, 3, 'Congratulations Frank!', 3),
    (2, 2, 'You have more credits John!', 3),
    (3, 1, 'Hello Bob!', 3);


-- Creating maps table in database
DROP TABLE IF EXISTS `maps`;
CREATE TABLE `maps` (
    `rectangleID` INT PRIMARY KEY, 
    `x1` FLOAT, 
    `y1` FLOAT, 
    `x2` FLOAT, 
    `y2` FLOAT, 
    `color` VARCHAR(20), 
    `storeID` INT NOT NULL
);