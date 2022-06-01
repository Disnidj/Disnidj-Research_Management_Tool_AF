const express = require ('express');

//import the user model
const Groups = require('../models/group');

//a variable to access the routes (to write the http requests)
const router = express.Router();

//to save topics
router.post('/group/save', (req, res) => {
    
    let newGroup = new Groups(req.body);

    //to save the content
    //if there is an error in saving
    newGroup.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });

        }
        //to show whether the group is been saved
        return res.status(200).json({
            success:"Group has been added successfully.....!"
        });
    });
});


//to get details of groups
router.get('/groups', (req,res) =>{ //declaring the end point
    //uses the find method from mongoose
    Groups.find().exec((err,groups) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        //if we can find the groups without any error
        return res.status(200).json({
            success:true,
            existingGroups:groups
        });
    });
});


//update function 
router.put('/group/update/:id', (req,res)=>{ //declaring the end point
    Groups.findByIdAndUpdate(
        req.params.id,{
        //gets the id of the selected post
        $set:req.body //body-updates all the information
        } ,
        (err, group)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            //if no error
            return res.status(200).json({
                success:"Group has been updated successfully....!"
            });
        }
    );
});



//delete courses
router.delete('/group/delete/:id', (req, res) =>{
    Groups.findByIdAndRemove(req.params.id).exec((err, deletedGroup) =>{
        if(err) 
        return res.status(400).json({
            message:"Failed to delete group!", err
        });
        //if success
        return res.json({
            message:"Group has been deleted successfully...!",deletedGroup
        });
    });
});

//get a specific group

router.get("/group/:id",(req,res)=>{
    let groupId = req.params.id;

    Groups.findById(groupId,(err,group)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            group
        });
    });
});


module.exports = router;