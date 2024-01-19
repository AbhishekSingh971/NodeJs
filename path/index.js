const path = require('path');

// for getting directory path
const current_path = path.dirname(__dirname)
console.log(current_path);
//for getting extension
console.log(path.extname(`${current_path}/path/index.js`));
//for getting filename
console.log(path.basename(`${current_path}/path/index.js`));
const {root,dir,base,ext,name} = path.parse(`${current_path}/path/index.js`);

console.log(root,dir,base,name,ext);
