const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    subject: {
        type: String,
        require: true,
    },
    review: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        require: true
    },
    isActive: {
        type: Boolean,
        defauit: true
    },
    companyid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'company'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }

})
reviewSchema.set('timetamps',true)
module.exports=model('review',reviewSchema);

