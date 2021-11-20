const fs = require('fs');
const idl = require('./target/idl/hello_anchor_app.json');

// fs.writeFileSync('./app/src/idl.json', JSON.stringify(idl));
fs.writeFileSync('./app/src/idl.json', JSON.stringify(idl, null, 2));