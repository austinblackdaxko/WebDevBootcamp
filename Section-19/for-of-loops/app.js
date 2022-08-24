const subreddits = ['cringe', 'books', 'chicken', 'funny', 'pics', 'soccer', 'superbowl', 'trees', 'okbuddyvowsh'];

for (let i = 0; i < subreddits.length; i++) {
  console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

for (let sub of subreddits) {
  console.log(sub)
}