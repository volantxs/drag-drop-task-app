const { MongoClient, ServerApiVersion, DBRef } = require("mongodb");
const Db = process.env.ATLAS_URI;
console.log(Db)
const client = new MongoClient(Db, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

var _db;

module.exports = {
    connectToServer: async function (callback) {
            try {
               await client.connect()
                await client.db("users").command({ping: 1}); 
                _db = client.db("users");
                console.log("Pinged your deployment. You successfully connected to MongoDB!")
            } catch(err) {
                return callback(err);
            }

        }, 

    getDB: function () {
        return _db;
    }
}