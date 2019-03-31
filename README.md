# FiPass

Dev: acui34, JanathonL-CMU, yyn19951228, xinhez

Design: Clair

Business: Chenchen

# Dev Notes

1. Install Postgres, Node and npm.
   (Ubuntu might need to run `sudo -u postgres creatuser username`)
2. Run `createdb fipass-app` to create the database.
3. Add the table and seed the database:

- `psql -d fipass-app -f scripts/db/migrations/create_students-20190226.sql`
- `psql -d fipass-app -f scripts/db/seeds/add_students-20190226.sql`

5. Run `npm install` in your terminal to install dependencies.
6. Start the server with `npm run dev`. (for production run `npm start`)
7. In a separate tab build the front-end with `npm run dbgbuild`. (for production run `npm run build`)
8. Navigate to http://localhost:3000/ in your browser.
