const fs = require('fs-extra')
const file = "temp/";



fs.stat(file, function (err) {
    if (err) {
        // Si le fichier n'existe pas, crée le
        console.log('Folder doesn\'t exist, so I made the folder ');
        return fs.mkdir(file);
    }
    //Si le fichier existe déjà
    console.log('Does exist');
});

fs.watchFile('temp/pubs.json', (curr, prev) => {
    console.log(`the current time is: ${curr.mtime}`);
    console.log(`the previous time was: ${prev.mtime}`);
});

