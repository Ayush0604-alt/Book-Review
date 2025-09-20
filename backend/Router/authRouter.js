const express=require('express');
const registration=require('../Auth-controller/Registration');
const login=require('../Auth-controller/login');


const router=express.Router();


router.post('/register',registration);
router.post('/login',login);

module.exports=router;