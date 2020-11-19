
const fs = require('fs');
const Path = require('Path');

const deleteFolderRecursive = function(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach((file, index) => {
            const curPath = Path.join(path, file);
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

const resetOutput = (path) =>{
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function(file, index){
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
    fs.mkdirSync(path);
};

const outputJsonFile = ( path, filename, data, reset) => {
    if( reset ) resetOutput(path);
    if( data ) data = JSON.parse(JSON.stringify(data));
    fs.writeFile(`${path}/${filename}.json`, JSON.stringify(data), function (err) {
        if (err) return console.log(err);
        console.log('saved-> ',filename);
    });
};

module.exports = outputJsonFile;
