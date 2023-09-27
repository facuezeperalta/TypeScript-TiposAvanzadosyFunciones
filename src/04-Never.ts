/* const withoudEnd = () =>{
  while (true){
    console.log('Nunca pares de aprender');
  }
}
 */
const fail = (message: string) =>{
  throw new Error(message);
}


const example = (input : unknown)=> {
  if (typeof input === 'string'){
    return "Es un string"
  } else if (Array.isArray(input)){
    return "es un array";
  }
  return fail ('No hizo match');
}
console.log(example('Facundo'));
console.log(example([1,2,3,4,5]));
console.log(example(2)); //el programa se detiene acá.
console.log(example('Después del fail'));


