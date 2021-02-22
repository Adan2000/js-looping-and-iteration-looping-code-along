// Code your solutions in this file



function writeCards(name) {
  let i = 0; 
  while (i <= name.length) {
    console.log('Thank you, ${name}, for the wonderful birthday gift!');
    i++;
  }

  return name;
}

function countDown(number){
    let countup = 0;
    while (countup <= number) {
      console.log(countup++);
    } 
}