var playerChoice = prompt('rock, paper, scissor, shoot!');



function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
var gameList = ['rock', 'paper', 'scissor'];
shuffle(gameList);

var puterChoice = gameList[0];
 
console.log('\nplayerChoice:', playerChoice);
console.log('\nputerChoice:', puterChoice);

if (puterChoice === 'rock' && playerChoice === 'scissor') {
  console.log('\nputer wins!');
}
else if (puterChoice === 'scissor' && playerChoice === 'paper') {
  console.log('\nputer wins!');
}
else if (puterChoice === 'paper' && playerChoice === 'rock') {
  console.log('\nputer wins!');
}
else if (playerChoice === 'rock' &&  puterChoice === 'scissor') {
  console.log('\nplayer wins!');
}
else if (playerChoice === 'scissor' &&  puterChoice === 'paper') {
  console.log('\nplayer wins!');
}
else if (playerChoice === 'paper' &&  puterChoice === 'rock') {
  console.log('\nplayer wins!');
}
else if (playerChoice === 'rock' &&  puterChoice === 'rock') {
  console.log('\nits a draw!');
}
else if (playerChoice === 'scissor' &&  puterChoice === 'scissor') {
  console.log('\nits a draw!');
}
else if (playerChoice === 'paper' &&  puterChoice === 'paper') {
  console.log('\nits a draw!');
}