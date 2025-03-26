document.addEventListener("DOMContentLoaded",() =>{
    const gameContainer = document.getElementById('game-container');
    const playButton = document.getElementById('play-button');
    const levelSelect = document.getElementById('level-select');

    const tubes = [];
    let levelCount = 1;

    function chooseLevel(Level){
        levelCount = Level;
        document.getElementById('level-count').textContent = levelCount;
    }
    levelSelect.addEventListener('change',(event)=>{
        const selectedLevel = parseInt(event.target.value,10);
        chooseLevel(selectedLevel);
    });

    playButton.addEventListener('click', ()=>{
        alert('開始遊戲')
    });
});