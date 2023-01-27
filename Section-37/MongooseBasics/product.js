const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp').then(() => {
  console.log("CONNECTION OPEN!!!")
})
.catch(err => {
  console.log("OH NO ERROR")
  console.log(err)
})

const productSchema = new mongoose.Schema({
  name: {
    type:String,
    required: true 
  },
  price: {
    type: Number,
  },
  isOnSale: {
    type: Boolean
  }
})

const Product = mongoose.model('Product', productSchema)

const bike = new Product({ price: 599 })

bike.save()
.then(data => {
  console.log("it worked")
  console.log(data)
})
.catch(err => {
  console.log("oh no, error!")
  console.log(err)
})