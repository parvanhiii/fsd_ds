async function orderfood(name,time){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("order"+ name +"prepared")
    },time);
});
}

async function restraunt(){
    console.log("order placed");
    const pizza= await orderfood("pizza",1000);
    console.log(pizza);
    const burger= await orderfood("burger",1000);
    console.log(burger);
    const pasta= await orderfood("pasta",1000);
    console.log(pasta);
 

}

restraunt();