const MongoClient = require("mongodb").MongoClient;

const pool = async () => {
  const url = process.env.URL_DB;
  const dbName = process.env.DB_NAME;
  let client;
  try {
    client = await MongoClient.connect(url);
    const db = client.db(dbName);
    return db;
  } catch (err) {
    console.log(err.stack);
  }

  client ? client.close() : null;
};
module.exports = { pool };
