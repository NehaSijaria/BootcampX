// console.log(process.argv);
// const { argv } = process;
// argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });
const username = process.argv[2];
if(username){
  console.log(`Greetings, ${username}!`);
} else {
  console.log("Hello, world!");
}