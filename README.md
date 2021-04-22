# MongoDB Resources

This repo is dedicated to resources for using [MongoDB on DigitalOcean](https://www.digitalocean.com/products/managed-databases/).

- **[Sample Datasets](#sample-datasets)**: Use these to populate a new MongoDB database so you can use them in your demo apps
- **[Sample Apps](#sample-apps)**: See how apps can integrate MongoDB
- **[Tutorials](#tutorials)**: Watch and read on ways to build with MongoDB on DigitalOcean

## Sample Datasets

Sample datasets are pulled from the community repo: [mongodb-json-files](https://github.com/ozlerhakan/mongodb-json-files).

### List of small datasets

| Name | Size | Data type |
|------|------|-----------|
|[Tweets](/datasets/tweets.zip)|610 kb|zip -> dump folder
|[Grades](/datasets/grades.json)|92 kb|JSON
|[Students](/datasets/students.json)|35 kb|JSON
|[Profiles](/datasets/profiles.json)|454 kb|JSON
|[Products](/datasets/products.json)|2.8 kb|JSON
|[Countries](/datasets/countries-small.json) (Small)|329 kb|JSON
|[Countries](/datasets/countries-big.json) (Big)|2.3 Mb|JSON
|[Restaurants](/datasets/restaurant.json)|666 kb|JSON
|[Covers](/datasets/covers.json)|470 kb|JSON
|[Books](/datasets/books.json)|525 kb|JSON

### List of bigger datasets

| Name | Size | Data type |
|------|------|-----------|
|[People](/datasets/people-bson.zip)|21 Mo|zip -> dump gzip
|[City inspections](/datasets/city_inspections.json)|24 Mo|JSON
|[Companies](/datasets/companies.json)|75 Mo|JSON

### How to use sample datasets

The quick tutorial for how to add these sample datasets to a MongoDB database on DigitalOcean are:

1. Install MongoDB Compass
1. Create a MongoDB database
1. Grab your connection URL
1. Connect to your database from MongoDB Compass
1. Upload one of these sample datasets

View the full tutorial: [How to Import Sample Data into MongoDB](/tutorial.md)

## Sample Apps

- Node API (Fastify + MongoDB)
  -- Deploy to DO Button
- Unsplash App (Strapi + MongoDB)
  -- Deploy to DO Button

| App | Description | Backend | Frontend |

## Tutorials

## License

[![Creative Commons](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)
