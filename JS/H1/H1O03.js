function setup() {
  canvas = createCanvas(450,450);
  background('white');
  canvas.parent('processing');
  noLoop();
  // colorMode(RGB,255,255,255,1);
}

function draw() {
  noStroke();
  // fill(0,0,255,0.3);
  fill('red');
  rect(0,150,450,150);
  fill('green');
  rect(0,0,150,450);
  fill('blue');
  rect(75,0,375,450);


  
  // ------------------------------------
  //   Opdracht 3 kleuren en doorzichtigheid
  //          15. Open H1O03.js in jouw editor. Bekijk het resultaat in de browser.

  //          16. In regel 12 (kleurinstelling) en regel 13 (vorm) wordt een rood rechthoek getekend. Verklaar waarom je deze rode horizontale balk niet op het scherm ziet.

  //ANS          Het rode vlak is er wel, maar je ziet het niet, want het blauwe grotere vlak wordt als laatst gerendert, en deze gaat dan over het rode vlak heen


  //          17. Vervang de regel die zorgt voor een groene kleur door fill(0,255,0); Bekijk het resultaat.
  //          18. We hebben nu een andere kleur groen. Gebruik bovenstaande link om de juiste kleurcodering voor de kleur green te vinden.
  //          19. Vervang de regel die zorgt voor een blauwe kleur door een hexadecimale kleurcode die hetzelfde resultaat geeft als blue. Gebruik opnieuw de link naar de webpagina met kleurennamen.
  //          20. In de code staan twee regels met // ervoor (er staat ook eentje in de setup!). Verwijder de // voor beide regels. Eén van de regels die je nu actief hebt gemaakt is fill(0,0,255,0.3);

  //          Verwijder alle andere regels met het commando fill.
  //          21. Als het goed is zie je als je de code uitvoert het resultaat uit figuur 1.8. We zien nu ook de horizontale balk die eerst onzichtbaar was. Wat is blijkbaar de betekenis van de 0.3 tussen de haakjes van fill?
  //          22. Controleer je voorspelling door de waarde 0.3 te laten variëren tussen 0 en 1. Let op: gebruik een punt en geen komma.
  //          
  //          Wat zie je als je precies 0 of 1 invult?
  //          
  //          23. Voeg een cirkel toe met een diameter van 450 en als middelpunt [450,225]. Zorg dat de vulkleur weer 0.3 bevat.
  //          24. Voeg een driehoek toe zodanig dat de tekening in figuur 1.9 ontstaat. Kies daarna je eigen favoriete kleur.
}