# An API to save data records

An API to save data records from all life need into a json database file

## How I did it

I was inspired by [Vue.js + Node.js + Express + MySQL example: Build a full-stack CRUD Application
](https://www.bezkoder.com/vue-js-node-js-express-mysql-crud-example/) by [BezKoder](https://www.bezkoder.com/)

### The issues

I have a CLoudways account with a VPS

I created an empty PHP Custom App to get a Mysql DB

I had to add my local IP address (see [here]() and add it to the Whiltelist IP in the screen available at `https://unified.cloudways.com/server/YOUR_SERVER_ID/security/?tab=MySQL`

The connection worked instantly with the whitelisting.

Also, in my case, I wanted to use the `UUIDV4` datatype. But Sequelize said:

> Error: Unknown data type: 'UUIDV4'

I misread [the docs](https://sequelize.org/docs/v6/core-concepts/model-basics/#uuids) and after changing to `UUID`, the table was created!
