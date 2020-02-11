const url = require('url');

const myUrl = new URL("http://mywebsite.com:8080/hello.html?id=100&status=active");

//get serialiezed url
console.log(myUrl.href);

console.log(myUrl.toString());

//root domain
console.log(myUrl.host);

//does not get port
console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);

//serialized query
console.log(myUrl.search);

//param objects
console.log(myUrl.searchParams);

//add params
myUrl.searchParams.append('abc',123);
console.log(myUrl.searchParams);

//loop through params
myUrl.searchParams.forEach((value,name) => console.log(`${name}:${value}`))
