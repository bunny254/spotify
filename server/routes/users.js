const router=equire("express").Router();
const {User, validate}=require('../models/users');
const bcrypt=require('bcrypt');

//create user
router.post('/', async(req,res)=>{
    const {error}=validate(req.body);
    if(error) return res.status(400).send({message:error.details[0].message});

    const user =await User.findOne({email:req.body.email})
    if(user)
        return res.status(403).send({message:"User already exists!"})

    const salt=await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword=await bcrypt.hash(req.body.password, salt);
    let newUser=await new User({
        ...req.body,
        password: hashPassword
    }).save();

    newUser.password=undefined;
    newUser._v=undefined;

    res.status(200).send({data:newUser, message:"Account sucessfully created!"})
})