const sentence = "i am not awesome";
let dur = 0;

for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, dur);
  dur += 50;
}

setTimeout(() => {
  // print the char here
  process.stdout.write("\n");
}, dur);
