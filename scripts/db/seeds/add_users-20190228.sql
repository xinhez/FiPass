-- db/seeds/add_users-20190226.sql

INSERT INTO users (email, passwd, phone) VALUES
  (
    'xinhe@gmail.com',
    'secret-123',
    '4121231234'
  ),
  (
    'acui@andrew.cmu.edu',
    'secret-123',
    '8148829127'
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
