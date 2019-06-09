const { Pool } = require("pg");
const { user, host, database, password, port } = require("./config");

const client = new Pool({ user, host, database, password, port });

module.exports = client;
