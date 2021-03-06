const express = require("express");
const path = require("path");
const fs = require("fs");
const port = process.env.PORT || 8000;
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const mongodb = require("mongodb");





// connectDB();
// app.use(express.json({extended:false}));
// module.exports = connectDB;

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/data10', { useNewUrlParser: true, useUnifiedTopology: true });

// mongodb+srv://Rajiv_07:<password>@portfolio.gng9i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// mongoose.connect('mongodb+srv://Rajiv_07:<password>@@portfolio.gng9i.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true});  this will work om localhost

// mongoose.connection.on('connected',()=>{
//     console.log('Moongoose is connected!!!!');
// });


// Define mongoose Schema
var contactSchema = new mongoose.Schema({
    name: String,
    contact: String,
    email: String,
    message: String
});


var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact = mongoose.model('Contact', contactSchema);



// Express Specific Stuff
app.use('/static', express.static('static'))    // For serving static files
app.use(express.urlencoded())


// Pug Specific Stuff
app.set('view engine', 'pug')                                  // Set the template engine as pug
app.set('views', path.join(__dirname, 'views'))


//ENDPOINTS
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params);
})

// app.get('/contact', (req, res)=>{
//     const params ={ }
//     res.status(200).render('./contact.pug',params);
// })

app.post('/', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(() => {
        //res.send("The data has been saved to the database");
        res.render('home.pug')
    }).catch(() => {
        res.status(400).send("Error!!, Server connection failed");
    });
    // res.send('Thank you!');
    // res.status(200).render('contact.pug');
})

//  app.use('myData',require('app'));


// if(process.env.NODE_ENV ==='production') {
//     app.use(express.static('build'));
// }

//Start the server
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
})