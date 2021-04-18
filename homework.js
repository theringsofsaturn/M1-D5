/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

let test = "string"; // const test = "string"


/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

let sum = 10 + 20;

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

// The JavaScript Math.random() method returns a random number between 0 (inclusive) and 1 (exclusive). 
// The Math.random() function returns a floating point pseudo-random number, which means it will include a decimal. 
// The syntax for the Math.random() method is as follows:
Math.random();
// This returns a random number between 0 and 1
console.log(Math.random()); // This returns a random number between 0 and 1
// Math.random() returns a float number. 
// We can use the Math.floor() function to round our random number up to become a random integer, 
// and we can multiply that number to generate a larger one. 

let random = Math.floor(Math.random() * 20);

console.log(`Here it is a random number between 0 and 20: ${random}`);

// In the above example, we used “* 20” to generate a larger number. That function helps us retrieve a number between 1 and 20

// Extra: This is a fuction to generate a random course from an array list of courses. 
// We use 0.5 - Math.random to return a rando value between index [0, 5*
let randomCourse = ["Strive","Coursera","EdX","Udemy","Udacity"].sort(function() {
    return 0.5 - Math.random();
 })[0];
 
 console.log(`Here it is a random course: ${randomCourse}`);

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me = {
    name: "Emilian",
    surname: "Kasemi",
    age: 35
}

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

delete me.age;

console.log(me);

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

me.skills = ["HTML", "CSS", "JavaSCript", "C#", "Python"];

console.log(me);

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/

me.skills.pop()

console.log(me);

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

function dice() {
  return Math.floor((Math.random() * 6) + 1)

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

function whoIsBigger(n1, n2) {
  if (n1 > n2)
      return n1
  else 
      return n2
  
  // return n1 > n2 ? n1 : n2
}

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

const splitMe  = function(stringsToSplit, separator) {
    const arrayOfStrings = stringsToSplit.split(separator) // The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. Separated by commas or a specified separator string.
  
    console.log('The original string is: ', stringsToSplit)
    console.log('The array has ', arrayOfStrings.length, ' elements: ', arrayOfStrings.join(' / ')) // The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.

    // The example above defines a function that splits a string into an array of strings using separator. After splitting the string, the function logs messages indicating the original string (before the split), the separator used, the number of elements in the array, and the individual array elements.
  }
   // declaring a varibale quote to put it in stringToSplit value. This is is easy and clean code instead of puting a long text as a value in splitMe()
  const quote = "We shall not cease from exploration And the end of all our exploring Will be to arrive where we started And know the place for the first time"
  
  // specifying the separator (I use another separator in the second console.log print with the prototype.join() method)
  const separator = ' '
  
  splitMe(quote, separator)


/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
let boolValue = 2 < 1

const deleteOne = function(string, boolean){
    // if bool is true return string without the first letter
    if (boolValue === true) {        
        string = string.substring(1);
        
        return string
    }else {
        // remove the last letter from string
        string = string.substring(0, string.length - 1);
        
        return string
    }
}

 console.log(deleteOne("strive", boolValue));

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

const onlyLetters =  function(string){
    // remove all the digits
    let removeNonStrings = string.replace(/[0-9]/g, ''); // using prototype.string.replace
    return removeNonStrings
}

console.log(onlyLetters("Strive is number 1!"));

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/

let email = "emiliankasemi@gmail.com";

const isThisAnEmail = function(string){
    
    // if email adress is valid, return true
    if (string === email){
        
        console.log("The email is valid")

    }else if (string !== email) {
        
        console.log("The email is not valid")
    }
}

console.log(isThisAnEmail("emiliankasemi@gmail.com"))

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

const whatDayIsIt = function(date){
    //Array with the days of the week -->> 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday
    let weekdays = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    // The getDay() method returns the day of the week for the specified date according to local time
    let day = date.getDay();
    //Return the index element
    return weekdays[day];
}


let date = new Date();
let weekDay = whatDayIsIt(date);

console.log('The current day of the week is ' + weekDay);


/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

const rollTheDices = function (number) {
  let values = []; 
  for (let i = 0; i < number; i++) {
    
    values.push(dice(1, 6)); 
  }
  return values; 
};
let amountOfTimes = 3; 
let tot = rollTheDices(amountOfTimes); 

let _sum = tot.reduce(function (x, y) {
  
  return x + y;
});

console.log(tot);
/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/

function howManyDays(date) {
    let present = new Date(date.getTime());
    let past = new Date(date.getFullYear(), 0, 1);
  
    return Math.ceil((present - past + 1) / 86400000);
  }
  
  console.log(howManyDays(new Date(2021, 04, 16)) + " have passed since the beginning of the year ");

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/

let birthday;

const isTodayMyBirthday = function(){

    month = date.getMonth()
    date = date.getDate()
   
   
    for (let i=0; i < birthday.length ;i++){
   
    if(birthday[i].day == date && birthday[i].month == month) {
   
    return true
    
    } else return false;
   
    }

}

console.log(isTodayMyBirthday())

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

/* This movies array is used throughout the exercises. Please don't change it :)  */
const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ]