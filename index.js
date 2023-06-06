const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const ORIGIN = `https://${process.env.ALIAS_NAME}.${process.env.ENVIRONMENT_NAME}.${process.env.DOMAIN_NAME}`

const port = 1337

app.listen(port, function(error) {
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
    console.log("Origin", ORIGIN);
});

app.get('/api', (req, res) => {
   res.send({'message':'Hello World'});
});

