// a) Como você faria, já com a extensão instalada, para gerar um arquivo javascript a partir do  arquivo typescript com o código abaixo?

type pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28,
};

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31,
};

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35,
};

// R: Dentro do package.json fazer em scripts=> "build": "tsc",
// "start": "npm run build && node ./build/exercicio4/index.js"  para salvar em build o js

// b) E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria diferente? Se sim, descreva as diferenças.
// Sim, seria o mesmo processo, pois devemos transpilar para a interpretar pelo js

// c) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.
// Sim, se já estivermos dentro da pasta que contém os arquivos multiplos basta dar o tsc no terminal,
// ou ainda tsc arquivo1.ts arquivo2.ts arquivo3.ts

// d) as diferenças são que o novo tsconfig criado tem as definições padrões e outras a mais que foram desconmentadas na aula
// chama a atenção que não vai ter mais as pastas outDir e rootDir com caminhos definidas e não aceita mais any implicitamente nos types