//var ator
let yAtor = 366;
let xAtor = 240;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30)
}
function mostraCrianca(){
  image(imagemDaCrianca, 240, 0, 30, 30)
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3
  }  if (keyIsDown(DOWN_ARROW)){
    if(atorPodeSeMover()){
    yAtor += 3 
     }
   }
}

function verificaColisao(){
  for (let i = 0; i < imagemAnimatronic.length; i++){
    colisao = collideRectCircle(xAnimatronic[i], yAnimatronic[i], compAnimatronic, altAnimatronic, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero())
      meusPontos -= 1
    }
  }
}

function verificaColisao2(){
  for (let i = 0; i < imagemAnimatronic2.length; i++){
    colisao = collideRectCircle(xAnimatronic2[i], yAnimatronic2[i], compAnimatronic2, altAnimatronic2, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero())
      meusPontos -= 1
    }
  }
}

function voltaAtorPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27)
}

function marcaPontos(){
  if(yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorPosicaoInicial();
  }
}
function pontosMaiorQueZero(){
  return meusPontos > 0
}

function atorPodeSeMover(){
  return yAtor < 366;
}