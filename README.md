# MongoDB Resources

This repo is dedicated to resources for using [MongoDB on DigitalOcean](https://www.digitalocean.com/products/managed-databases/).

- **[Sample Apps](#sample-apps)**: See how apps can integrate MongoDB
- **[Sample Datasets](#sample-datasets)**: Use these to populate a new MongoDB database so you can use them in your demo apps
- **[Tutorials](#tutorials)**: Watch and read on ways to build with MongoDB on DigitalOcean

## Sample Apps

Following are sample apps that you can deploy to DigitalOcean App Platform

- Node API (Fastify + MongoDB)
- Jamstack Blog (Strapi + Next.js + MongoDB)
- Unsplash App (Strapi + Next.js + MongoDB)

| App | Description | GitHub | Deploy |
|-----|-------------|--------|--------|
|Node API|Build a Node API using Fastify and MongoDB.|[Repo](https://github.com/do-community/node-fastify-api)|[![Deploy to DO](https://mp-assets1.sfo2.digitaloceanspaces.com/deploy-to-do/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/do-community/node-fastify-api/tree/master)|
|Strapi + Next Blog|Create a backend CMS and API w/ Strapi and show data with a Next.js frontend.|[Strapi Repo](https://github.com/do-community/jamstack-blog-strapi) - [Next.js Repo](https://github.com/do-community/jamstack-blog-nextjs)|[![Deploy to DO](https://mp-assets1.sfo2.digitaloceanspaces.com/deploy-to-do/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/chris-on-code/jamstack-blog-strapi/tree/master)
|Unsplash Clone|Use Strapi and Next.js to create an image uploads site.|[Strapi Repo]() - [Next.js Repo]()|


## Sample Datasets

Sample datasets are pulled from the community repo: [mongodb-json-files](https://github.com/ozlerhakan/mongodb-json-files).

### List of small datasets

| Name | Size | Data type |
|------|------|-----------|
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

## License

[![Creative Commons](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
