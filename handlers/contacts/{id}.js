 'use strict';

 var repository = require('../../lib/contactRepository');

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

         try {

         //    connection.connect();
             var caseId = req.params['id'];

             var queryString = 'SELECT last_feedback FROM cases where caseId = "' + caseId + '"';
             console.log(queryString);
             connection.query(queryString, function (err, rows, fields) {
                 if (err) throw err;

              //   for (var i in rows) {
                 for (var i = 0; i < row.length; i++) {
                     console.log(rows[i]);
                     res.json(rows[i]);
             //     break;
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
