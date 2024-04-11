const path= require('path')


const express = require('express');
const bodyparser = require('body-parser');

//body parser is used to parse the input text so that handling could be done

const adminRoutes= require('./Routes/admin');
const shopRoutes= require('./Routes/shop');




const app = express();

app.use(bodyparser.urlencoded({ extended: true }));



app.use('/admin', adminRoutes);
app.use( shopRoutes);

app.use('/contactus', (req, res, next)=>{
    console.log(req.body);
    res.sendFile(path.join(__dirname,'views', 'contact.html'));
});

app.use('/success', (req, res, next)=>{
    console.log(req.body);

    res.sendFile(path.join(__dirname,'views', 'success.html'));
});

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname,'views', '404.html'));
});


app.listen(3000);
