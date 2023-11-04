let a = {
    Name:"Prince",
    Roll:51,
    Phone:12839
};

// console.log(a.Name)
a['Name'] = 'Rix';
console.log(a)

for (let i in a){
    console.log(i)
}
