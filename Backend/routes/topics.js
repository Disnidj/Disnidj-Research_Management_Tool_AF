const express = require ('express');

//import the user model
const Topics = require('../models/topics');

//a variable to access the routes (to write the http requests)
const router = express.Router();

//to save topics
router.post('/topic/save', (req, res) => {
    
    let newTopic = new Topics(req.body);

    //to save the content
    //if there is an error in saving
    newTopic.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });

        }
        //to show whether the topic is been saved
        return res.status(200).json({
            success:"Topic has been added successfully.....!"
        });
    });
});


//to get details of topics
router.get('/topics', (req,res) =>{ //declaring the end point
    //uses the find method from mongoose
    Topics.find().exec((err,topics) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        //if we can find the topics without any error
        return res.status(200).json({
            success:true,
            existingTopics:topics
        });
    });
});


//update function 
router.put('/topic/update/:id', (req,res)=>{ //declaring the end point
    Topics.findByIdAndUpdate(
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
                success:"Topic has been updated successfully....!"
            });
        }
    );
});



//delete courses
router.delete('/topic/delete/:id', (req, res) =>{
    Topics.findByIdAndRemove(req.params.id).exec((err, deletedTopic) =>{
        if(err) 
        return res.status(400).json({
            message:"Failed to delete topic!", err
        });
        //if success
        return res.json({
            message:"Topic has been deleted successfully...!",deletedTopic
        });
    });
});


module.exports = router;