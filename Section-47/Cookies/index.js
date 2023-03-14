const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
  const { name = 'Austin' } = req.cookies;
  console.log(req.cookies)
  res.send(`Hello There ${name}`)
})

app.get('/setname', (req, res) => {
  res.cookie('name', 'Luna');
  res.cookie('animal', 'shcrimp')
  res.send("OK, Sent you a cookie")
})

app.get('/getsignedcookie', (req, res) => {
  res.cookie('fruit', 'grape', { signed: true })
  res.send('got a new cookie')
})

app.get('/verifyfruit', (req, res) => {
  console.log(req.cookies)
  res.send(req.signedCookies)
})

app.listen(3000, () => {
  console.log("Listening on localhost:3000")
})