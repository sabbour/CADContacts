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

         try {

         //    connection.connect();
             var contactId = req.params['id'];

             var queryString = 'SELECT last_feedback FROM cases where contactId = "' + contactId + '"';
             console.log(queryString);
             connection.query(queryString, function (err, rows, fields) {
                 if (err) throw err;

                 for (var i in rows) {
                     console.log(rows);
                     res.json(rows);
                 }
             });

         } // try
         catch(e)
         {
             console.log(e.message);
         }

//         res.json(repository.get(req.params['id']));
     }    
 };
