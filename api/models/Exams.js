const mongoose = require('mongoose')

const Schema = mongoose.Schema

const examSchema = new Schema({
    title: {
        type: String
    }
})