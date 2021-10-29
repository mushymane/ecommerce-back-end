# E-commerce Back End

## Description 

This project demonstrates Object-Relational Mapping (ORM) and the functionality of Node.js Sequelize. The routes are modularized for different endpoints. There is also a server powered by Express.js which connects to the database with the ```connection.js``` file, using the credentials found in the ```.env``` file. The database is filled with data found in the ```seeds``` directory.

Sequelize is a promise-based ORM tool to help convert data between incompatible type systems. In this project we are essentially using MySQL in JavaScript form. There are models which represent tables. Not only can we define tables and their fields but we can also define associations between different tables, whether it is one-to-one, one-to-many, or many-to-many. The code found in the ```routes``` directory defines which CRUD operations can be performed at specified enpoints.

Check out a walkthrough of this project here: [Video Link](https://watch.screencastify.com/v/RzguZfGEBckV2JILwEEX)

## Table of Contents

* [Techonologies Used](#technologies-used)
* [Installation](#installation)
* [Usage](#usage)
* [Code Snippet](#code-snippet)
* [Questions](#questions)
* [Author Links](#author-links)

## Technologies Used

- JavaScript - programming language used for this app
- Node.js - runtime environment
- Express.js - back end web application framework
- MySQL - relational database management system
- dotenv - loads environment variables from a .env file into process.env
- Insomnia - API client for testing REST endpoints
- Git - version control
- Github - where the repository is hosted
- Visual Studio Code - text editor
- Screencastify - for recording video

## Installation

- Clone from Github
- Use your command-line to get to the project directory
- Enter the MySQL shell to create and seed the database
- ```mysql -u root -p```
- ```source db/schema.sql```
- Exit the shell
- Install the required dependencies with ```npm install```
- Seed the database with provided starter data ```npm run seed```
- Start the server to test endpoints or modify the database in an API client with ```npm start```

## Usage

Use Insomnia or Postman to start playing around with the ```ecommerce_db``` database. You can use CRUD operations (GET, POST, PUT, DELETE) to get, add, change, or delete data in the ```api/<categories | products | tags>``` endpoints

## Code Snippet

JavaScript code for ```api/tag/:id``` route
```
router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      })
    if(tagData[0] === 0) {
      res.status(404).json({ message: 'Unable to find tag with that id, or requested tag name is the same as current' })
      return;
    }
    res.status(200).json(tagData)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
});
```

## Questions

Have any questions? My Github and email:

[My Github Link](https://github.com/mushymane)  
Email: mushymanee@gmail.com

## Author Links
[LinkedIn](https://www.linkedin.com/in/luigilantin/)