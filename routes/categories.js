const express = require('express')
const router = express.Router()
const Category = require('../models/category')


router.get('/', async(req,res) => {
    try{
        const categories = await Category.find();
        res.json(categories);
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const category = await Category.findById(req.params.id)
           res.json(category)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const category = new Category({
        categoryName: req.body.categoryName
    })

    try{
        const a1 =  await category.save() 
        res.json(a1)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const category = await Category.findById(req.params.id) 
        category.categoryName = req.body.categoryName
        const a1 = await category.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id', async (req, res) => {
    try {
      const deletedCategory = await Category.findByIdAndDelete(req.params.id)
      res.json(deletedCategory)
    } catch (err) {
      res.send('Error ' + err)
    }
})

module.exports = router