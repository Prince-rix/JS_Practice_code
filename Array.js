let b = [1,2,1,2,22,3,123]
let temp;
let Arr= [];
b.sort();

// b.map((e)=>{
//   if(temp !=e){
//     Arr.push(e)
//     temp=b
//   }
// })

for( let i=0;i<b.length;i++){
  if(temp!=b[i]){
    Arr.push(b[i])
    temp=b[i]
  }
}

console.log(Arr)

