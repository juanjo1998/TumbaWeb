//MODULES

//Modulo Express
const express = require('express');

//Modulo path
const path = require('path');

//app es el servidor
const app = express();

//Setting
app.set('port',4000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs'); //Motor de plantillas

//Middlewars


//Routes
app.use(require('./routes/index'));

//Static Files
app.use(express.static(path.join(__dirname,'public')));
//Server Listening
app.listen(app.get('port'),() =>{
    console.log("Server On Port",app.get('port'));
});
