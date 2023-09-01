export const createProduct = (
  id : string | number,
  isNew: boolean  = true, /* asigno el valor por defecto en el caso de que no envien nada */
  stock: number = 10,
)=>{
  return{
    id,
    stock,
    isNew
  }
}
