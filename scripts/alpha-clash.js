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

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
}