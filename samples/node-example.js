const fs = require("fs");
const MongoClient = require("mongodb").MongoClient;

// NOTES ---------------------
// you can use this function from another file to connect to your mongodb database
// you can use it like so:
// const { client, db } = await connectToDatabase();

// we will pull the cert from environment variables
// make sure you add a DATABASE_URL and CA_CERT environment variables
// ----------------------------

// connect to the db
const url = process.env.DATABASE_URL;
const cert = process.env.CA_CERT;
const dbName = "tweets";

if (!url) throw new Error("Please enter a DATABASE_URL");
if (!cert) throw new Error("Please enter a CA_CERT");

// connect to the db
let cachedClient = null;
let cachedDb = null;

// we'll also cache a version of the client and db so we dont connect too many times
module.exports = async function connectToDatabase() {
  // return the cached versions if they exist
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // write the cert to a temporary file
  // we need app platform to be able to read the file
  // we will pull the cert from environment variables and write it to a temporary file
  fs.writeFileSync("./ca-certificate.crt", cert);

  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,
    tlsCAFile: "./ca-certificate.crt",
  });

  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
};
