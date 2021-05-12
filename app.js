// * Access express module
const express = require('express');

// * Creating a server
const app = express();

// * Access users
const users = require('./users.json');

// * Access file system module
const fs = require('fs');

/* 
* HTTP Request Methods
    - GET
    - POST
    - PUT
    - PATCH
    - DELETE
*/

// app.get(route, callback function)
// / stands for index route
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/books', (req, res) => {
    res.send('There are 75 books in store.');
});

app.post('/', (req, res) => {
    res.send('Default post request!');
});

// TODO: REST API using express
/* 
    * Request Object
    - params
    - query
    - body
*/
/* 
    * CRUD Operations
   - Creating users,            POST /users
   - Fetching users,            GET /users
   - Fetching a single user,    GET /users/:id
   - Updating a single user,    PUT /users/:id
   - Deleting a single user,    DELETE /users/:id
*/

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// * fetching users
app.get('/users', (req, res) => {
    // fetch all users
    // send array of users as a response to the client
    return res.json({ users });
});

// * creating users
app.post('/users', (req, res) => {
    // create a new user from client's response, postman was used for this
    // save new user to existing database
    users.push(req.body.newUser);
    // save updated data to users.json
    // stringify the json data
    const stringedData = JSON.stringify(users, null, 2);
    // rewrite the data to file users.json
    fs.writeFile('users.json', stringedData, (err) => {
        if (err) {
            return res.status(500).json({ message: err });
        }
    })
    // send back a response to client
    return res.status(200).json({ message: "new user created" });
});

// * fetching a single user
app.get('/users/:id', (req, res) => {
    // fetch id
    let id = req.params.id;
    // find user with id
    const fetchedUser = users.find(user => {
        return String(user.id) === id;
    });
    // return user object as response
    if (fetchedUser) res.status(200).json({ user: fetchedUser });
    else res.status(404).json({ message: "user not found" });
});

// * Configure app to listen to a port
const port = 7070;
app.listen(port, () => {
    console.log(`App is running on port:${port}`);
});