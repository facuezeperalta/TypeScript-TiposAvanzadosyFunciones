// Nico => [N,i,c,o] ingresamos un string y que devuelva un array de string y viceversa.

//la sobrecarga solo funciona con function. no con las que comienzan con const y arrows functions.

function parseStr (input : string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); //string
  } else {
    return input.split(''); //String[]/
  }
}

const rtaArray = parseStr("Facu");

console.log("Respuesta array: ",rtaArray);

const rtaString = parseStr(['F','a','c','u']);

console.log("Respuesta String: ",rtaString);
