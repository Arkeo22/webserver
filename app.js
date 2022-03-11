require('dotenv').config();
import express, { static } from 'express';
const app = express()
const port = process.env.PORT;

app.use ( static('public'));

app.get('/saludo', function (req,res){
    res.send('Hola mundo')
})
app.get('*', function (req,res){
    res.sendFile(__dirname+'/public/404.html');
})
app.listen(port,
    function()
    {console.log(`Escuchando por el puerto ${port}`)
    })