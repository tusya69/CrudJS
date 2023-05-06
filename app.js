const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/ShopDB'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const productRouter = require('./routes/products')
const categoryRouter = require('./routes/categories')

app.use('/products', productRouter)
app.use('/categories', categoryRouter)

const PORT = 8000

app.listen(PORT, () => {
    console.log('Server started PORT ' + PORT)
})