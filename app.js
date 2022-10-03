const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require("path");

const app = express();
const port = process.env.PORT || 7000;




app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    express.static(path.join(__dirname, "./client/build"))
)


const routes = require('./routes/todoRoute');
app.use('/', routes);


app.get('*', (req, res) => {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html")
    )
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})