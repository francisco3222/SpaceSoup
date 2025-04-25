const router =require('express').Router();
const userCont = require('../Controller/userController');
const passport=require('passport')

router.get("/",userCont.userGet);

router.post("/signup",userCont.userPost)

router.get("/login",userCont.loginGet)

router.post("/login",passport.authenticate("local",{failureRedirect:"/login" ,failureMessage:"O username ou palavra-passe estão incorretos" }),
        function (req,res){
            res.redirect("/SpaceSoupThings")
        }
    );
module.exports=router;
