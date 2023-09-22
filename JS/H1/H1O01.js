function setup() {
  canvas = createCanvas(450,450);
  background('grey');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // groene cirkel zonder rand
  
  noStroke();
  fill('green');
  ellipse(225,225,400);

  //witte cirkel in het midden van de groene 
  noStroke();
  fill('white');
  ellipse(225,225,300);
  
  // witte rechthoek met groene rand
  
  stroke('green');
  fill('white');
  strokeWeight(10);
  rect(125,125,200,200);

  // ------------------------------------
  //   Opdracht 1 vormen tekenen I
  //      1. Open H1O01.js (Hoofdstuk 1 Opdracht 1) in jouw editor. Dit is de code van voorbeeld 1. Bekijk het resultaat in de browser.
  //      2. Pas de code aan zodat het canvas grijs (grey) van kleur wordt.
  //      3. Pas de code aan zodat het canvas nog maar 450 pixels hoogis.
  //      4. Zorg dat de groene cirkel zowel boven als links op een afstand van 25 pixels van de rand van het canvas komt te staan.
  //      5. Voeg een tweede, witte cirkel toe met hetzelfde middelpunt als de groene cirkel en een diameter van 300.
  //      6. Pas de regel voor de rechthoek aan, naar: rect(125,125,200,200);
  //      7. Pas de code aan zodat het eindresultaat uit figuur 1.5 verschijnt met een vierkant canvas.

  //      8. Er zijn nu twee regels met ellipse. Voorspel wat je zal zien als je de beide coderegels van plek laat wisselen, zodat hun volgorde andersom is. Probeer daarna uit.

  //ANS      Als je de code omwisselt dan rendert het laatste en grootste cirkel als laatst, hierdoor zal deze over de witte heen gaan en de witte cirkel zal niet meet zichtbaar zijn 

}


