// let arr=[1,23,3,3,3,33,1,12,6,9];
// let newary= arr.map((x) => x*2);
// console.log(newary);

// let even=arr.filter(x=>x%2==0);
// console.log(even);

// let sum = arr.reduce((x,y) => x+y,0);
// console.log(sum);


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let sumOfEvenNumbers = arr
  .filter(num => num % 2 === 0)  
  .reduce((sum, num) => sum + num, 0);  

console.log(sumOfEvenNumbers);