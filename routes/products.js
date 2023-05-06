const express = require('express')
const router = express.Router()
const Product = require('../models/product')


router.get('/', async(req,res) => {
    try{
           const products = await Product.find()
           res.json(products)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const product = await Product.findById(req.params.id)
           res.json(product)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const product = new Product({
        product_name: req.body.product_name,
        price: req.body.price,
        color: req.body.color,
        productId: req.body.productId
    })

    try{
        const a1 =  await product.save() 
        res.json(a1)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const product = await Product.findById(req.params.id) 
        product.product_name = req.body.product_name
        product.price = req.body.price
        product.color = req.body.color
        product.productId = req.body.productId

        const a1 = await product.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id', async (req, res) => {
    try {
      const deletedBook = await Genre.findByIdAndDelete(req.params.id)
      res.json(deletedBook)
    } catch (err) {
      res.send('Error ' + err)
    }
})

module.exports = router