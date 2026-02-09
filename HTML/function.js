function add(a,b)
{
    let c=a+b;
    return c;
    console.log(c);
}
let p=add(3,3);
console.log(p)

// arrow function
const arrowAdd=(a,b) => {
    console.log(a+b);
};
arrowAdd(2,2)

const fullname=(fname,lname)=>
{
    console.log(`My Name is ${fname} Singh ${lname}`);
};
fullname("Mahendra","Dhoni")