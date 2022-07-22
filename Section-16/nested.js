const password = prompt("please enter a new password")


if (password.length >= 6) {
  if (password.indexOf(' ') === -1) {
    console.log("Valid password!")
  }
  else {
    console.log('Password cannot have a space')
  }
}
else {
  console.log("PASSWORD TOO SHORT! Must be 6+ characters.")
}

// password must be 6+ characters
// Password cannot include space

