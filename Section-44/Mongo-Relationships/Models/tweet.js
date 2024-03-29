const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose
  .connect("mongodb://localhost:27017/relationshipDemo")
  .then(() => {
    console.log("MONGO CONNECTION OPEN!");
  })
  .catch((err) => {
    console.log("OH NO, MONGO CONNECTION ERROR!!");
    console.log(err);
  });


const userSchema = new Schema({
  username: String,
  age: Number
})

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
})


const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async () => {
//   const user = await User.findOne({username: 'Chickenfan99'})
//   const tweet2 = new Tweet({
//     text: 'bock bock choy',
//     likes: 2334
//   })
//   tweet2.user = user;
//   // await user.save();
//   await tweet2.save();
// }

// makeTweets();

const findTweet = async () => {
  const t = await Tweet.find({}).populate('user', 'username')
  console.log(t);
}

findTweet()

const farmSchema = new Schema({
  name: String,
  city: String,
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }], // ref tells mongoose which model to use during population
});

