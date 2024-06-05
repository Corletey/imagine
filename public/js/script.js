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