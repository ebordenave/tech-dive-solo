const { ObjectId } = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const dotenv = require("dotenv").config();


const uri = process.env.MONGODB_URI

const getUser = async (req, res) => {
  const patientId = req.params.id;

  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const collection = client.db('collection_name_here').collection('users');

    // find a user by their patient ID
    const user = await collection.findOne({ _id: ObjectId(patientId) });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Patient not found.',
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  } finally {
    client.close();
  }
};

module.exports = {
  getUser,
};
