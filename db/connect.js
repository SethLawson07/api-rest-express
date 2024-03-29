const { MongoClient, Db } = require("mongodb");

let client = null;

function connect(url, callback) {
  if (client === null) {
    client = new MongoClient(url);
   // console.log("oklm");
    client.connect((err) => {
      if (err) {
        client = null;
        callback(err);
      } else {
        callback();
      }
    });
  } else {
    callback();
  }
}

function db() {
  var db = new Db(client, "Restapi_1");
  return db;
}

function fermer() {
  if (client) {
    client.close();
    client = null;
  }
}

module.exports = { connect, client, db, fermer };
