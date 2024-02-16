// function play(){
//     //step-1: hide the home screen. to hide the screen, add the hidden class to the home section.
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);
    
//     //step-2: show the playground.
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')
//     // console.log(playgroundSection.classList)
// }

function handleKeyboardKeyupEvent(event){
    const playerPressed = event.key;
    // console.log('player pressed', playerPressed);

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        console.log('you have pressed correctly', expectedAlphabet);
        removeBgColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed. you lost a life.');
    }
}

document.addEventListener('keyup', handleKeyboardKeyupEvent);

function continueGame(){
    //step-1: Generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set Background color
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}