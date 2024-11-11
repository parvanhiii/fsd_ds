async function orderfood(name,time){
    return new Promise((resolve,reject)=>{
        if(name="burger")reject("burger not available");
        setTimeout(()=>{
            console.log("order"+ name +"prepared")
        },time);
    });
    }
    
    async function restraunt(){
        console.log("order placed");
        const pizza= await orderfood("pizza",1000);
        console.log(pizza);
        try{
        const burger= await orderfood("burger",1000);
        console.log(burger);
        }
        catch(error){
            console.log(error)
        }
        const pasta= await orderfood("pasta",1000);
        console.log(pasta);
     
    
    }