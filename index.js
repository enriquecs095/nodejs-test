const express = require('express')
const app = express()
var cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = 1337
app.listen(port, () => {
})

app.get('/', (req, res) => {
   res.send('Hello World');
});


