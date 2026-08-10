const promise= new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("Success");
    }
    else{
        reject("Failure");
    }
})
promise
.then(result=>console.log(result))
.catch(err=>console.log(err));