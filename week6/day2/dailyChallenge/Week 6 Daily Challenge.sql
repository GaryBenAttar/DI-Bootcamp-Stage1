-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";

-- CREATE DATABASE "Hollywood"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;
	
-- 	CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- )

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Matt','Damon','08/10/1970', 5);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('George','Clooney','06/05/1961', 2);

-- INSERT INTO actors (first_name, last_name,age,number_oscars)
-- VALUES ('Marion', 'Cotillard', '09/30/1975' ,1);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES ('Jessica', 'Alba', '04/28/1981', 0);


-- SELECT * FROM actors;

-- INSERT INTO actors (first_name, last_name, number_oscars)
-- VALUES ('Brad', 'Pitt', 2);

-- Unable to add the actor with blank fields because we specified NOT NULL in all the fields.cd..
