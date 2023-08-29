let unknownVar :unknown;

unknownVar = 1;
unknownVar = true;
unknownVar = null;


if(typeof unknownVar === 'string'){
  unknownVar.toUpperCase();
}

/* para trabajar con unknown tienes que hacer vereficación de tipo, mas aconsejable que usar any */

if(typeof unknownVar === 'boolean'){
  let isNew :boolean = unknownVar;
}



