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
    required: true,
    maxlength:  20
  },
  price: {
    type: Number,
    min: [0, 'Price must be positive you dingus']
  },
  isOnSale: {
    type: Boolean,
    default: false
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0
    },
    inStore: {
      type: Number,
      default: 0
    }
  },
  size: {
    type: String,
    enum: ['S', 'M', 'L']
  }
})

productSchema.methods.greet = function() {
  console.log("HELLLO HI HOWDY!")
  console.log(`- from ${this.name}`)
}

productSchema.methods.toggleOnSale = function () {
  this.isOnSale = !this.isOnSale;
  this.save();
}

productSchema.methods.addCategory = function(newCat) {
  this.categories.push(newCat);
  return this.save();
}

productSchema.statics.fireSale = function() {
  return this.updateMany({}, {isOneSale: true, price: 0})
}

const Product = mongoose.model('Product', productSchema)

const findProduct = async () => {
  const foundProduct = await Product.findOne({name: "Mountain Bike"});
  await foundProduct.addCategory('Outdoors')
  console.log(foundProduct)
}

Product.fireSale().then(res => console.log(res))

const bike = new Product({ name: 'Biking Shirt', price: 19.50, isOnSale: true, categories: ['Cycling'], qty : {online: 5}, size : 'J' } )

// bike.save()
// .then(data => {
//   console.log("it worked")
//   console.log(data)
// })
// .catch(err => {
//   console.log("oh no, error!")
//   console.log(err)
// })

// bike.greet()

// Product.findOneAndUpdate({name: 'Tire Pump'}, {price: -10.99}, { new : true, runValidators: true})
// .then(data => {
//   console.log("it worked")
//   console.log(data)
// })
// .catch(err => {
//   console.log("oh no, error!")
//   console.log(err)
// })
