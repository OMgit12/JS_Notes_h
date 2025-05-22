// String Create

const str = new String('hello world'); // String object
const str2 = "happy"; // double quotes
const str3 = 'harry'; // single quotes
const str4 = `hello ${str3}`; // template literal


const all = "hello world";

// length of string
console.log(all.length); // 11 

// Accessing string value
// console.log(all[7]); // this will return the 7th index of the string value is "o"
// console.log(all.charAt(10)); // they both are same  

// looping in string
for (let i = 0; i < all.length; i++) { // in this - 1 because string index start with (0 to n-1) but length is (1 to n) 
    console.log(all[i]);
}

// modifiy string 
all[3] = "a" // this will not change string because in js strings are immutable we need to use the replace method to change and mutate the string  
// console.log(all);
// replace method in js string to replace the string value with new value in which first parameter is the value to be replaced and second parameter is the new value
// console.log(all.replace("world", "harry")); // this will return the new string with the value replaced original string will not be changed
// console.log(all.replaceAll("o", "a")); // this will return the new string with the value replaced all the occurences of the value will be replaced with the new value original string will not be changed
// console.log(all); // this will return the original string

const newstr = all.concat(` how are you all`)
console.log(newstr); // this will return the new string with the value concatenated with the original string

const newstr2 = "      hello harry    "
newstr2.trim() // this will return the new string with the value trimmed from both sides of the string

// searching in string
newstr.indexOf("o"); // this will return the index of the first occurence of the value in the string
newstr.lastIndexOf("h"); // this will return the index of the last occurence of the value in the string, in this case it will return 6
newstr.startsWith("h"); // this will return true, if the string starts with the value. in this case it will return true
newstr.endsWith("o"); // this will return true, if the string ends with the value. in this case it will return false


// extracting string
// slice method in js string to extract the string value from the string, first parameter is the starting index and second parameter is the ending index
all.slice(0, 5); // this will return the string from 0 to 5 index, in this case it will return "hello"
all.slice(0, -1); // this will return the string from 0 to -1 index, in this case it will return "hello worl"
all.slice(-5); // this will return the string from -5 to end of the string, in this case it will return "world"
all.substring(0, 5); // this will return the string from 0 to 5 index, in this case it will return "hello"


// converting number to string
const num = 1234;
num.toString(); // this will return the string value of the number
String(num); // this will return the string value of the number, in this case it will return "1234"

const obj1 = { name: "harry" };
String(obj1); // this will return the string value of the object, in this case it will return "[object Object]"
JSON.stringify(obj1); // this will return the string value of the object in JSON format, in this case it will return "{"name":"harr y"}"

// converting string to number
const str5 = "1234";
parseInt(str5); // this will return the number value of the string, in this case it will return 1234
parseFloat(str5); // this will return the number value of the string, in this case it will return 1234

str.toUpperCase(); // this will return the string in upper case, in this case it will return "HELLO WORLD"
str.toLowerCase(); // this will return the string in lower case, in this case it will return "hello world"

// string comparison
str.localeCompare(str2); // this will return -1, if str is less than str2, 0 if they are equal and 1 if str is greater than str2
str.includes("hello"); // this will return true, if the string includes the value, in this case it will return true


// string split and join 
all.split(" "); // this will return the array of string, in this case it will return ["hello", "world"]
// all.join(" "); // this will return the string from the array, in this case it will return "hello world"
all.split("h"); // this will return the array of string, in this case it will return ["ello worl", ""]



// trucate string means to limit the length of the string ex ample "hello world" to "hello wo..."
function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + "...";
    }
    return str;
}

console.log(truncateString("Subscribe my youtube channel", 9));


// number is palindrome or not 

function isPalindrome(num) {
    if (!num) {
        return "please provide the NUMBER"
    }
    if (typeof num !== "number") {
        return "please provide the valid and NUMBER only"
    }
    return parseInt(num.toString().split("").reverse().join("")) // 121 => "121" => ["1","2","1"] => ["1","2","1"] => "121" => 121
}

console.log(isPalindrome(123));



// Hamming Distance  
// given two strings of equal length, return the number of characters that are different between them   

// input x = "hello" , y = "hewwl"
// output = 3
// explanation:
// the hamming distance between "hello" and "hewwl" is 3 because the number of characters that are different between them is 3

function hammingDistance(str1, str2) {
    if (str1.length !== str2.length) {
        throw new Error("string 1 length is not equal to string 2 ")
    }

    let a = 0

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            a++
        }
    }

    return a
}

console.log(hammingDistance("hello", "hewwl"))



// number is anagram or not
// input x = "listen" , y = "silent"
// output = true
// explanation:
// the number is anagram because the number of characters that are different between them is 0

function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    str1 = str1.split("").sort().join("")
    str2 = str2.split("").sort().join("")

    if (str1 === str2) {
        return true
    } else {
        return false
    }
}

console.log(anagram("listen", "silent"))


// reverse string 
function reverseString(str) {
    return str.split("").reverse().join("") // split convert string to array ["h","e",'l','l',"o"] then reverse the array and join the array to string
}

console.log(reverseString("hello")) // olleh  // Time Complexity: O(n)



// Implement a Queue using Two Stacks

class QueueWithTwoStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(element) {
        this.stack1.push(element);
    }

    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
}

const queue = new QueueWithTwoStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2



// check blank string 
function isBlank(str) {

    if (typeof str !== "string") {
        return `please provide the valid string`
    }
    console.log("str.length>>>", str.length);
    if (str.length === 0) {
        return true
    } else {
        return false
    }
}

console.log(isBlank("")); // true
console.log(isBlank("hello")); // false


// String to Array of Words
function stringToArray(str) {
    if (typeof str !== "string") {
        return `please provide the valid string`
    }

    return str.split(" ").reverse().join(" ") // this will return the array of words from the string
}

console.log(stringToArray("hello world")); // ["hello", "world"]


// extracting substring from string
function extractSubstring(str, start, end) {
    if (typeof str !== "string") {
        return `please provide the valid string`
    }
    return str.substring(start, end) // this will return the substring from the string
}


console.log(extractSubstring("hello world", 0, 3)); // hel

