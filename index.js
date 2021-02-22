// Code your solutions in this file

// function writeCards(names) {
//     for (let i = 0; i < names.length; i++) {
//         console.log("Thank you, ${names[i]}, for the wonderful surprise gift!");
//     }
//     return names; 
// }

function writeCards(cards, event) {
    let arr = []
    for (let i = 0; i < cards.length; i ++) {
        arr.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
    }
    return arr
}


function countDown(number){
    let countup = 0;
    while (countup <= number) {
      console.log(countup++);
    } 
}

