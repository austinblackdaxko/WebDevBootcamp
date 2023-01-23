const express = require("express");
const app = express();
const path = require('path')
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

let comments = [
  {
    id: uuid(),
    username: 'Todd',
    comment : 'lol that is so funnny!'
  },
  {
    id: uuid(),
    username: 'rlyoung',
    comment: 'please take out the trash!'
  },
  {
    id: uuid(),
    username: 'stacymom420',
    comment: 'ready 4 a night out with the gurlz'
  },
  {
    id: uuid(),
    username: "treybby",
    comment: 'Have yall seen the hit new anime?'
  }
]

app.get('/comments', (req, res) => {
  res.render('comments/index', {comments})
})

app.get('/comments/new', (req, res) => {
  res.render('comments/new' )
})

app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({  username, comment, id: uuid() })
  res.redirect("/comments")
})

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  res.render('comments/show', { comment })
})

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  res.render('comments/edit', { comment })

})

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find(c => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect('/comments')
})

app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  comments = comments.filter(c => c.id !== id);
  res.redirect('/comments')
})

app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`Okay, ${qty} ${meat} tacos coming right up!`);
});

app.listen(3000, () => {
  console.log("ON PORT 3000!");
});

