DROP DATABASE IF EXISTS multiCheckout;

CREATE DATABASE multiCheckout;

USE multiCheckout;

CREATE TABLE users (
  user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(30) NOT NULL,
  password VARCHAR(15) NOT NULL
);

CREATE TABLE address (
  address_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  address1 VARCHAR(30) NOT NULL,
  address2 VARCHAR(30),
  city VARCHAR(30) NOT NULL,
  state CHAR(2) NOT NULL,
  zip INT(9) NOT NULL
);

CREATE TABLE paymentInfo (
  payment_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  ccNo INT NOT NULL,
  ccExpiry int(6) NOT NULL,
  cvv int(4) NOT NULL,
  billingZip int(9) NOT NULL
);