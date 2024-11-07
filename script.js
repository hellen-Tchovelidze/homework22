let numbers = [2, 4, 5, 19, 33];
numbers.forEach((number, index) => {
  return (numbers[index] = number * number);
});

console.log(numbers);

let fruits = ["ბანანი", "ფორთოხალი", "მანგო", "ვაშლი", "გრეიპფრუტი"];
fruits.forEach((frut, index) => {
  console.log(fruits[index]);
});

let num = [1, 25, 49, 63, 74, 92, 19, 56];
let sum = 0;
num.forEach((number, index) => {
  return (num[index] = sum += number);
});

console.log(num);

let students = ["hellen", "niki", "dato", "vaxo", " gvanca", "nino"];

students.forEach((names, index) => {
  console.log(`${names} არის ${index + 1}-ზე ადგილზე.`);
});

let integers = [2, 3, 10, 55, 97, 108, 931];

integers.forEach((number, index) => {
  if (number % 2 === 0) {
    console.log(integers[index]);
  }
});

let numbersList = [3, 68, 5, 22, 19, 25];

let changenumberlist = numbersList.map((number) => {
  return number * number;
});
console.log(changenumberlist);

let moreNames = ["HOME", "HUMAN", "DEVELOPER"];
let changemoreNames = moreNames.map((index) => {
  return index.toLowerCase();
});

console.log(changemoreNames);

let quantities = [33, 12, 43, 22, 92];
let upperquantities = quantities.map((index) => {
  return index * 10;
});

console.log(upperquantities);

let learners = [
  { name: "nini", score: 85 },
  { name: "niki", score: 92 },
  { name: "mariami", score: 78 },
  { name: "konstantine", score: 88 },
];

let edditedlearners = learners.map((index) => {
    return index.name
})

console.log(edditedlearners);



let measurements = [22, 43, 61, 74, 88, 31]

let changemeasurements = measurements.map((index) => {
    if (index % 2 === 0) {
        return index * 2
    } else {
        return index
    }
})

console.log(changemeasurements);



let values = [ 23, 42, 77, 54, 98]

let changevalues = values.filter((index) => {
    return index % 2 === 0
})

console.log(changevalues);


let NewNames = ["hellen", "chati", "konstantine", "nini", "daviti"]

let filterNewNames = NewNames.filter((strin) => {
    return strin.length > 5
})

console.log(filterNewNames);

let dividends = [-4, -8, 5, 1, -23, 99]

let filterdividends = dividends.filter((index) => {
    return index > 0
})

console.log(filterdividends);



let products = [
    { name: "PS 5", price: 2150 },
    { name: "კიტრი", price: 1.89 },
    { name: "სოდა", price: 2.72 },
    { name: "ლეპტოპი", price: 1329},
   
  ];

  let filterproducts = products.filter((index) => {
    return index.price > 100
  })

  console.log(filterproducts);


  let charges = [3, 56, 92, 46, 26, 64]

  let changecharges = charges.filter((index) => {
    return index > 50
  })

  console.log(changecharges);
  

  let index = 0
while (index < 10) {
    console.log(index );
index++
}

let numberson = [10, 67, 26, 99, 345, 907];  
let sumi = 0;  
let i = 0;  


while (i < numberson.length) {
  sumi += numberson[i];  
  i++;  
}

console.log("რიცხვების ჯამი: " + sumi);  

let posnum = 1

while (posnum <= 20) {
    console.log(posnum);
    posnum+=2
    
}


let num1 = 20

while (num1 >= 10) {
    console.log(num1);
    num1--
}

let movies = [
    { title: "The Dark Knight", genre: "Action" },
    { title: "The Godfather", genre: "Crime" },
    { title: "Forrest Gump", genre: "Drama" }
  ];

  let moviesindex = 0

  while (moviesindex < movies.length) {
    console.log("ფილმი: " + movies[moviesindex].title + ", ჟანრი: " + movies[moviesindex].genre);
    moviesindex++
  }