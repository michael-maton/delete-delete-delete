const knex = require('knex'); // to make sql queries using javascript

const config = require('../knexfile.js'); // different configs for different envs

// in heroku, NODE_ENV // "production"
// in local, NODE_ENV // undefined
// so we use a logical expression to get the environment
const env = process.env.NODE_ENV || "development"

console.log("the env is ", env)
module.exports = knex(config[env]); // choose env and call knex with the right config