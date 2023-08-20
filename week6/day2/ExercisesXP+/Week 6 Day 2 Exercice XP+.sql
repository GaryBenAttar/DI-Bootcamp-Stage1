-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- CREATE DATABASE bootcamp
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE students(
-- 	id SERIAL PRIMARY KEY,
-- 	last_name VARCHAR (100) NOT NULL,
-- 	first_name VARCHAR (50) NOT NULL,
-- 	birth_date DATE NOT NULL
-- )

-- INSERT INTO students (last_name, first_name, birth_date)
-- VALUES
-- 	('Benichou', 'Marc', '11/02/1998'),
-- 	('Cohen', 'Yoan', '12/03/2010'),
-- 	('Benichou', 'Lea', '07/27/1987'),
-- 	('Dux', 'Amelia', '04/07/1996'),
-- 	('Guez', 'David', '06/14/2003'),
-- 	('Simpson', 'Omer', '10/03/1980');

-- INSERT INTO students (last_name, first_name, birth_date)
-- VALUES ('Ben Attar', 'Gary', '03/31/1993');

-- Select * FROM students;
-- SELECT first_name, last_name FROM students;

-- SELECT * FROM students WHERE id = 2;
-- SELECT * FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';
-- SELECT * FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';

-- SELECT * FROM students WHERE first_name LIKE 'A%';
-- SELECT * FROM students WHERE first_name LIKE '%a%';
-- SELECT * FROM students WHERE first_name LIKE '%a';
-- SELECT * FROM students WHERE first_name LIKE '_%a%_';

-- SELECT * FROM students WHERE id = 1 AND id = 3;

-- SELECT * FROM students WHERE birth_date >= '01/01/2000';