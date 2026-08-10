const url=require("url");
const address="https://chatgpt.com/c/6a79a23e-072c-83e9-b997-6182a0a55590";
const parsed=url.parse(address,true);
console.log(parsed.host);
console.log(parsed.pathname);
console.log(parsed.search);
console.log(parsed.query.id);
