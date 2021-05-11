// * Creating a server
const app = require('express')();

// * Configure app to listen to a port
const port = 7070;
app.listen(port, () => {
    console.log(`App is running on port:${port}`);
});

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