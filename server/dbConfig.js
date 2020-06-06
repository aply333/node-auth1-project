const knex = require("knex");
const knexFile = require("../knexfile");

const database = "development";

module.exports = knex(knexFile[database]);