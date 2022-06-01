const express = require('express');
const mongoose = require('mongoose');
const bodyPaser=require('body-parser');
const app = express();
const cors=require('cors');
const dotenv = require('dotenv');
 
//upload file
const fileUpload = require('express-fileupload');
//app.use(fileUpload());
dotenv.config();



//import routs
const postRoutes = require('./routes/PanelEve');
const postRoutes2 =require('./routes/SuperviEve');
const postRoutes3 =require('./routes/adminUpload');
const postRoutes4=require('./routes/studentSubmit');
const postRoutes5=require('./routes/PresTempUpload');
//app.use("/user", require("./routes/user"));

//Ramona
const topicRoutes = require('./routes/topics');
const groupRoutes = require('./routes/group');
const areaRoutes = require('./routes/areas');


//app middleware
app.use(bodyPaser.json());
app.use(cors());
app.use(express.json());

//rout middleware
app.use(postRoutes);
app.use(postRoutes2);
app.use(postRoutes3);
app.use(postRoutes4);
app.use(postRoutes5);

//Ramona
app.use(topicRoutes);
app.use(groupRoutes);
app.use(areaRoutes);

//port
const PORT = 8000;
const DB_URL='mongodb+srv://twg:twg123@twg.ibf9s.mongodb.net/Project0?retryWrites=true&w=majority'
//connect db
mongoose.connect(DB_URL)
    
    
//,process.env.MONGO_URI,{
    //useCreateIndex: true,
    //useNewUrlParser: true,
    //useFindAndModify: false,
    //useUnifiedTopology: true,
//})
.then(() => {
    console.log('DB connected');
})
.catch((err)=> console.log('DB connection error',err));

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});







//Upload a file
/*
app.post('/uplaod',(req,res)=>{
    if(req.files===null){
        return res.status(400).json({
            msg:'no file uploaded'
        });

    }
    const file =req.files.file;

    file.mv(`${__dirname}/FrontEnd/student/public/stdDocuploads/${file.name}`, err=>{
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({fileName: file.name,filePath:`/stdDocuploads/${file.name}`});


    });

});
*/





