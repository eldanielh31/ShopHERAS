const router = require("express").Router();
const User = require("../modules/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

router.use(async function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Register
router.post("/register", async (req, res) =>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    });

    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500);
    }
    
});

router.post("/login", async (req, res)=>{
    try{
        const user = await User.findOne({username: req.body.username});

        !user && res.status(401).json("Username incorrecto");

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);


        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;
        
        originalPassword != inputPassword && 
            res.status(401).json("Contrasena incorrecta");

        const accessToken = jwt.sign(
        {
            id: user._id,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
            {expiresIn:"3d"}
        );
  
        const { password, ...others } = user._doc;

        res.status(200).json({...others, accessToken});

    }catch(err){
        res.status(500);
    }
})

module.exports = router;