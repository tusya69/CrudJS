const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({

    product_name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    productId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category' 
      }

})

module.exports = mongoose.model('Product', productSchema)