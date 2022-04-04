const personagem = document.getElementById('personagem');
const bloco = document.getElementById('bloco');

function jump(){
  if (personagem.classList != "jump"){
    personagem.classList.add("jump");

    setTimeout (function(){
      personagem.classList.remove("jump");
    },300);
  }  
}

let isAlive = setInterval (()=>{
  let randomTime = Math.random() * 6000;

  let personagemTop = parseInt (window.getComputedStyle(personagem).getPropertyValue("top"));

  let blocoLeft = parseInt(window.getComputedStyle(bloco).getPropertyValue("left"));

      if(blocoLeft < 50 && blocoLeft > 0 && personagemTop >= 140){
        alert("game over");
        document.body.innerHTML = '<h1 class="game-over""> Atualize a página e jogue novamente </h1>';
    }
                                     setTimeout(isAlive, randomTime);
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
})