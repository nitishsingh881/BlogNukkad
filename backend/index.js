// import express
const express = require('express');
const userRouter = require('./Routers/userRouter');
const competitionRouter = require('./Routers/competitionRouter');

const cors = require('cors');

// initialize express app
const app = express();
const port = 5000;

// middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

app.use( '/user', userRouter );
app.use( '/competition', competitionRouter );

app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res) => {
    res.send('add response from express');
});

app.listen( port, () => { console.log('server started'); } );