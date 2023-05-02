const myName = 'Eugene Polesko';
const birthYear = 1990;
const job = 'teacher';
const country = 'Thailand';
const birthCountry = 'Russia';
const speakEnglish = true;
const speakThai = true;

const story = `Hello! My name is ${myName}. I am ${2023 - birthYear} years old. I was born in ${birthCountry} and now I live in ${country}. I am a ${job} and I ${speakEnglish ? 'speak' : `don't speak`} English${speakThai ? ' and Thai.' : '.'} 🐱‍🚀`;

console.log(story);
