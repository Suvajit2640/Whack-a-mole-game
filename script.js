let Timeclear = setInterval(timeremaining, 1000);
let game = setInterval(randombox, 1000);
let score = document.querySelector("#score");
let time = document.querySelector("#timer");
let aim1 = document.querySelector("#hello");
let boxes = document.querySelectorAll(".box");
let scores = 0;
let timerstart = 20;
let timerrotate=20;
let random1;
let suvo;
let lvl2score = 0;
let lvlno = 0;
let target = 20;
let mili = 1000;
aim1.innerText = "Target is: 20"
let event1;
let playerlevel=document.querySelector("#plevel");

function randomnumber() {
  random1 = Math.floor(Math.random() * 9);
  
  return random1;
}
handlerevent = (e) => {
  if (e.target.id == random1) {
    
    scores++;
    
    if (scores == target) {
      scores = 0;
      timerstart = timerstart+5;
      timerrotate=timerstart;
      target = target + 5;
      lvlno++;
      
      // console.log("Congratulations!! you have cleared level 1");
      alert(`Congratulations!! You have cleared level ${lvlno}`)

      aim1.innerText = `Target is: ${target}`;
      
      levelup();
    }
    playerlevel.innerText=`Level: ${lvlno+1}`;
    score.innerText = (`Score:${scores}`);
  }}

  boxes.forEach(box => {
    box.addEventListener('mousedown', handlerevent)

  }

  );
  function randombox() {
    boxes.forEach(box => {
      box.classList.remove("mole");

    })
    random1 = randomnumber();

    // console.log("random number is",random1)
    boxes[random1].classList.add("mole");
  }

  function levelup() {
    // console.log("level up is called")
    clearInterval(game);
   

    mili = mili - 100;
    if(mili==300)
    {
      alert("Congratulations!! You have beaten the Game!!");
      // more things will be shown shortly

    }
    game = setInterval(randombox, `${mili}`);

    
  }

  function timeremaining() {
    timerrotate--;
    time.innerText = (`Time remaining : ${timerrotate}`);
    if (timerrotate === 0) {
      alert(`Game over!! your score is ${scores}...Reload to start a new game`);
      time.classList.add("endtime")

      clearInterval(Timeclear);
      clearInterval(game);
  
      boxes.forEach(box => {
        box.removeEventListener('mousedown',handlerevent);
      });
      
    }
  }

