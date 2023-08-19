const boxs = document.querySelectorAll(".box")
const countMove = document.querySelector(".move")
const FinishGame = document.querySelector('.end-game')
const turn = document.querySelector(".turn")
let count = 0;
let random
let restartGame = 0
turn.innerHTML = "Lets Start Game!"
boxs.forEach(box => {
    box.addEventListener("click", function add(){
       
        count++
        box.innerHTML  = "x"
        box.classList.add("xclas")
        box.classList.remove("event")
        const evenrt = document.querySelectorAll(".event")
        turn.innerHTML = "Bot move"
          turn.style.color = "red"

        console.log(evenrt)
        random = evenrt[Math.floor(Math.random() * evenrt.length)];

for(i=0; i <= evenrt.length; i++){

    function move(){
        if(random.classList.contains("event")){
            random.classList.remove("event")
            turn.innerHTML = "Palyer move"
            turn.style.color = "green"
    
            random.innerHTML ="y"
            random.classList.add("yclas")
            random.style.pointerEvents = "none";
        }

        
}




 

   }
   
   countMove.innerHTML = `Your move ${count}`
   console.log(count)
   if(count === 5){
    FinishGame.innerHTML = "GAME OVER"
    box.removeEventListener("click",add)

    
}
const Timeoutid = setTimeout(move, 2000)


for(i=0; i <= boxs.length; i++){
    if(((boxs[0].classList.contains("xclas"))&&(boxs[1].classList.contains("xclas"))&&(boxs[2].classList.contains("xclas")))||
    ((boxs[3].classList.contains("xclas"))&&(boxs[4].classList.contains("xclas"))&&(boxs[5].classList.contains("xclas")))||
    ((boxs[6].classList.contains("xclas"))&&(boxs[7].classList.contains("xclas"))&&(boxs[8].classList.contains("xclas")))||
    ((boxs[0].classList.contains("xclas"))&&(boxs[3].classList.contains("xclas"))&&(boxs[6].classList.contains("xclas")))||
    ((boxs[2].classList.contains("xclas"))&&(boxs[4].classList.contains("xclas"))&&(boxs[7].classList.contains("xclas")))||
    ((boxs[2].classList.contains("xclas"))&&(boxs[5].classList.contains("xclas"))&&(boxs[8].classList.contains("xclas")))||
    ((boxs[0].classList.contains("xclas"))&&(boxs[4].classList.contains("xclas"))&&(boxs[8].classList.contains("xclas")))||
    ((boxs[2].classList.contains("xclas"))&&(boxs[4].classList.contains("xclas"))&&(boxs[6].classList.contains("xclas"))))
    {
        FinishGame.textContent = "X Win"
        clearTimeout(Timeoutid )
        turn.innerHTML = "Game over"
        turn.style.color = "blue"
        boxs.style.pointerEvents = "none"

        
    
        

  


      

    }


    if(((boxs[0].classList.contains("yclas"))&&(boxs[1].classList.contains("yclas"))&&(boxs[2].classList.contains("yclas")))||
    ((boxs[3].classList.contains("yclas"))&&(boxs[4].classList.contains("yclas"))&&(boxs[5].classList.contains("yclas")))||
    ((boxs[6].classList.contains("yclas"))&&(boxs[7].classList.contains("yclas"))&&(boxs[8].classList.contains("yclas")))||
    ((boxs[0].classList.contains("yclas"))&&(boxs[3].classList.contains("yclas"))&&(boxs[6].classList.contains("yclas")))||
    ((boxs[2].classList.contains("yclas"))&&(boxs[4].classList.contains("yclas"))&&(boxs[7].classList.contains("yclas")))||
    ((boxs[2].classList.contains("yclas"))&&(boxs[5].classList.contains("yclas"))&&(boxs[8].classList.contains("yclas")))||
    ((boxs[0].classList.contains("yclas"))&&(boxs[4].classList.contains("yclas"))&&(boxs[8].classList.contains("yclas")))||
    ((boxs[2].classList.contains("yclas"))&&(boxs[4].classList.contains("yclas"))&&(boxs[6].classList.contains("yclas"))))
    {
        FinishGame.textContent = "Y Win"
        clearTimeout(Timeoutid )
        turn.innerHTML = "Game over" 
        turn.style.color = "blue"
        boxs.style.pointerEvents = "none"

      
       



        

        
    }
   


}






 

   
playagain()
  
    
  
        
    })



   
    
    function playagain(){
        const restartBtn = document.createElement('button')
        restartBtn.innerHTML = "Restart"
        restartBtn.classList.add("button")
        countMove.appendChild(restartBtn)
        restartBtn.addEventListener("click", ()=>{
            location.reload()
        })

    }

  
})

