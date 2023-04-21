
const bcrypt = require ('bcrypt');
const user = require('../model/user');


// desc Register a user
// route POST/api/users/register
// access public
const registerUser = (req,res)=>{
    const {name, email, password, mobile, gender} = req.body;
    if(!name || !email || !password || !mobile || !gender){
        return res.status(400).json({ message: 'All feilds are mandatory' });
    }
    const userAvailable = user.findOne({ email });
    if (userAvailable){
        return res.status(400).json({ message: 'you already registered' });
    }
};

module.exports ={registerUser};