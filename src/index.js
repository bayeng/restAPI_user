require('dotenv').config();

const port = process.env.PORT || 5000;
const express = require('express');
const app = express();
const userRoutes = require("./routes/users");
const middlewareLogRequest = require('./middleware/logRequest')
const upload = require('./middleware/multer')


app.use(middlewareLogRequest);
app.use(express.json())

app.use('/assets',express.static('public/img'));
app.post('/upload',upload.single('photo'),(req, res) =>{
      res.json({
            message: "success upload"
      });
});

// user
app.use('/users', userRoutes);

// errorHandler
app.use((err, req, res, next)=>{
      res.json({
            Message: err.Message
      })
})


app.listen(port, () =>{
      console.log(`success connect to server at port ${port}`);
});

