const UserModel = require('../models/users');

const getAllUsers = async (req,res) =>{
      
      try {
            const [data] = await UserModel.getAllUsers();
            res.json({
                  message:"GET all user success",
                  data: data
            });  
      } catch (error) {
            res.status(500).json({
                  message:"Server error",
                  serverMessage: error
            })
      }
      
     
}

const createNewUser = async (req,res) =>{
      
      const {body} = req;

      if(!body.email || body.name || body.address){
            res.status(400).json({
                  message:"semua data harus di isi",
                  data: null
            })
      }
      try {
            await UserModel.createNewUser(body)
            res.status(201).json({
                  message: "POST user success",
                  data: body
            });          
      } catch (error) {
            res.status(500).json({
                  message:"Server error",
                  serverMessage: error
            })
      }

}

const updateUser = async(req, res) =>{
      const {id} = req.params;
      const {body} = req

      try {
            await UserModel.updateUser(body,id)
            res.json({
                  message: "Update user success",
                  data: {
                        id: id,
                        ...body
                  }
            })
            
      } catch (error) {
            res.status(500).json({
                  message:"Server error",
                  serverMessage: error
            })
      }
}

const deleteUser = async(req, res) =>{
      const{id} = req.params;
      
      try {
            await UserModel.deleteUser(id);
            res.json({
                  message: "Delete success",
                  data: null
            })
            
      } catch (error) {
            res.status(500).json({
                  message:"Server error",
                  serverMessage: error
            })
      }
}
 
module.exports = {
      getAllUsers,
      createNewUser,
      updateUser,
      deleteUser
}