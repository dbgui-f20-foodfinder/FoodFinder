-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema food
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema food
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS 'food' DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE 'food' ;

-- -----------------------------------------------------
-- Table 'food'.'accountTypes'
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS 'food'.'accountTypes' (
  'accountTypeID' INT NOT NULL,
  'accountType' VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY ('accountTypeID'))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table 'food'.'colors'
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS 'food'.'colors' (
  'colorID' INT NOT NULL,
  'color' VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY ('colorID'))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table 'food'.'locations'
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS 'food'.'locations' (
  'locationID' INT NOT NULL AUTO_INCREMENT,
  'locationName' VARCHAR(20) NULL DEFAULT NULL,
  'isSpecial' INT NULL DEFAULT NULL,
  'aisleNum' INT NULL DEFAULT NULL,
  PRIMARY KEY ('locationID'))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table 'food'.'stores'
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS 'food'.'stores' (
  'storeID' INT NOT NULL AUTO_INCREMENT,
  'name' VARCHAR(20) NULL DEFAULT NULL,
  'storeLocLong' INT NULL DEFAULT NULL,
  'storeLocLat' INT NULL DEFAULT NULL,
  PRIMARY KEY ('storeID'))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table 'food'.'map'
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS 'food'.'map' (
  'rectangleID' INT NOT NULL,
  'x1' INT NULL DEFAULT NULL,
  'x2' INT NULL DEFAULT NULL,
  'y1' INT NULL DEFAULT NULL,
  'y2' INT NULL DEFAULT NULL,
  'storeID' INT NOT NULL,
  'colorID' INT NOT NULL,
  PRIMARY KEY ('rectangleID'),
  INDEX 'fk_map_stores1_idx' ('storeID' ASC) VISIBLE,
  INDEX 'fk_map_colors1_idx' ('colorID' ASC) VISIBLE,
  CONSTRAINT 'fk_map_colors1'
    FOREIGN KEY ('colorID')
    REFERENCES 'food'.'colors' ('colorID'),
  CONSTRAINT 'fk_map_stores1'
    FOREIGN KEY ('storeID')
    REFERENCES 'food'.'stores' ('storeID'))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table 'food'.'notifCategories'
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS 'food'.'notifCategories' (
  'notifCategoryID' INT NOT NULL,
  'notifCategory' VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY ('notifCategoryID'))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table 'food'.'user'
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS 'food'.'user' (
  'userID' INT NOT NULL,
  'username' VARCHAR(45) NULL DEFAULT NULL,
  'password' VARCHAR(45) NULL DEFAULT NULL,
  'firstName' VARCHAR(45) NULL DEFAULT NULL,
  'lastName' VARCHAR(45) NULL DEFAULT NULL,
  'inStoreCredit' INT NULL DEFAULT NULL,
  'userLocLong' INT NULL DEFAULT NULL,
  'userLocLat' INT NULL DEFAULT NULL,
  'accountTypeID' INT NOT NULL,
  PRIMARY KEY ('userID'),
  INDEX 'fk_user_accountTypes1_idx' ('accountTypeID' ASC) VISIBLE,
  CONSTRAINT 'fk_user_accountTypes1'
    FOREIGN KEY ('accountTypeID')
    REFERENCES 'food'.'accountTypes' ('accountTypeID'))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table 'food'.'notifications'
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS 'food'.'notifications' (
  'notificationID' INT NOT NULL,
  'userID' INT NOT NULL,
  'notifCategoryID' INT NOT NULL,
  'notifText' VARCHAR(450) NULL DEFAULT NULL,
  PRIMARY KEY ('notificationID'),
  INDEX 'fk_notifications_user1_idx' ('userID' ASC) VISIBLE,
  INDEX 'fk_notifications_notifCategories1_idx' ('notifCategoryID' ASC) VISIBLE,
  CONSTRAINT 'fk_notifications_notifCategories1'
    FOREIGN KEY ('notifCategoryID')
    REFERENCES 'food'.'notifCategories' ('notifCategoryID'),
  CONSTRAINT 'fk_notifications_user1'
    FOREIGN KEY ('userID')
    REFERENCES 'food'.'user' ('userID'))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table 'food'.'products'
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS 'food'.'products' (
  'productID' INT NOT NULL AUTO_INCREMENT,
  'name' VARCHAR(20) NULL DEFAULT NULL,
  'pricePerItem' INT NULL DEFAULT NULL,
  'numSearches' INT NULL DEFAULT NULL,
  'expirationDate' DATE NULL DEFAULT NULL,
  'storeID' INT NOT NULL,
  'locationID' INT NOT NULL,
  'qty' INT NULL DEFAULT NULL,
  'category' VARCHAR(20) NULL DEFAULT NULL,
  'isFresh' INT NULL DEFAULT NULL,
  'isLocallyGrown' INT NULL DEFAULT NULL,
  PRIMARY KEY ('productID'))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table 'food'.'productLocations'
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS 'food'.'productLocations' (
  'locationID' INT NOT NULL,
  'productID' INT NOT NULL,
  INDEX 'fk_productLocations_locations1_idx' ('locationID' ASC) VISIBLE,
  INDEX 'fk_productLocations_products1_idx' ('productID' ASC) VISIBLE,
  CONSTRAINT 'fk_productLocations_locations1'
    FOREIGN KEY ('locationID')
    REFERENCES 'food'.'locations' ('locationID'),
  CONSTRAINT 'fk_productLocations_products1'
    FOREIGN KEY ('productID')
    REFERENCES 'food'.'products' ('productID'))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table 'food'.'specialLocations'
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS 'food'.'specialLocations' (
  'specialLocID' INT NOT NULL,
  'specialLocType' VARCHAR(45) NOT NULL,
  PRIMARY KEY ('specialLocID'))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
