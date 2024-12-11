// sayhello=()=>{
//     console.log("I am in hello function");
// };
// console.log("Task Started");
// setTimeout(sayhello,3000);
// //sayhello;
// console.log("Task Ended");

console.log("Start");
setTimeout(() => {
    console.log("First task completed");
    setTimeout(() => {
        console.log("Second task completed");
        setTimeout(() => {
            console.log("Third task completed");
        }, 3000);
    },2000);
},1000);
console.log("End");