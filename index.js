const express = require('express')
const app = express()
var cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", process.env.WEB_APP_URL_ORIGIN);
   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });

const port = 1337
app.listen(port, () => {
})

app.get('/api', (req, res) => {
   res.send('Hello World');
   console.log(process.env.WEB_APP_URL_ORIGIN);
});
