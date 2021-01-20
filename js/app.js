let myNumber = 'amet'
if ( myNumber !== Number){
   console.log ('This is not a number')
}else if (myNumber % 3 == 0) {
    console.log('Gen');
}else if (myNumber % 5 == 0) {
    console.log('Buzz')
}else if (myNumber % 3 == 0 && myNumber % 5 == 0){
    console.log('GenBuzz ')
}else {
    console.log(myNumber)
}

let items = 'hat'
switch (items) {
    case 'shoes':
        console.log('Shoes are $50')
        break;
    case 'jeans':
        console.log('Jeans- $25')
        break
    case 'hat':
        console.log('Hat- $12')
            break
     case 'socks':
        console.log('Socks- $2')   
        break
    default:'Invalid Item' 
     
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
console.log(getRandomInt(50, 100));