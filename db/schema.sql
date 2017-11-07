

DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
id INT(100) NOT NULL UNIQUE AUTO_INCREMENT,
burger_name VARCHAR(50) NOT NULL,
devoured BOOLEAN,
created_at TIMESTAMP,
PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name)
VALUES("Coffee Burger"),
    ("Balloon Burger"),
    ("Cat Burger");

SELECT * FROM burgers;
