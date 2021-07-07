<?php

require_once __DIR__ . "/vendor/autoload.php";

// were using the mongodb php driver
// https://docs.mongodb.com/drivers/php/
$conn = new MongoDB\Client('mongodb+srv://db-mongodb-fra1-74534-85930535.mongo.ondigitalocean.com', array(
    'username' => 'doadmin',
    'password' => 'PASS_HERE',
    'db'       => 'test',
    'authSource' => 'admin',
    'tls' => 'true',
    'tlsCAFile' => 'ca-certificate.pem'
));

// connect to the database
$db = $conn->test;
var_dump($db);

// choose our collection
$collection = $db->test;
var_dump($collection);

// create a collection
$collection = $db->createCollection("mycol2");
echo "Collection created succsessfully";

// create a document to insert
$document = array(
  "title" => "MongoDB",
  "description" => "database",
  "likes" => 100,
  "url" => "http://www.tutorialspoint.com/mongodb/",
  "by" => "tutorials point"
);

// insert the document
$collection->insert($document);
echo "Document inserted successfully";
