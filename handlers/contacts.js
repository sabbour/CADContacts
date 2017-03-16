 'use strict';

 var repository = require('../lib/contactRepository');

 var mysql = require('mysql');

 var connection = mysql.createConnection(
     {
         host     : 'localhost',
         user     : 'root',
         password : 'MiniCAD123',
         database : 'mysql',
     }
 );

 module.exports = {
     get: function contacts_get(req, res) {

  //       connection.connect();

 //        var queryString = 'SELECT last_feedback FROM cases';

   //      connection.query(queryString, function(err, rows, fields) {
     //        if (err) throw err;

       //      for (var i in rows) {
         //         res.json(rows);
    //         }
   //      });
     //    res.json(repository.all())
     res.json('{"status": "Legacy API is working fine"}');
     }
 };
