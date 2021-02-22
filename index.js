// Code your solutions in this file

const names = [ 'Lisa', 'Kaitlin', 'Jan' ];

function writeCards(names) {
    for (let i = 0; i < names.length; i++) {
        console.log("Thank you, ${names[i]}, for the wonderful surprise gift!");
    }
    return names; 
}


function countDown(number){
    let countup = 0;
    while (countup <= number) {
      console.log(countup++);
    } 
}