const promise = require('bluebird');
const initOptions = {
	 promiseLib: promise 
};
const cn =  {
	database: 'ar_photoshot_db',
	host    : '192.168.1.241',
	port    : '5432',
	user    : 'miracle',
	password: '594a40eccf008'
}

const pgp = require('pg-promise')(initOptions);
const db = pgp(cn);

module.exports = db;