// require('dotenv').config()
// const express = require('express')
// const cors = require('cors')
// const mongoose = require('mongoose')
// const bodyParser = require("body-parser");
// const Users = require('./Models/Users');


// const app = express();

// //
// //const authorouter=require('./Routing/Router');

// // app.use(bodyParser.json);
// // app.use(bodyParser.json())

// // app.get('/',(req,res)=>{
// //   res.send('this is home page')
// // })

// // app.listen(3000,()=>{
// //   console.log("connected to database & listening on port");
// // })



// // app.post('/signup',(req,res)=>{
// //   console.log('hello world');
// //   res(req.body);



// // Configure middleware-*
// app.use(cors());
// app.use(bodyParser.json());


// // // Connect to the database
// mongoose.connect("mongodb+srv://hans:hans@cluster0.axxfcfd.mongodb.net/fyp?retryWrites=true&w=majority")
// .then(()=>{
//     //listener for requests
//     app.listen(5000,()=>{
//         console.log("connected to database & listening on port",5000)
//     })
// })
// .catch((error)=>{
//     console.log("This is the error: ",error)
// });

// // app.use('/',authorouter);

// // app.get('/', (req, res) => {
// //   res.send('Hello, World!');
// // });

// // app.post('/Users', (req, res) => {
// //   const { email, password } = req.body;
  
// //   Users.findOne({ email, password })
// //     .then(user => {
// //       if (user) {
// //         res.send(user);
// //       } else {
// //         res.status(404).send('User not found');
// //       }
// //     })
// //     .catch(error => {
// //       res.status(500).send(`Error fetching user: ${error}`);
// //     });
// // });




// // //login
// app.use('/login', async (req, res) => {
//     const { email, password } = req.body;
//     console.log(email)
//     // Check if donor user exists with the given email and password
//     const user = await Users.findOne({ email, password });
//     // if (user && user.roleId=="1") {
//     //   res.status(200).json({ user, redirect:"/admin", role:'admin' });
//     //   return;
//     // }
//     // else if (user && user.roleId=="2") {
//     //   res.status(200).json({ user, redirect:"/ngo", role:'NGO' });
//     //   return;
//     // }
//     if (user && user.roleId=="3") {
//       res.status(200).json({ user, redirect:"/donor",role:'Donor' });
//       return;
//     }
//     else if (user && user.roleId=="4") {
//       res.status(200).json({ user, redirect:"/ngo", role:'Needy' });
//       return;
//     }
//     // Check if needy user exists with the given email and password
//     // const needyUser = await needy_users.findOne({ email, password });
//     // if (needyUser) {
//     //   res.status(200).send({ message: "Needy user logged in successfully", redirect:"/about" });
//     //   return;
//     // }
  
//     // If neither donor nor needy user exists, return an error response
//     res.status(401).json({ message: "Invalid email or password" });
//   })





const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://hans:hans@cluster0.axxfcfd.mongodb.net/fyp?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Define a user schema
// Define a user model
const User = require('./Models/Users');
const donorUser=require('./Models/donor_users')
const role=require('./Models/role');
// Login route
app.post('/Login', (req, res) => {
  const { email, password } = req.body;

  // Find a user with the given email and password
  User.findOne({ email, password }, (err, user) => {
    if (err) {
      console.error('Error:', err);
      res.json({ success: false });
    } else if (user) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });
});


// donr-routes
app.use('/donor-signup',async (req, res) => {

  try {
    const {name, address, email, phone, cnic, password } = req.body;

    const newUser = new User({
       roleId:'3',
       name,
       password,
       email,
       address,
       phone,
       cnic 
    })
    // Save the new user to the database
    const savedUser = await newUser.save();

    res.status(201).json({savedUser}); // Return the saved user as a JSON response with a 201 status code
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' }); // Handle errors
  }
})
// needy-routes
app.use('/needy-signup',async (req, res) => {

  try {
    const {name, address, email, phone, cnic, password } = req.body;

    const newUser = new User({
       roleId:'4',
       name,
       password,
       email,
       address,
       phone,
       cnic 
    })
    // Save the new user to the database
    const savedUser = await newUser.save();

    res.status(201).json({savedUser}); // Return the saved user as a JSON response with a 201 status code
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' }); // Handle errors
  }
})

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
