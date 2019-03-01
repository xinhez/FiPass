-- db/migrations/create_tables-20190228.sql

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS companies;
DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS student_skills;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS student_tags;
DROP TABLE IF EXISTS positions;
DROP TABLE IF EXISTS position_skills;

CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL NOT NULL,
  email TEXT NOT NULL UNIQUE,
  passwd TEXT NOT NULL,
  phone VARCHAR(50),
  role_type BOOLEAN DEFAULT true,
  avatar VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS students (
  id BIGSERIAL NOT NULL,
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
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id) on delete cascade on update cascade
);

CREATE TABLE IF NOT EXISTS companies (
  id BIGSERIAL NOT NULL,
  user_id BIGSERIAL, 
  name VARCHAR(255) NOT NULL,
  location TEXT[],
  banner_img VARCHAR(255),
  description TEXT,
  contact_name VARCHAR(50) NOT NULL,
  active BOOLEAN DEFAULT true,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id) on delete cascade on update cascade
);

CREATE TABLE IF NOT EXISTS skills (
  id BIGSERIAL NOT NULL,
  category VARCHAR(50) NOT NULL,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS student_skills (
  student_id BIGSERIAL NOT NULL, 
  skill_id BIGSERIAL NOT NULL,
  PRIMARY KEY (student_id, skill_id),
  FOREIGN KEY (student_id) REFERENCES students(id) on delete cascade on update cascade,
  FOREIGN KEY (skill_id) REFERENCES skills(id) on delete cascade on update cascade
);

CREATE TABLE IF NOT EXISTS tags (
  id BIGSERIAL NOT NULL,
  company_id BIGSERIAL NOT NULL,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (company_id) REFERENCES companies(id) on delete cascade on update cascade
);

CREATE TABLE IF NOT EXISTS student_tags (
  student_id BIGSERIAL NOT NULL, 
  tag_id BIGSERIAL NOT NULL,
  PRIMARY KEY (student_id, tag_id),
  FOREIGN KEY (student_id) REFERENCES students(id) on delete cascade on update cascade,
  FOREIGN KEY (tag_id) REFERENCES tags(id) on delete cascade on update cascade
);

CREATE TABLE IF NOT EXISTS positions (
  id BIGSERIAL NOT NULL,
  company_id BIGSERIAL NOT NULL,
  name VARCHAR(128) NOT NULL,
  job_type VARCHAR(50) NOT NULL,
  location TEXT[],
  application_deadline DATE,
  description TEXT,
  active BOOLEAN DEFAULT true,
  PRIMARY KEY (id),
  FOREIGN KEY (company_id) REFERENCES companies(id) on delete cascade on update cascade
);

CREATE TABLE IF NOT EXISTS position_skills (
  position_id BIGSERIAL NOT NULL, 
  skill_id BIGSERIAL NOT NULL,
  PRIMARY KEY (position_id, skill_id),
  FOREIGN KEY (position_id) REFERENCES positions(id) on delete cascade on update cascade,
  FOREIGN KEY (skill_id) REFERENCES skills(id) on delete cascade on update cascade
);