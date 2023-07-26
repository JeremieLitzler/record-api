# An API to save data records

An API to save data records from all life need into a json database file

## How I did it

I was inspired by [Vue.js + Node.js + Express + MySQL example: Build a full-stack CRUD Application
](https://www.bezkoder.com/vue-js-node-js-express-mysql-crud-example/) by [BezKoder](https://www.bezkoder.com/)

### The issues

I have a CLoudways account with a VPS

I created an empty PHP Custom App to get a Mysql DB

**Connecting to remote MySQL database**:

When having the error:

> ConnectionError [SequelizeConnectionError]: connect ETIMEDOUT

Add my local IP address (see [here](https://whatismyipaddress.com/fr/mon-ip) and add it to the Whiltelist IP in the screen available at `https://unified.cloudways.com/server/YOUR_SERVER_ID/security/?tab=MySQL`. [See Cloudways docs](https://www.cloudways.com/blog/connect-to-remote-mysql-database/#grant-remote-access-to-MySQL-database).

The connection worked instantly with the whitelisting.

**Datatypes**:

Also, in my case, I wanted to use the `UUIDV4` datatype. But Sequelize said:

> Error: Unknown data type: 'UUIDV4'

I misread [the docs](https://sequelize.org/docs/v6/core-concepts/model-basics/#uuids) and after changing to `UUID`, the table was created!

### Todo's

Enrich with:

- [Sequelize Associations: One-to-Many example – Node.js, MySQL](https://bezkoder.com/sequelize-associate-one-to-many/)
- [Sequelize Many-to-Many Association example with Node.js & MySQL](https://bezkoder.com/sequelize-associate-many-to-many/)
