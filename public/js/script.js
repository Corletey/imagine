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