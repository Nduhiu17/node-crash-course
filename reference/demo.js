const path = require('path');

//base file
console.log(path.basename(__filename));

//directory name
console.log(path.dirname(__filename));

//file extention
console.log(path.extname(__filename));


//create path object
console.log(path.parse(__filename).name);


//concatinate paths
console.log(path.join(__dirname,'test','hello.html'));
