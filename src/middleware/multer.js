const { time } = require( 'console' );
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
      destination: (req, file, cb) =>{
            cb(null,'public/img');
      },
      filename: (req, file, cb) =>{
            const originalName = file.originalname;
            const timeStamp = new Date().getTime();
            

            cb(null,`${timeStamp}-${originalName}`);
      } 
});

const upload = multer({
      storage: storage,
      limits: {
            fileSize: 3 * 1000 * 1000 // 3MB

      }
});

module.exports = upload;