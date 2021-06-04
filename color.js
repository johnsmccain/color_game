let colors = [];
let numSquares = 6;
let squares = document.querySelectorAll(".square"); 
let colorName = document.querySelector("#colorName");
let message = document.querySelector("#message");
let resetbtn = document.querySelector("#reset");
let h1 = document.querySelector("h1");
let modeBtn = document.querySelectorAll(".mode");


Init();



 function reset(num){
    colors = generateRandomColors(num);
    // pick a new random color from array 
     colorName.textContent = pickColor();
    //  change color display to match picked Color
    message.textContent = "";
     for(let i = 0; i < squares.length; i++){
         squares[i].style.backgroundColor = colors[i];
         if(colors[i]){
             squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
         }else{
            squares[i].style.display = "none";
         } 
     }
     
     h1.style.backgroundColor = 'steelblue';
     resetbtn.textContent = "new colors";
 }  

 
 let changeColors = (color)=>{
     for(let i = 0; i < squares.length; i++){
         squares[i].style.backgroundColor = color;
     }
 }
 
 function pickColor(){
     let random = Math.floor(Math.random()* colors.length);
     return colors[random];
 }
 
 function generateRandomColors(num){
     let arr = [];
     for(let i = 0; i < num; i++){
         arr.push(randomCokor());
     }
     return arr;
 }
 
 function randomCokor(){
     let red = Math.floor(Math.random()* 256)
     let blue = Math.floor(Math.random()* 256)
     let green = Math.floor(Math.random()* 256)
     
     return `rgb(${red}, ${green}, ${blue})`;
 }   
 resetbtn.addEventListener("click", ()=>{
    reset(numSquares)
 })
 
 
function Init(){
    reset(numSquares);
    setUpMode();
    setUpSquares();
}


function setUpMode(){
    for(let i = 0; i< modeBtn.length; i++){
        modeBtn[i].addEventListener("click", ()=>{
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            modeBtn[i].classList.add("selected");
            modeBtn[i].textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset(numSquares)
        })
    }
}


function setUpSquares(){
    for(let i = 0; i < squares.length; i++){
        colorName.textContent = pickColor();
         squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", ()=>{
           if(colors[i] === colorName.textContent){
               h1.style.backgroundColor = colors[i];
               message.textContent = "Correct";
               changeColors(colorName.textContent);
               resetbtn.textContent = "Play Again?"
           }else{
               message.textContent = "Try Again"
               squares[i].style.backgroundColor = "#232323";
               resetbtn.textContent = "New Colors"
           }  
        })
    }
}