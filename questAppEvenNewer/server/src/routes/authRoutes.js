const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    console.log("email: " + email + " password: " + password );

    try {
        const user = new User({ email, password });
        await user.save();

        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
        res.send({ token });
    }
    catch(error) {
        return res.status(422).send('Incorrect email or password');
    }
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(422).send({error: 'Must privde email and password'});
    }

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(422).send({error: 'Invalid password or email'});
    }
    try {
        await user.comparePassword(password);
        const token = jwt.sign({userId: user._id}, 'MY_SECRET_KEY');
        res.send({token})
    }
    catch(error) {
        res.status(422).send({error: "Invalid password or email"})
    }
});




module.exports = router;