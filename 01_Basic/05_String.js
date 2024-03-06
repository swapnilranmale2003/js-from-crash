//String inerpollation

const name = "Sunny";
const repoCount = 29;
console.log(`My name is ${name} and my repo count is ${repoCount} `);  

const gameName = new String("Badminton");
console.log(gameName.charAt(2))
console.log(gameName.indexOf('B'))

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-9,4)
console.log(anotherString);

const emailString = "    swapnilranmale2003@gmail.com        ";
console.log(emailString)
console.log(emailString.trim())

const url = "https://www.linkidin%20swapnil.com";
console.log(url.replace('%20','_'));

const str = 'The quick brown fox jumps over the lazy dog.';
const word= str.split('');
console.log(word[4])