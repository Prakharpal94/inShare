const express = require("express");
const app = express();
const path = require('path');
const cors = require('cors');

app.use(express.static('public'));
app.use(express.json());

const connectDB = require("./config/db.js");
connectDB();

// Cors
const corsOptions = {
  origin: process.env.ALLOWED_CLIENTS.split(',')
  // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
}
app.use(cors(corsOptions));
// Template engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Routs
app.use('/api/files', require('./routes/files.js'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
