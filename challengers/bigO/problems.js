function O1(numero) {

  return `O numero impresso é: ${numero}`;
}

function On(numero) {
  for (let index = 0; index < numero; index++) {
    console.log(`O numero impresso é: ${index}`);
  }
}

function On2(numero) {
  console.time('final')


  let linha = ""

  for (let j = 0; j < numero; j++) {
    linha = linha + " " + "|";
  }

  for (let index = 0; index < numero; index++) {


    console.log(linha)
  }
  console.timeEnd('final')
  console.log(`O numero é: ${numero}`);
}

On2(1000);
