const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true,
        default: false
    },
    city: {
        type: String,
        require: true
    },
    founded: {
        type: String,
        require: true
    },
    isActive: {
        type: Boolean,
        degauit: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'users'
    },
    company_logo: {
        type: String,
    }
})
companySchema.set('timetamps', true)

module.exports = mongoose.model('company', companySchema)