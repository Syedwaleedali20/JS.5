// var userInput = prompt("Enter wher do you live");

// var firstChar = userInput.slice(0, 1).toUpperCase();
// var remainChar = userInput.slice(1).toLowerCase();
// var completedWord = firstChar + remainChar;

// console.log(completedWord);

// var cityArr = ["Karachi", "Lahore", "Islambad", "Multan"];
// for (var i = 0; i < cityArr.length; i++){
//     if (completedWord === cityArr[i]) {
//         console.log("match")
//     }
// }

// ****
// var str = "muhammad ";
// str += "faraz";
// console.log(str)

// ****
// var text = prompt("Enter Some Text");
// for (var i = 0; i, text.length; i++) {
//     if (text.slice(i, i + 2) === " ") {
//         alert("Double spaces acquired...");
//     }
// }


// ***
// TASK

// var str = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be the Second World War So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers"

// for (var i = 0; i < str.length;i++) {
//     if (str.slice(i, i + 12) === "World War II") {
//         str = str.slice(0, i) + "the Second World War" + str.slice(i + 12);
//     }
// }
// console.log(str);

// ***

// var str = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be the Second World War So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers"

// var indexNumber = str.indexOf("World War II");

// var firstText = str.slice(0, indexNumber);
// var replaceWord = "The Third World War";
// var remainText = str.slice(indexNumber + 12);
// console.log(firstText + replaceWord + remainText);

// **

// var str = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be the Second World War So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers"
// console.log(str.replaceAll("New Yorker", "US"));

// ***

// var str = "Hello World";
// console.log(str.charAt(8));

// ****
// var number1 = Number(prompt("Enter first value"));

// var number2 = Number(prompt("Enter Second value"));

// var add = number1 + number2;

// console.log(add.toString());
// console.log(typeof add.toString());

// ***
// var randomNumber = Math.random() * 10;
// console.log(randomNumber.toFixed(3));

// ***
// var num = 2.3
// console.log(Math.ceil(num));

// ***
// var num = 2.8
// console.log(Math.floor(num));

// // ***
// var num =2.9
// console.log(Math.round(num));


//Chapter 21(CHANGING case)
// Q1
// var allLower = userInput.toLowerCase();

//Q2
// y = y.toUpperCase();

//Q3
// y = y.toUpperCase();

//Q4
// var originalString = "Hello World";
// var lowerCaseString = originalString.toLowerCase();

//Q5
// var myArray = ["Hello", "WORLD"];
// var newVariable = myArray[1].toLowerCase();
// console.log(myArray + newVariable);

//Q6
// var myString = "hello world";
// var upperCaseString = myString.toUpperCase();
// alert(upperCaseString);

//Q7
// var cityName = "kaRacHi";
// var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

//Chapter 22 - 25 (Strings)
//Q1
// var sameWords = "captain";
// var slicedString = sameWords.slice(1, 3);

// //Q2
// var sameWords = "captain";
// var numberOfCharacters = sameWords.length;

//Q3
// var animal = "elephant";
// var seg = animal.slice(1, 5);
// console.log(animal + seg);

// //Q4
// var myString = "Hello, World!";
// var numberOfCharacters = myString.length;

//Q5