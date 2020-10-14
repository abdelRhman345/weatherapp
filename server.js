projectData = {};

// Require Express to run server and routes
const express = require('express'),
      bodyParser = require('body-parser');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Post Route
const data = [];
app.post('/add', addData);

function addData(req, res) {
  projectData['date'] = req.body.date;
  projectData['temp'] = req.body.temp;
  projectData['content'] = req.body.content;
  res.send(projectData);
}

// Get Route
app.get('/all', getData);

function getData(req, res) {
  res.send(projectData);
}

// Setup Server
const port = 5000;
const server = app.listen(port, listening);
function listening() {
  console.log(`running on localhost: ${port}`);
};