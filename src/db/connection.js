const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Deutsche', {
}).then(()=>{
    console.log('connection sucessful');
}).catch((e)=>{
    console.log(e);
    console.log('No connection');
})