const express = require('express')
const app = express()

app.get('/',function(req,res){
res.json({
    'status':'sukces'
})
})

app.listen(process.env.PORT||3000,function(){
    console.log('listening')
})