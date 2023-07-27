# An API to save data records

An API to save data records from all life needs into a NoeJS REST API backup by [SequelizeJS](https://sequelize.org/) and [Cloudways](https://www.cloudways.com/en/?id=174912)

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

- [x] Add a POST endpoint (Add record)
- [x] Add a GET "one" endpoint
- [x] Add a GET "many" endpoint
  - Has a filter on `category` get param
- [x] Add a PUT endpoint (Update record)
- [x] Add a DELETE "one" endpoint
- [x] Add a DELETE "all" endpoint
- [ ] Add unit tests
- [ ] Enhance the `recordCategory` and `recordType` and `recordUnit` inputs with new endpoints to list all existing values:
  - [ ] for `recordUnit`
  - [ ] for `recordCategory`
  - [ ] for `recordType`
- [ ] Enhance the GET "many" endpoint
  - [ ] to filter on `recordValue`
  - [ ] to filter on `recordType`
  - [ ] to filter on `recordDate` from a range of dates (from > to)
- [ ] Add a GET "many" endpoint with grouping by a column

Enrich with:

- [Sequelize Associations: One-to-Many example – Node.js, MySQL](https://bezkoder.com/sequelize-associate-one-to-many/)
- [Sequelize Many-to-Many Association example with Node.js & MySQL](https://bezkoder.com/sequelize-associate-many-to-many/)
