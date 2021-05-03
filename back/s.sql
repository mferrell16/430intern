DROP DATABASE IF EXISTS internship;
CREATE DATABASE  internship;
\c internship;

DROP TABLE IF EXISTS Login;
CREATE TABLE Login (
  Email text NOT NULL UNIQUE,
  Type int NOT NULL default 1,
  Fname text  NOT NULL default '',
  Lname text NOT NULL default '',
  Password char(64) NOT NULL,
  Company text, 
  GradTerm text, 
  PRIMARY KEY  (email)
);
INSERT INTO login(Email,Type, Password) VALUES ('admin',0,'8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918');

DROP TABLE IF EXISTS postings;
CREATE TABLE postings (
  ID serial NOT NULL,
  Company text  NOT NULL default '',
  PosTitle text NOT NULL default '',
  Description text NOT NULL default '',
  Location text NOT NULL,
  Cemail text NOT NULL,
  Cname text NOT NULL, 
  Flag int NOT NULL default '1', 
  PType text NOT NULL,

  PRIMARY KEY  (ID)
);

DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
  ID serial PRIMARY KEY,
  Name text NOT NULL default '',
  Company text  NOT NULL default '',
  Position text NOT NULL default '',
  PositionDate text NOT NULL default '',
  Stars int  NOT NULL,
  Review text NOT NULL default '',
  Flag int NOT NULL default '0', 
  Rdate date NOT NULL 
);

GRANT SELECT, INSERT, DELETE ON postings to intern430;
GRANT SELECT, INSERT, UPDATE, DELETE ON reviews to intern430;
GRANT SELECT, INSERT, DELETE ON Login to intern430;
GRANT USAGE on postings_id_seq to intern430;
GRANT USAGE on reviews_id_seq to intern430;


