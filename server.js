const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
app.use(cors())
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static('website'));


let projectData = [
 
];

   app.get('/',(req, res,next )=>{
    //
    res.json(projectData) 
    
    
next()
   });

   app.post('/',(req, res)=>{
      const temp = req.body.temp
      const date = req.body.date;
      const feelings = req.body.feelings
      projectData.push({date:date, feelings:feelings,temp:temp});
      res.json(projectData)
      
   });
  
// Setup Server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`app runing on port ${port}`);
});
module.exports = app;