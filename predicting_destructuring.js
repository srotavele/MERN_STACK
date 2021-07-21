const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
// Maybe it will output the first two cars. Or return undefined. Not sure because I don't understand where 'randomCar' and 'otherRandomCar' came from.//
console.log(randomCar)
console.log(otherRandomCar)

//---------------------------------//

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
// It will output 'Elon' and 'undefined' I think. My guess is the second const is merely adding the key value pair of name:othername to the employee object.
console.log(name);
console.log(otherName);

//---------------------------------//

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output This seems a bit like the last one. Will output '12345' and 'undefined' is my guess.
console.log(password);
console.log(hashedPassword);

//---------------------------------//

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//No educated guess. I don't understand at all what I'm looking at here. Even after re-reading the section. I'm unclear if the number of commas matters and what the relationship is to the array. A shot in the dark is that they are both return False.
console.log(first == second);
console.log(first == third);

//---------------------------------//

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//I'm not gonna lie. After 30 min I had to run this to even begin to grasp what might happen. Not comfy with these concepts yet.
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);



