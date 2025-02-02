const express = require('express');
const path = require('path');

const app = express();
const port = 3100;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index'); 
});


app.use(express.urlencoded({ extended: true })); 

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.send(`<center><h1>Thank you, ${name}!</h1>,<br><h2> Your email ${email} has been received.</h2></br></center>`);
});

app.listen(port, () => {
    console.log(`${port}`);
});
