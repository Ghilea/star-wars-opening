//music function
let bgMusic = paused => {

    if (paused) {
        audio.pause();
        return;
    }

    const link = './sound/intro.mp3';
    let audio = new Audio(link);
    audio.volume = 0.5;
    audio.loop = false;

    audio.play();
}

//start the game
document.querySelector('.start').addEventListener('click', () => {
    
    let scen = document.querySelector('.scen');

    console.log(scen.style.display);
    if(scen.style.display !== 'grid'){
       setTimeout(() => {
        bgMusic(false);
    }, 3000); 

     scen.style.display = 'grid';
    }
    

})