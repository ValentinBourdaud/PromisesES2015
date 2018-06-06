const fs = require('fs-extra')
const file = "/temp/";

fs.emptyDir(file).then(() => {

    console.log('Succès !'); 
  })
  .catch(err => {
 
    console.error(err)
 
  }).then(fs.copyFile('mocks/pubs.json','temp/pubs.json')).then
  
  (fs.watchFile('temp/pubs.json', (curr, prev) => {

    console.log(`the current mtime is: ${curr.mtime}`);

    console.log(`the previous mtime was: ${prev.mtime}`);

    fs.readFile('temp/pubs.json', "utf8", function (err, data) {

        console.log(data);

    });

}))

