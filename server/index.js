const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const { LoginRequired } = require('./controllers/security');
const usersCtrl = require('./controllers/users');
const postsctrl = require('./controllers/posts');
const usersModel = require('./models/users');

const app = express();
const port = process.env.PORT;

app
    .use(express.json())
    //this path happens relative to where the execution of the application 
    //is happening, not relative to this file
    .use(express.static('./docs'))

    .use((req, res, next)=> {

        const token = req.headers.authorization?.split(' ')[1];
        req.user = token && usersModel.FromJWT(token);
        next();
    })

    //mounting our controllers
    .use('/users', usersCtrl)
    .use('/posts', LoginRequired, postsctrl)

    // all the way at the end of the pipeline. return instead of not found.
    .get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../docs/index.html') );
    })

    .use((error, req, res, next)=>{
      console.error(error); 

      res.status(error.code || 500);
      res.send({ msg: error.msg });
    })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})    