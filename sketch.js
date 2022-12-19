function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaPizzaria);
  mostraAtor();
  mostraCrianca();
  mostraAnimatronic();
  mostraAnimatronic2();
  movimentaAnimatronic();
  movimentaAnimatronic2();
  movimentaAtor();
  voltaPosicaoInicialDoAnimatronic();
  voltaPosicaoInicialDoAnimatronic2();
  verificaColisao();
  verificaColisao2();
  incluiPontos();
  marcaPontos();
}
