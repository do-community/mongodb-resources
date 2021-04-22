# How to Add Sample Data to MongoDB

This tutorial will use the sample datasets (particularly the [books.json](/datasets/books.json) dataset). You will use the dataset to add data to a new MongoDB database. 

You will use a desktop application called MongoDB Compass to:

- Connect to your database
- Import `.json` datasets
- Visualize your data

## The Overall Steps

1. Create a [DigitalOcean](https://digitalocean.com) account
2. Create a new [MongoDB database](https://www.digitalocean.com/products/managed-databases/)
3. Download [MongoDB Compass](https://www.mongodb.com/products/compass)
4. Connect to your database
4. Import Data using MongoDB Compass

## Walkthrough

Once you have your DigitalOcean account, go into your [DigitalOcean Dashboard](https://cloud.digitalocean.com/databases) and create a MongoDB databse.

![Create a MongoDB Database](images/create-mongodb-database.png)

Once you create your database, you'll be given credentials. Choose **Connection string** from the dropdown so you can see a single line to copy. You will be using this connection string to connect to your database from MongoDB Compass.

![Database connection string](images/database-connection-string.png)

Download MongoDB Compass and connect to your database using your credentials.

![Connect with MongoDB Compass](images/mongodb-compass-connect.png)

Now create a database.

![Create a database](images/create-database.png)

Click into your new database and collection and you will see an **Import Data** button.

![Import Data Button](images/import-button.png)

Use that to upload the dataset found in this GitHub repo.

![Import Screen](images/import-screen.png)

Now you can see your data!

![Data in Database!](images/imported-data.png)

## Next Steps

Check out the [sample applications](README.md) to see how to connect your applications to your new database. For instance, one of the demo apps has a Node app connecting to the database using [Mongoose](https://mongoosejs.com/).