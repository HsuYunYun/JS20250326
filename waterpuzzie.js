document.addEventListener("DOMContentLoaded",() =>{
    const gameContainer = document.getElementById('game-container');
    const playButton = document.getElementById('play-button');
    const levelSelect = document.getElementById('level-select');

    const tubes = [];
    let levelCount = 1;

    levelSelect.addEventListener('change',(event)=>{
        const selectedLevel = parseInt(event.target.value,10)
    });

    function playGame(){
        
    }

    playButton.addEventListener('click',playGame);
});