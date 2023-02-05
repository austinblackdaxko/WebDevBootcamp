const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));

app.use((req, res, next) => {
  // console.log(req.method.toUpperCase(), req.path);
  req.requestTime = Date.now();
  next();
});

app.use("/dogs", (req, res, next) => {
  console.log("I LOVE DOGS");
  next();
});

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if(password === 'chickennugget') {
    return next();
  }
  res.send('Sorry, you need a password')
};

// app.use((req, res, next) => {
//   console.log("This is my first middleware")
//   next();
// })
// app.use((req, res, next) => {
//   console.log("this is my second middleware")
//   next();
// })

app.get("/", (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.send("HOME PAGE");
});

app.get("/dogs", (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.send("WOOF WOOF");
});

app.get('/secret', verifyPassword, (req, res) => {
  res.send('MY SECRET IS: I dont like to share secrets on a public github repo')
})

app.use((req, res) => {
  res.status(404).send("NOT FOUND");
});

app.listen(3000, () => {
  console.log("App is running on localhost:3000");
});
