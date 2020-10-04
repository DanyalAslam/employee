const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./Employee')
require('./Users')
app.use(bodyParser.json())

const Employee = mongoose.model("employee")
const Users = mongoose.model("Users")

const mongouri = "mongodb+srv://cnq:al6h3AlJhjeVxMo6@cluster0.qtwbs.mongodb.net/<dbname>?retryWrites=true&w=majority"


mongoose.connect(mongouri,{
        useUnifiedTopology:true,
         useNewUrlParser:true,
    })
    mongoose.connection.on("Connected", () => {
        console.log('connected to MongoDB Database');
    })
    mongoose.connection.on("error", (err) => {
        console.log('Error :',err);
    })


app.get('/',(req,res)=>{
    Employee.find({}) //empty bracket means find everything
    .then(data=>{
        
        res.send(data)
    }).catch(err=>{
        console.log('ye rha error',err)
    })
   
    
})

app.post('/signup',(req,res) => {
    const user = new Users({
        email : req.body.email,
        password : req.body.password
    })
    user.save()
    .then(data =>{
        console.log("Singnup success")
        
        res.json({msg:'signup successful'})
    }).catch(err=>{
        console.log('Not posted Data',err)
    })
})


// https://www.youtube.com/watch?v=pzGQMwGmCnc
app.post('/login',(req,res) => {
    // const user = new Users({
    //     email : req.body.email,
    //     password : req.body.password
    // })



    Users.findOne({ email : req.body.email, password : req.body.password}, function(err,user){
        if(err)
        {
            console.log('the error for login is :',err);
        }

        if (!user)
        {
            console.log('No user Found');
        }

    } )
    .then(data =>{
        console.log("the data we got is : ",data)
        
       
    }).catch(err=>{
        console.log('Not posted Data',err)
    })
})




app.post('/send',(req,res)=>{
    
    const employee =new Employee({
    name : req.body.name,
    email :req.body.email,
    phone : req.body.phone,
    picture:req.body.picture,
    salary:req.body.salary,
    position:req.body.position,
    
})
employee.save()

.then(data=>{
    console.log("Data Successfully Posted")
    res.send("Posted")
    console.log(data)
    }).catch(err=>{
        console.log('Not posted Data',err)
})


})

app.post('/delete',(req,res)=>{
    Employee.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log(data)
        res.send("Deleted")
        
    }).catch(err=>{
        console.log("error h bhai")
        console.log(err)
    })
})


app.post('/update',(req,res)=>{
    Employee.findByIdAndUpdate(req.body.id,{
        name : req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        picture:req.body.picture,
        salary:req.body.salary,
        position:req.body.position,
    })
    .then(data => {
        console.log('Updated Data :',data);
    })
 
})

app.listen(3000,()=>{
    console.log('server running jani')
}) 

