/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}
wrapGifts(gifts); 
*/

function writeCards(people,event){

    for (let i = 0; i < people.length; i++){
        people[i] = `Thank you, ${people[i]}, for the wonderful ${event} gift!`;
    }
    return people;
    
}

function countDown(count){
    let i = count;
    while (i >= 0){
        console.log(i);
        i--;
    }
}