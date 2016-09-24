var fs = require('fs');
var dirname = 'D:/Med'

fs.watch(dirname, (eventType, filename) => {
  if (filename)
    console.log(filename);
    // Prints: <Buffer ...>
});