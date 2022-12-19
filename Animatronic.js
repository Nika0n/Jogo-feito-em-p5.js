//animatronics indo pra direita
let xAnimatronic2 = [0, 0, 0]
let yAnimatronic2 = [200, 318, 250]
let vAnimatronic2 = [5, 3.5, 3]
let compAnimatronic2 = 50;
let altAnimatronic2 = 40;


//animatronics indo pra esquerda
let xAnimatronic = [420, 600, 600]
let yAnimatronic = [40, 96, 150]
let vAnimatronic = [3, 5, 3.2]
let compAnimatronic = 50;
let altAnimatronic = 40;

function mostraAnimatronic(){
  for(let i = 0; i < imagemAnimatronic.length; i++){
  image(imagemAnimatronic[i], xAnimatronic[i], yAnimatronic[i], compAnimatronic, altAnimatronic)
  }
}

function mostraAnimatronic2(){
  for(let i = 0; i < imagemAnimatronic2.length; i++){
  image(imagemAnimatronic2[i], xAnimatronic2[i], yAnimatronic2[i], compAnimatronic2, altAnimatronic2)
  }
}

function movimentaAnimatronic(){
  for (let i = 0; i < imagemAnimatronic.length; i++){
  xAnimatronic[i] -= vAnimatronic[i];
  }
}

function movimentaAnimatronic2(){
  for (let i = 0; i < imagemAnimatronic2.length; i++){
  xAnimatronic2[i] += vAnimatronic2[i];
  }
}

function voltaPosicaoInicialDoAnimatronic(){
  for(let i = 0; i < imagemAnimatronic.length; i++){
  if(passouTodaTela(xAnimatronic[i])){
    xAnimatronic[i] = 600;
  }
 }
}

function voltaPosicaoInicialDoAnimatronic2(){
  for(let i = 0; i < imagemAnimatronic2.length; i++){
  if(passouTodaTela2(xAnimatronic2[i])){
    xAnimatronic2[i] = 0;
  }
 }
}

function passouTodaTela(xAnimatronic){
  return xAnimatronic < - 50;
}

function passouTodaTela2(xAnimatronic2){
  return xAnimatronic2 > 650;
}