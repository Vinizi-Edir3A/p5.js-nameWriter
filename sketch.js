let palavra;

function setup() {
  createCanvas(400, 400);
  
  palavra = palavraAleatoria();
}

function palavraAleatoria() {
  let palavras = ["Hello World!", "Power.", "Love?"]
  return palavra = random(palavras)
}


function draw() {
  background("black");
  fill("darkgreen");
  textSize(50);
  textAlign(CENTER, CENTER);
  textFont("Courier New")
  
  let maximo = width;
  let minimo = 0;
  
  let quantidade = map(mouseX, minimo, maximo, 0, palavra.length);
  console.log(quantidade)
  let parcial = palavra.substring(0, quantidade)
  
  text(parcial, 200, 200)
  // console.log("Hello World".length);
}