buttons = document.querySelectorAll('.btn');
for( let value of buttons){
  value.addEventListener("click",function(){
    makeSound(this.textContent);
    displayAnimation(this.textContent);
  });
}

document.addEventListener('keypress',function(event){
  makeSound(event.key);
  displayAnimation(event.key);
});

function makeSound(val) {
  switch(val){
    case 'w': audio = new Audio('sounds/tom-1.mp3');
    break;
    case 'a': audio = new Audio('sounds/tom-2.mp3');
    break;
    case 's': audio = new Audio('sounds/tom-3.mp3');
    break;
    case 'd': audio = new Audio('sounds/tom-4.mp3');
    break;
    case 'j': audio = new Audio('sounds/snare.mp3');
    break;
    case 'k': audio = new Audio('sounds/crash.mp3');
    break ;
    case 'l': audio = new Audio('sounds/kick-bass.mp3');
    break;
  }
  audio.play();
}

function displayAnimation(val){
  button_pressed = document.querySelector('.'+val);
  toggleAnimation(button_pressed);
  setTimeout(toggleAnimation,200,button_pressed);
}

function toggleAnimation(element){
  element.classList.toggle('pressed');
}
  // let audio = new Audio('sounds/tom-1.mp3')
  // audio.play()
