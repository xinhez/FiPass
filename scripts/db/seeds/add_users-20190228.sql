-- db/seeds/add_users-20190226.sql

INSERT INTO users (email, passwd, phone) VALUES
  (
    'xinhe@gmail.com',
    'secret-123',
    '4121231234'
  ),
  (
    'aiqi@gmail.com',
    'secret-123',
    '4121234321'
  ),
  (
    'google@gmail.com',
    'secret-123',
    '4121230000'
  ),
  (
    'linkedin@gmail.com',
    'secret-123',
    '4121231111'
  );

INSERT INTO students (user_id, first_name, last_name, school, degree, graduation_year, major_1) VALUES
  (
    1,
    'Xinhe',
    'Zhang',
    'Carnegie Mellon University',
    1,
    2020,
    'Electrical Computer Engineering'
  ),
  (
    2,
    'Aiqi',
    'Cui',
    'Carnegie Mellon University',
    0,
    2020,
    'Information Systems'
  );

INSERT INTO companies (user_id, name, contact_name, description) VALUES
  (
    3,
    'Google',
    'Laura Doe',
    'Google is a good company!'
  ),
  (
    4,
    'LinkedIn',
    'William Linderson',
    'LinkedIn is cool!'
  );
