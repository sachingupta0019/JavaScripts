let body = document.querySelector("body");
let colorTheme = document.querySelector(".checkbox");
let messageContainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");
let btnBox = document.querySelectorAll('.box');
let StartBtn = document.querySelector('.start-btn');
let ResetBtn = document.querySelector('.reset-btn');

let darkMode= () => {
    if(colorTheme.checked){
        body.classList.add("dark-mode");
        ResetBtn.classList.add("dark-mode-btn");
        StartBtn.classList.add("dark-mode-btn");
    }else{
        body.classList.remove("dark-mode");
        ResetBtn.classList.remove("dark-mode-btn");
        StartBtn.classList.remove("dark-mode-btn");
    } 
}
colorTheme.addEventListener('change', darkMode);


let player0 = true;
let count = 0;

btnBox.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(player0){
            box.innerText = "0";
            player0 = false;
        }else{
            box.innerText = "X";
            player0 = true;
        }
        box.disabled = true
        count++;

        let isWinner = checkWinner();

        if(count === 9 && !isWinner){
            gameDraw();
            count = 0;
        }       
    });
});

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const disableBoxes = () => {
    for(let box of btnBox){
        box.disabled = true
    }  
};

const enableBoxes = () => {
    for(let box of btnBox){
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("winning-box");
    }  
};

const resetGame = () => {
    player0 = true
    enableBoxes();
    messageContainer.classList.add("hide");
};

const gameDraw = ()=> {
    message.innerText = ' Draw Game. ';
    messageContainer.classList.remove("hide");
    disableBoxes();
};

 const showWinner = (winner) => {
    message.innerText = `Congratualtions! Winner is ${winner}.`;
    messageContainer.classList.remove("hide");
    disableBoxes();
    count = 0;
 };

 const highlightWinningBoxes = (winningPattern) => {
    winningPattern.forEach((box) => {
        btnBox[box].classList.add("winning-box");
    });
};

const checkWinner = ()=>{
    for(let patterns of winPatterns){
        let pos1Val = btnBox[patterns[0]].innerText;
        let pos2Val = btnBox[patterns[1]].innerText;
        let pos3Val = btnBox[patterns[2]].innerText;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                highlightWinningBoxes(patterns); 
                showWinner(pos1Val);
            }
        }         
    }
};

StartBtn.addEventListener("click", resetGame);
ResetBtn.addEventListener("click", resetGame);