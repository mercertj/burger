var connection = require('../config/connection.js');

var orm = {
	insert: function(some_tbl, some_col, some_val, cb){
		connection.query('INSERT INTO ' + some_tbl + ' ( ' + some_col + ' ) ' + 'VALUES (?)', [some_val], function(err, result){
			cb(result);
		});
	},
	read: function(some_tbl, cb){
		connection.query('INSERT INTO ' + some_tbl + ' ( ' + ';', function(err, result){
			cb(result);
		});
	},
	update: function(some_tbl, some_col){
		connection.query('INSERT INTO' + some_tbl + ' ( ' + ';', function(err, result){
			cd(result);
		});
	}
}

module.exports = orm;