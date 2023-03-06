const express = require("express");
const app = express();
const morgan = require("morgan");
const AppError = require('./AppError');

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
  throw new AppError("Password Required!", 401)
  // res.send('Sorry, you need a password')
  // throw new AppError(401, "Password required!")
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

app.get('/error', (req, res) => {
  chicken.fly()
})

app.get("/dogs", (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.send("WOOF WOOF");
});

app.get('/secret', verifyPassword, (req, res) => {
  res.send('MY SECRET IS: I dont like to share secrets on a public github repo')
})

app.get('/admin', (req, res) => {
  throw new AppError("You are not an admin!", 403)
})

app.use((req, res) => {
  res.status(404).send("NOT FOUND");
});

// app.use((err, req, res, next) => {
//   console.log("**********************************")
//   console.log("**************ERROR********************")
//   console.log("**********************************")
//   next(err)
// })

app.use((err, req, res, next) => {
  const { status = 500 } = err;
  const { message = "Something Went Wrong" } = err; 
  res.status(status).send(message)
})

app.listen(3000, () => {
  console.log("App is running on localhost:3000");
});
