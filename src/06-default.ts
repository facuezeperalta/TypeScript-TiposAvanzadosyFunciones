export const createProduct = (
  id : string | number,
  isNew: boolean  = true, /* asigno el valor por defecto en el caso de que no envien nada */
  stock: number = 10, /* valores por defecto en caso que venga vacio */
)=>{
  return{
    id,
    stock,
    isNew
  }
}

const p1 = createProduct(1,false,);
console.log(p1);
