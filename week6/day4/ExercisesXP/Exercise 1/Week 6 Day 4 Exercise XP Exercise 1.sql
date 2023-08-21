-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE items (
-- 	item_id SERIAL PRIMARY KEY,
-- 	item VARCHAR (100) NOT NULL,
-- 	price SMALLINT NOT NULL
-- )

-- CREATE TABLE customers (
-- 	customer_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR (50) NOT NULL,
-- 	last_name VARCHAR (100) NOT NULL
-- )

-- INSERT INTO items (item, price)
-- VALUES
-- 	('Small Desk', 100),
-- 	('Large Desk', 300),
-- 	('Fan', 80);

-- INSERT INTO customers (first_name, last_name)
-- VALUES
-- 	('Greg', 'Jones'),
-- 	('Sandra', 'Jones'),
-- 	('Scott', 'Scott'),
-- 	('Trevor','Green'),
-- 	('Melanie', 'Johnson');

-- SELECT * FROM items;
-- SELECT * FROM customers;

-- SELECT * FROM items WHERE price > 80;
-- SELECT * FROM items WHERE price < 300;

-- SELECT * FROM customers WHERE last_name = 'Smith';
-- SELECT * FROM customers WHERE last_name = 'Jones';
-- SELECT * FROM customers WHERE last_name != 'Scott';

--  DAY 4 EXERCISE XP EXERCISE 1:

-- Use SQL to get the following from the database:

-- All items, ordered by price (lowest to highest).

-- SELECT * FROM items GROUP BY item_id, item ORDER BY min(price);

-- Items with a price above 80 (80 included), ordered by price (highest to lowest).

-- SELECT * FROM items WHERE price >= 80 GROUP BY item_id, item ORDER BY price DESC;

-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.

-- SELECT first_name, last_name FROM customers GROUP BY first_name, last_name ORDER BY first_name ASC; 

-- All last names (no other columns!), in reverse alphabetical order (Z-A)

-- SELECT last_name FROM customers GROUP BY last_name ORDER BY last_name DESC;