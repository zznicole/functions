// Create a function that takes an integer number as an argument 
// and returns “Even” for even numbers or “Odd” for odd numbers.
function identifyNumber(number) {
   
    if ( number > 0 && number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

alert(identifyNumber(9));


// Trolls are attacking your comment section! Create a function that takes a string and returns 
// a new string with all vowels removed. For example, “This website is for losers LOL!” returns “Ths wbst s fr lsrs LL!“.
let vowels = {'a':'', 'e':'','i':'','o':'','u':''};
function removeVowel(str1) {
    return str1.replace(/[aeiou]/g, m => vowels[m]);
}

alert(removeVowel('Happy easter to you !'));


// Write a function which repeats the given string exact number of times.
//  For example, repeatString("Hello", 5) returns “HelloHelloHelloHelloHello”.
function repeatStr(str2, count) {
    return str2.repeat(count);
}

alert(repeatStr('Hiya', 5));


// Write a function that accepts three separate digits and makes them a number. 
// For example, 1, 4, and 9 will become 149.
function threeNumber(number1, number2, number3) {
    return number1 * 100 + number2 * 10 + number3;
}

alert(threeNumber(6, 8, 9));


// Write a function that accepts a year and returns whether it is a leap year. 
// A year is a leap year if it is (1) divisible by 4 and not divisible by 100, 
// or else (2) is divisible by 400. It should return a boolean value.
function leapYear(year) {
    if (year % 4 == 0  && year % 100 !== 0 ) {
        return 'It\'s a leap year!';
    } else if  (year % 400 == 0) {
        return false;
    }
}

alert(leapYear(800));


// Write a function that takes two parameters: the year of birth and the year to count years in relation to. 
// Provide output in this format: For dates in the future: “You are NN years old.” For dates in the 
// past: “You will be born in NN years.” If the year of birth equals the year requested 
// return: “You were born this very year!” For example, for 2000 and 1998 you will get “You will be born in 2 years.”
function whenYouBorn(birthYear, year) {
    if (birthYear < year) {
        whenYouBorn = year - birthYear;
        return `You are ${whenYouBorn} years old!`;
    } else if (birthYear > year) {
        whenYouBorn = birthYear - year;
        return `You will be born in ${whenYouBorn} years!`;
    } else  {
        return 'You were born this very year!';
    }
}

alert(whenYouBorn('1980','1960'));


// Write a function that squares every digit in a number and returns a result. For example, 9119 will return 811181, 
// because 9^2 is 81 and 1^2 is 1.
function squareDigit(numberToDigit) {
    let result = '';

    for (let i = 0; i < numberToDigit.length; i++) {
      result = result + numberToDigit[i] * numberToDigit[i];
    }
 
return  result;
}

alert(squareDigit('765'));



