function task(message,delay){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(message);
            resolve();
            }, delay);
    });
}

task("First task completed", 1000)
    .then(() => task("Second task is completed",2000))
    .then(() => task("Third task is completed",3000))