const User=require('../Model/UseModel')
const userGet = function (req,res){
    res.render('signup');
};

const userPost = async function(req,res){
    const{email,username,password} = req.body;

    const user = new User({email,username})
    await User.register(user,password);
    res.redirect("/SpaceSoupThings");
}
const loginGet =function (req,res){
    res.render('login');
}
module.exports = {userGet,userPost,loginGet}