const express = require('express');
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will 
// take control of requests starting with path /record.

const recordRoutes = express.Router();

// to connect to database
const dbo = require('../db/conn');

// to convert id from string to ObjectId
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.
recordRoutes.route('/record').get(function (req, res) {
    let db_connect = dbo.getDB('users');
    db_connect
        .collection('cards')
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
    let db_connect = dbo.getDB();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
      .collection("cards")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });

   // This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
    let db_connect = dbo.getDB();
    let myobj = {
      cardID: req.body.cardID,
      title: req.body.title,
      subtitle: req.body.subtitle,
    };
    db_connect.collection("cards").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
   });


   // This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
    let db_connect = dbo.getDB();
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
      $set: {
        cardID: req.body.cardID,
        title: req.body.title,
        subtitle: req.body.subtitle,
      },
    };
    db_connect
      .collection("cards")
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        response.json(res);
      });
   });
    
   // This section will help you delete a record
   recordRoutes.route("/:id").delete((req, response) => {
    let db_connect = dbo.getDB();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("cards").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
    });
   });
    
   module.exports = recordRoutes;