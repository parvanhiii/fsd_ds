function fetchdata(){
    return new Promise((resolve,reject)=>{
        let data= students = [
            { name: 'Alice', score: 50 },
            { name: 'Bob', score: 65 },
            { name: 'Charlie', score: 80 },
            { name: 'David', score: 45 },
            { name: 'Joe', score: 75 },
        ];
        setTimeout(() =>{
        resolve(data);
        },3000)
    });
}
fetchdata()
.then((data)=>{
    let sum = data.map((x)=>x.score).reduce((x,y)=> x+y,0);
    // let sum1=data.forEach(element => {
    //     x=x+element.score;
    //     console.log(element.name + " " + element.score);
    // });
    console.log(sum);

}).catch((err)=>{
    console.log(err);
});