const path = require('path');
const express = require('express');

const usersCtrl = require('./controllers/users');

const app = express();
const port = process.env.PORT || 3000;

app
    .use(express.json())
    //this path happens relative to where the execution of the application 
    //is happening, not relative to this file
    .use(express.static('./docs'))

    .use('/users', usersCtrl)

    // all the way at the end of the pipeline. return instead of not found.
    .get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../docs/index.html') );
    })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})    