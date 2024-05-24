const dataModels = require('../models/dataModels');
const bodyParser = require("body-parser");





// Add data
const postData = async (req, res) => {
    try {
      const data = await dataModels.create(req.body)
      data;
      res.status(201).json(data);
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


module.exports = {postData, findData}    