var express = require('express');
var router = require('./router')
const cors = require('cors');

const app = express();

let config = {port: 3000}

// enable cors
app.use(cors());
app.options('*', cors());


app.use(router)


let server = app.listen(config.port, () => {
    console.log(`Listening to port ${config.port}`);
});
