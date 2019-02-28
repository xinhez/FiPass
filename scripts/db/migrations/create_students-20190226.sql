-- db/migrations/create_students-20190226.sql

DROP TABLE IF EXISTS students;

CREATE TABLE IF NOT EXISTS students (
  id BIGSERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50)
);
