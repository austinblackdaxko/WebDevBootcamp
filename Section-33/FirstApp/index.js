const express = require("express");
const app = express();

console.dir(app);

// app.use((req, res) => {
//   console.log("We got a new request!");
//   // res.send("HELLO, we got your request! This is a response")
//   res.send("<h1>I am merely a BANANA</h1>");
// });

// /cats => "Meow"
// /dogs => "Woof"
// "/" => "Welcome Home"

app.get('/', (req, res) => {
  res.send("This is the homepage")
})

app.get('/cats', (req, res) => {
  res.send("MEOW")
})

app.get('/dogs', (req, res) => {
  res.send("WOOF!!!")
})

app.post('/cats', (req, res) => {
  res.send("POST REQUEST TO CATS THIS IS DIFFFERNT THAN A GET REQUEST")
})

app.get('/r/:subreddit', (req, res) => {
  console.log(req.params)
  const { subreddit } = req.params
  res.send(`<h1>Browsing the ${subreddit} subreddit!</h1>`)
})

app.get('/r/:subreddit/:postID', (req, res) => {
  console.log(req.params)
  const { subreddit, postID } = req.params
  res.send(`<h2>viewing post ${postID} on the ${subreddit} subreddit!</h2>`)
})

app.get('/search', (req, res) => {
  const { q } = req.query;
  if(!q) {
    res.send("NOTHING FOUND IF NOTHING SEARCHED")
  }
  res.send(`<h2>Search results for ${q}:</h2>`);
})

app.get('*', (req, res) => {
  res.send("Idk that path. try another one")
})

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
