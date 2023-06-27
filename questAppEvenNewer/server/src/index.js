require('./models/User')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri =  'mongodb+srv://f4mno123:Mizia123@questappcluster.urdx6vc.mongodb.net/QuestAppDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri);
mongoose.connection.on('connected', () => {
    console.log('connected to mongo');
});

mongoose.connection.on('error', (error) => {
    console.error('error connecting to mongo', error)
})

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
})

//TODO fix a bug, where new db gets created when user signs up