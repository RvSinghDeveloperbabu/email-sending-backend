const express  = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send({id: "HI, I'm working!!!",title: "hello"})
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);