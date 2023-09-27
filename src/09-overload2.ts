// Nico => [N,i,c,o] ingresamos un string y que devuelva un array de string y viceversa.

//la sobrecarga solo funciona con function. no con las que comienzan con const y arrows functions.


//tipamos la función
export function parseStr(input : string ): string[];
export function parseStr(input: string[]) : string;
export function parseStr(input: number) : boolean;

/* export function parseStr (input : string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); //string
  } else {
    return input.split(''); //String[]/
  }
} */
export function parseStr(input:unknown):unknown{
  if (Array.isArray(input)){
    return input.join('');
  } else if(typeof input === 'string'){
    return input.split('');
  }else if (typeof input === 'number'){
    return true;
  }
}




const rtaArray = parseStr("Facu");

console.log("Respuesta array: ",rtaArray);

console.log('Array invertido: ', rtaArray.reverse());

const rtaString = parseStr(['F','a','c','u']);

console.log("Respuesta String: ",rtaString);

const rtaboole = parseStr(2);

console.log('Rta Boole: ',rtaboole)
