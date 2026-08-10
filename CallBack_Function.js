function greet(name,callback){
    console.log("Hello "+name);
    callback();
}
greet("Honey",function(){
    console.log("Callback Function is executed!");
})