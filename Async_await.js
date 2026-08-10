function getData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Node.js");
        },2000)
    })
}
async  function display(){
    const result=await getData();
    console.log(result);
}
display();