function inverteString(str) {
    return str.split('').reverse().join('');
  }
  
  const stringExemplo = 'exemplo';
  const stringInvertida = inverteString(stringExemplo);
  console.log(stringInvertida); // saída: "olpmexe"
  