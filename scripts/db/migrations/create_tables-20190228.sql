-- db/migrations/create_tables-20190228.sql

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS students;

CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL NOT NULL,
  email TEXT NOT NULL UNIQUE,
  passwd TEXT NOT NULL,
  phone VARCHAR(50),
  role_type BOOLEAN DEFAULT true,
  avatar VARCHAR(255),
  PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS students (
  id BIGSERIAL,
  user_id BIGSERIAL, 
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  middle_name VARCHAR(50),
  school VARCHAR(50) NOT NULL,
  degree SMALLINT NOT NULL,
  graduation_year INT NOT NULL,
  major_1 VARCHAR(50) NOT NULL,
  major_2 VARCHAR(50),
  resume VARCHAR(255),
  PRIMARY KEY ("id"),
  FOREIGN KEY ("user_id") REFERENCES users("id") on delete cascade on update cascade
);

