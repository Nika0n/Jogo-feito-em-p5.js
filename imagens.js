let imagemDaPizzaria;
let imagemDoAtor;
let imagemDoAnimatronic;
let imagemDoAnimatronic2;
let imagemDoAnimatronic3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaPizzaria = loadImage("imagens/fnaffloor.png")
  imagemDaCrianca = loadImage("imagens/NicePng_man-crying-png_4053419.png")
  imagemDoAtor = loadImage("imagens/favpng_five-nights-at-freddys-comics-puppet-drawing-cartoon.png")
  imagemDoAnimatronic = loadImage("imagens/freddy.png")
  imagemDoAnimatronic2 = loadImage("imagens/favpng_five-nights-at-freddys-3-five-nights-at-freddys-sister-location-8-bit-animatronics.png")
  imagemDoAnimatronic3 = loadImage("imagens/pngegg.png")
  imagemDoAnimatronic4 = loadImage("imagens/pngwing.com.png")
  imagemDoAnimatronic5 = loadImage("imagens/manglee.png")
  imagemDoAnimatronic6 = loadImage("imagens/PikPng.com_springtrap-png_2755496.png")
  imagemAnimatronic = [imagemDoAnimatronic, imagemDoAnimatronic2, imagemDoAnimatronic3]
  imagemAnimatronic2 = [imagemDoAnimatronic4, imagemDoAnimatronic5, imagemDoAnimatronic6]
  
  somDaTrilha = loadSound("sons/ES_The Clearing - Golden Anchor2.wav");
  somDaColisao = loadSound("sons/ES_Human Scream 4 - SFX Producer2.wav")
  somDoPonto = loadSound("sons/five-nights-at-freddys-6-am2.wav")
  
}