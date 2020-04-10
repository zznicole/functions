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