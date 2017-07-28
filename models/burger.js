var orm = require('../config/orm.js');

var burger_call = {
    insert: function(some_val, cb) {
        orm.insert('burgers', 'burger_name', some_val, function(res) {
            cb(res);
        });
    },

    read: function(cb) {
        orm.read('burgers', function(res) {
            cb(res);
        });
    },

    update: function(user_id, res) {
        orm.update('burgers', 'devoured', 1, 'id', user_id, function(res) {
            cb(res);
        });
    },

    delete: function(user_id, cb) {
        orm.update('burgers', 'id', user_id, function(res) {
            cb(res);
        });
    }
}

module.exports = burger_call;