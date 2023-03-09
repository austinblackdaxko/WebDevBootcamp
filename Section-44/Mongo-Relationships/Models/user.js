const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/relationshipDemo')
  .then(() => {
    console.log("MONGO CONNECTION OPEN!")
  })
  .catch(err => {
    console.log("OH NO, MONGO CONNECTION ERROR!!")
    console.log(err)
  })

const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  addresses: [
    {
      _id : {_id : false},
      street: String,
      city: String,
      state: String,
      country: String
    }
  ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
  const u = new User({
    first: 'Harry',
    last: 'Pooper'
  })
  u.addresses.push({
    street: "123 Sesame Street",
    city: "New York",
    state: "New York",
    country: "USA"
  })
  const res = await u.save()
  console.log(res)
}

const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push(
    {
      street: '124 Sesame Avenue',
      city: "New York",
      state: "NY",
      country: "Canada"
    }
  )
  const res = await user.save()
  console.log(res);
}


addAddress('6408bee430999804bf71b72c')