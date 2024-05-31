const dataModels = require('../models/dataModels');
const bodyParser = require("body-parser");





// Add data
const postData = async (req, res) => {
    try {
      const data = await dataModels.create(req.body);
      data;
      res.status(201).json(req.body.data);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
    }
}

//Get data 
const findData = async (req, res) => {
  try {
    const data = await dataModels.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({message: error.message})
  }

}

//Update data by id
const updateDataById = async (req, res) => {
  try{
    const {id} = req.params;
    const data = await dataModels.findById(id);
    //We can find any data
    if (!data) {
      return res.status(404).json({message: `cannot find any data with ID ${id}`})
    };
    const {firstname, lastname, email, idnumber} = req.body;

    const dataUpdate = await dataModels.findByIdAndUpdate(id, req.body);
    
    res.status(200).json(dataUpdate);
   
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
   }
}

// Delete data by id
const deleteDataById = async (req, res) => {
  try {
    const {id} = req.params;
    data = await dataModels.findByIdAndDelete(id);
    res.status(200).json('This name: ' + data.firstname + " " +  data.lastname + " had removed from the databases");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
}
module.exports = {postData, findData, updateDataById, deleteDataById}    