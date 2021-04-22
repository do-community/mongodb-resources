# MongoDB Resources

This repo is dedicated to resources for using [MongoDB on DigitalOcean](https://www.digitalocean.com/products/managed-databases/).

- **Sample Datasets**: Use these to populate a new MongoDB database so you can use them in your demo apps
- **Sample Apps**: See how apps can integrate MongoDB
- **Tutorials**: Watch and read on ways to build with MongoDB on DigitalOcean

## Sample Datasets

Sample datasets are pulled from the community repo: [mongodb-json-files](https://github.com/ozlerhakan/mongodb-json-files).

### List of small datasets

[cols="^1,^2,^3,^4",options="header"]
|=========================================================================================================
|Name|Size|Data type|How to import
|link:datasets/tweets.zip[Tweets]|610 Ko|zip -> dump folder|mongorestore
|http://media.mongodb.org/zips.json[Zips]|3.1 Mo|JSON|mongoimport
|link:datasets/palbum.zip[Palbum]|731 Ko|zip -> JSON files|mongoimport
|link:datasets/grades.json[Grades]|92 Ko|JSON|mongoimport
|link:datasets/students.json[Students]|35 Ko|JSON|mongoimport
|link:datasets/profiles.json[Profiles]|454 Ko|JSON|mongoimport
|link:datasets/products.json[Products]|2.8 Ko|JSON|mongoimport
|link:datasets/countries-small.json[Countries small]|329 Ko|JSON|mongoimport
|link:datasets/countries-big.json[Countries big]|2.3 Mo|JSON|mongoimport
|link:datasets/restaurant.json[Restaurants]|666 Ko|JSON|mongoimport
|link:datasets/covers.json[Covers]|470 Ko|JSON|mongoimport
|link:datasets/books.json[Books]|525 Ko|JSON|mongoimport
|=========================================================================================================

### List of bigger datasets

[cols="^1,^2,^3,^4",options="header"]
|=========================================================================================================
|Name|Size|Data type|How to import
|link:datasets/people-bson.zip[People]|21 Mo|zip -> dump gzip|mongorestore --gzip
|link:datasets/city_inspections.json[City inspections]|24 Mo|JSON|mongoimport
|link:datasets/companies.json[Companies]|75 Mo|JSON|mongoimport
|https://dl.dropbox.com/s/p75zp1karqg6nnn/stocks.zip[Stocks]|85 Mo|zip -> dump folder|mongorestore
|https://dl.dropbox.com/s/gxbsj271j5pevec/trades.json[Trades]|232 Mo|JSON|mongoimport
|https://dl.dropbox.com/s/nfnvx6pggmvw5vt/enron.zip[Enron]|55 Mo|RAR (named .zip for confusion) -> dump folder|mongorestore
|=========================================================================================================

### How to use sample datasets

The quick tutorial for how to add these sample datasets to a MongoDB database on DigitalOcean are:

1. Install MongoDB Compass
1. Create a MongoDB database
1. Grab your connection URL
1. Connect to your database from MongoDB Compass
1. Upload one of these sample datasets

View the [full tutorial](/tutorial.md)

## Sample Apps

- Node API (Fastify + MongoDB)
  -- Deploy to DO Button
- Unsplash App (Strapi + MongoDB)
  -- Deploy to DO Button

| App | Description | Backend | Frontend |

## License

image::http://i.creativecommons.org/p/zero/1.0/88x31.png[http://creativecommons.org/publicdomain/zero/1.0/]
