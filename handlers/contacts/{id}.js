 'use strict';

 var repository = require('../../lib/contactRepository');

 var mysql = require('mysql');

 var connection = mysql.createConnection(
     {
         host     : 'localhost',
         user     : 'root',
         password : 'CADSession2016',
         database : 'mysql',
     }
 );

 module.exports = {
     get: function contacts_get(req, res) {

         connection.connect();

         var queryString = 'SELECT last_feedback FROM cases where contactId = " ' + req.params['id'].replace(/\s+/, "")  + '"';
         console.log(queryString);
         connection.query(queryString, function(err, rows, fields) {
             if (err) throw err;

             for (var i in rows) {
                 console.log(rows);
                 res.json(rows);
             }
         });



//         res.json(repository.get(req.params['id']));
     }    
 };
