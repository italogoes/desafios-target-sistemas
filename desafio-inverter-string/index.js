function inverteString(str) {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      novaString += str[i];
    }
    return novaString;
  }
  
  const stringExemplo = 'exemplo';
  const stringInvertida = inverteString(stringExemplo);
  console.log(stringInvertida); // saída: "olpmexe"
  