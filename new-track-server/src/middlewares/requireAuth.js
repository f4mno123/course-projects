const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    console.log(authorization);
    // authorization === 'Bearer '
    if (!authorization){
        return res.status(422).send({error: 'You must be logged in'});
    }

    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, 'MY_SECRET_KEY', async (error, payload) => {
    if (error){
        return res.status(422).send('You must be logged in')
    }

    const { userId } = payload;
    const user = await User.findById(userId);
    req.user = user;
    next();
    });
}