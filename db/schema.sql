### Schema
 use burgers_db;



  create table burgers_tbl(

    id int primary key auto_increment,

    burger_name varchar(30) not null,

    devoured boolean,

    burger_time timestamp


USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    devoured boolean,
    burger_time TIMESTAMP,
    PRIMARY KEY (id)
);