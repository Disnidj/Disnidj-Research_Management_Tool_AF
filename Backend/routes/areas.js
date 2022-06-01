const express = require ('express');

//import the user model
const Areas = require('../models/areas');

//a variable to access the routes (to write the http requests)
const router = express.Router();

//to save topics
router.post('/area/save', (req, res) => {
    
    let newArea = new Areas(req.body);

    //to save the content
    //if there is an error in saving
    newArea.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });

        }
        //to show whether the area is been saved
        return res.status(200).json({
            success:"Research area has been added successfully.....!"
        });
    });
});


//to get details of topics
router.get('/areas', (req,res) =>{ //declaring the end point
    //uses the find method from mongoose
    Areas.find().exec((err,areas) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        //if we can find the topics without any error
        return res.status(200).json({
            success:true,
            existingAreas:areas
        });
    });
});

//update function 
router.put('/area/update/:id', (req,res)=>{ //declaring the end point
    Areas.findByIdAndUpdate(
        req.params.id,{
        //gets the id of the selected post
        $set:req.body //body-updates all the information
        } ,
        (err, topic)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            //if no error
            return res.status(200).json({
                success:"Area has been updated successfully....!"
            });
        }
    );
});




module.exports = router;