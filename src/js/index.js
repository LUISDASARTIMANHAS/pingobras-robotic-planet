var ClickMouse = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/click%20do%20mouse.mp3?v=1661006466474');
const link = "https://cdn.glitch.global/04efe736-84a8-41d2-920e-0d32a0e71636/Robotic%20Planet%20RTS_0.4.8.apk?v=1680550325341"
const plataforma = navigator.platform 
const largura = screen.width

function install() { 
  ClickMouse.play();
  
  if(largura <= 820){
    window.location.href = link;
  }else{
    alert("O Jogo E Apenas Para Mobile e Andoid, Atualmente Voce Está Em Um " + plataforma)
  }
  
}