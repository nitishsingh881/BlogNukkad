const express = require('express');
const router = express.Router();
const Model = require('../Models/userModel');

const jwt = require('jsonwebtoken');
require

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getall', (req, res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// : denotes url parameter

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
        
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);

    });
});

router.post('/authenticate', (req,res) => {
    console.log(req.body);
    then((result) =>{
        if(result){
        const { _id, name , email} =result;
        const payload ={_id, name, email};
        jwt.sign(
            payload.env.JWT_SECRET,
            {expiry: '2 days'},
            (err,token)=> {
        
            if(err){
                res.status(500).json({message:'error creating token'})
            }else{
                res.status(200).json({token, role: result.role})
            }

            }

        )
    }else{
        res.status(401).json({message:'Invalid Cre'})
    }
}).catch((err) => {
    req.status(500).json(err)
})
})

module.exports = router;