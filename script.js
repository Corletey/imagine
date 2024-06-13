// June 6
const myButton = document.getElementById('btn');
myButton.onclick = function () {
    const name = prompt("Enter your full name: ");
    document.getElementById('name').innerText = name;
    document.getElementById('name').style.backgroundColor = 'navy';
};  

// Variables
const pi = 3.142;
let name = 'Abcdefg';
let age = 2090;
let present = true;
console.log(name)

// Objects
const car = {
    numberPlate: 'DX-786-30',
    model: 'BMW',
    color: 'Red',
    weight: 2000,
    weightUnit: 'kg',
    owner: {
        name: 'Abcdefg',
        driver: {
            name: 'Abcefg',
        }
    }
}

console.log(car.numberPlate);
console.log(car.owner.driver.name);
console.log(car);

car.owner.driver.name = 'Akjjk';
console.log(car.owner.driver.name);

//Arrays
const tweet1 = {
  text: "Learning js today",
  likes: 19,
  shares: 49,
  retweets: 1,
};

const tweet2 = {
  text: "Learning arrays today",
  likes: 84,
  shares: 48,
  retweets: 20,
};

const tweets = [];
tweets.push(tweet1);
tweets.push(tweet2);
tweets.length;
tweets;

//Dates
const today = new Date();
today.toString();
today.toLocaleDateString();
today.getHours();

// June 7
// If/Else
if (today.getHours() >= 16) {
  console.log('Class has ended!');
}
else {
  console.log ('Class is in session!');
}

// For Loop
for (let i = 0; i <= 10; i++){
  console.log('Notify friends!', i);
}

//Math in JS

// If/Else
if (today.getHours() >= 16) {
  console.log('Class has ended!');
}
else {
  console.log ('Class is in session!');
}

// For Loop
for (let i = 0; i <= 10; i++){
  console.log('Notify friends!', i);
}

 //Functions
 //Defining functions
function login(username, password) {
  if (username == 'Ab' && password == '1234') {
    return 'User is logged in!';
  }
  else {
    return 'Invalid username or password!';
  }
}

// else, else if
function login(username, password) {
  if (username == 'Ab' && password == '1234') {
    return 'User is logged in!';
  }
  else if (username != 'Ab') {
    return 'Invalid username!'
  }
  else if (password != '1234') {
    return 'Invalid username!'
  }
  else {
    return 'Invalid username or password!';
  }
}

//Invoking functions
login();
login('A9', '1234');

//Basic Arithmetic
12 + 34  //addition
45 - 85  //subtraction
74 * 49  //multiplication
58 / 6  //division
55 % 2  //modulo

// Comparison operators
2 === 2;
3 !== 2;
3 !== 3;

//Built-in Maths functions
Math.round (34 / 24);
Math.floor (37 / 24);
Math.ceil (37 /24);
Math.random ();
Math.max (78, 33, 12, 93, 37);

Math.ceil (Math.random() * 1000000);

// Order of operations
1 * 2 + 3 - 4 / 2 % 2 ** 2;

// Handling user input
13049 + Number('344');
Number('delete');

// June 10
// String concatenation
const firstname = 'Ab';
const lastname = 'Ena';
firstname.trim() + ' ' + lastname.trim(); //.trim removes redundant spaces

// Template Literal
`${firstname.trim()} ${lastname.trim()}`;

// String Methods
firstname.length;
lastname.length;
`${firstname.trim()} ${lastname.trim()}`.length; //each space counts
(firstname.trim() + ' ' + lastname.trim()).length;
firstname.toUpperCase();
lastname.charAt(2); // counts indexes
`${firstname.trim()} ${lastname.trim()}`.charAt(5);
`${firstname.trim().charAt()}${lastname.trim().charAt()}`;

// String conversion
String(2014);

// June 11
//Write a function that will take firstname, lastname and return fullname 
const user = {
  firstname: 'Joe',
  lastname : 'Ganner'
}
function fullname(user) {
	return `${user.firstname} ${user.lastname}`;
}
fullname(user);

// function getFullName(firstName, lastName) {
//   return firstName + ' ' + lastName;
// console.log(fullname(user1));

const profile = {
  firstname: 'Joe',
  lastname : 'Ganner'
}
function fullname(profile) {
  return {
    ...profile,
    fullname: `${profile.firstname} ${profile.lastname}`
  }
}
fullname(profile);

// Array map
const users = [
  {firstname: 'Linda', lastname: 'Mark'},
  {firstname: 'Buch', lastname: 'Peter'},
  {firstname: 'Kayda', lastname: 'Ares'},
  {firstname: 'Elon', lastname: 'Lent'},
]
users.map (fullname);

// Map and return the squares of numbers
function square(number) {
  return number ** 2;
}
const numbers = [0,1,2,3,4,5,6]
numbers.map(square);

// Filter and return even numbers
function even(number) {
  return number % 2 === 0;
}
numbers.filter(even);

// Filter and return odd numbers
function odd(number) {
  return number % 2 === 1;
}
numbers.filter(odd);

// Write a function that  takes a user name and dateOfBirth and return true if their birthday is taday else false
const user = {
  name: 'Genesis Maybach',
  dateOfBirth:'11/04/1887',
};

function birthday(user) {
  const today = new Date();
  const birthDate = new Date(user.dateOfBirth);
   if( today.getMonth() === birthDate.getMonth() && today.getDate() === birthDate.getDate()){
     return true;
   } else{
     return false
   }
}
  
  birthday(user);

  function isBirthdayToday(user) {
    return `Happy Birthday, ${user.name}!`;
  }
  else {
    return `It's not your day, ${user.name}.`;
  }

  //Jun 13
  // bottle class
class Bottle{
  constructor(color,shape,volume){
    this.color = color;
    this.shape = shape;
    this.volume = volume;
  }
  getInfo(){
    return `This is a ${this.color} ${this.shape} bottle with a volume of ${this.volume}ml`
  }
}

const bottle1 = new Bottle('black','circle', 400);
bottle1.getInfo();
const bottle2 = new Bottle('black','round', 800);
bottle2.getInfo();
