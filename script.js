// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];
//months[0] = 'None'

//console.log(months);
/*
for (let i = 0; i < months.length; i++) {
    console.log(months[i]);
}
*/

// const names = ['Jon', 'Bob', 'David', 'Mark'];

// Array Push - Add a new element

/* names.push('Dean');
console.log(names);  */
 
// Array pop - Removed the last element
/*
const removedValue = names.pop();
console.log(removedValue);  

names.pop();
console.log(names);  */


// Array Shift - Deletes the first element of an array \

//names.shift()


// Array Unshift - Add a new value at the start of an array 

//names.unshift('Dean');


// Array Splice 
/* names.splice(2, 0, 'Jenny', 'Johnny');
console.log(names); */


//Array Slice

/*
const dontLikeJohn = [names.slice(1, 3)];

console.log(dontLikeJohn);  */

// Array Map: Similar to Array forEach  
// Difference: Array Map stores and return values while the forEach method doesn't

/* const inventory = [
{price: 5, name:'eggs'},
{price: 4, name: 'ham'},
{price: 3, name: 'mayo'},
{price: 5, name: 'bread'},
]; */
/*
const prices = inventory.map((items) => items.price);
const name = inventory.map((items) => items.name);
console.log(prices);
console.log(name); */

//Array filter
const numbers = [ -10, 0, -2, 15, -36, 25 ];

const positiveNumbers = numbers.filter((number) => {
    return number >= 0;
});
console.log(positiveNumbers);


