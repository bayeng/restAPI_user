const middLogRequest = (req, res, next) =>{
      console.log("terjadi di PATH", req.path);
      next();
}

module.exports = middLogRequest