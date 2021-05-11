const express = require('express');

// * Creating a server
const app = express();

// * Access users
const users = require('./users.json');

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

app.get('/users', (req, res) => {
    // fetch all users
    // send array of users as a response to the client
    return res.json({ users });
});

app.post('/users', (req, res) => {
    // create a new user from client's response
    console.log(req.body);
    // save new user to existing database
    // save updated data to users.json
    // send back a response to client
});


// * Configure app to listen to a port
const port = 7070;
app.listen(port, () => {
    console.log(`App is running on port:${port}`);
});