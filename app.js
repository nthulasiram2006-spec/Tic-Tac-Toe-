let Boxes = document.querySelectorAll(".Box");
let ResetBtn = document.querySelector("#ResetBtn");
let NewBtn = document.querySelector("#NewBtn");
let NewMsg = document.querySelector("#Msg");
let MsgContainer = document.querySelector(".Msg-Container");

let TurnO = true; // PlayerX , PlayerO

//2D Array
const WinPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

Boxes.forEach((Box) => {
    Box.addEventListener("click" , () => {
        console.log("Box Was Clicked");
        if(TurnO){ //Player_O
            Box.innerText = "O"
            TurnO = false;
        } else { // Player_X
            Box.innerText = "X";
            TurnO = true;
        }
        Box.disabled = true;
        
        CheckWinner();
    });
});

const ResetGame = () => {
   TurnO = true;
   EnableBtn();
   MsgContainer.classList.add("Hide");
}

const DisableBtn = () => {
  for (let box of Boxes){
    box.disabled = true;
  }
};

const EnableBtn = () => {
  for (let box of Boxes){
    box.disabled = false;
    box.innerText = "";
  }
};

const ShowWinner = (Winner) => {
    NewMsg.innerText = `Congrats, Winner Is ${Winner}`;
    MsgContainer.classList.remove("Hide");
    DisableBtn();
}

const CheckWinner  = () => {
    for (let Pattern of WinPatterns){
        let Pos1Val = Boxes[Pattern[0]].innerText;
        let Pos2Val = Boxes[Pattern[1]].innerText;
        let Pos3Val = Boxes[Pattern[2]].innerText;

        if(Pos1Val != "" && Pos2Val != "" && Pos3Val != "") {
            if(Pos1Val === Pos2Val && Pos2Val === Pos3Val){
                console.log("Winner",Pos1Val)
                ShowWinner(Pos1Val);
            }
        }
    };
};

NewBtn.addEventListener("click", ResetGame);
ResetBtn.addEventListener("click", ResetGame);