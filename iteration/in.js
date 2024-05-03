const { default: axios } = require("axios");

let arr = [10, 12, 9, 15];

// arr.sort((a,b)=>a-b);
// console.log(arr);
// let newarray=arr[0];

// // for (let i=1;i<=arr.length;i++){

//     if(arr[i]>newarray){
//         newarray=arr[i]
//     }

// //}
// for (let i = 1; i <= 10; i++) {
//   let c = i * 2;
//   console.log(`2 X ${i} = ${c}`);
// }

// const data= await axios.get("https://dummyjson.com/products/")
// const res=awa
// fetch(``)
//   .then(response => response.json())
//   .then(data => console.log(data.products.map(product => product.id)))
//   .catch(error => console.error('Error fetching data:', error))

async function call() {
  const data = await fetch(`https://dummyjson.com/products/`);
  const res = await data.json();
  let arr = res.products;
  let id = arr.map((val) => val.id);
  console.log(typeof id);
  //console.log(id);
}
async function call2() {
  const data = await fetch(`https://dummyjson.com/products/`);
  const res = await data.json();
  const new2 = [];
  new2.push(res.products);
  console.log(new2);
  const newresult = new2.filter((vr) => {
    return vr.price == 30;
  });
  // console.log(newresult);
  const arraynew = [...res.products];
  // console.log(typeof arraynew);

  const result = arraynew.filter((val) => val.price == 30);

  //console.log( result);

  arraynew.forEach((element) => {
    //console.log(element.id);
  });
}
//call();
call2();
