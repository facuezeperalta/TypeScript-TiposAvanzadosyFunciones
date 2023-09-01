export const createProduct = (
  id : string | number,
  isNew?: boolean,
  stock?: number
)=>{
  return{
    id,
    stock: stock ?? 10, /* tiene solo en cuenta null o undefined */
    isNew: isNew ?? true /* tiene solo en cuenta null o undefined */
  }
}

const product1 = createProduct('Samung Fold 5',true,150);

console.log(product1);

const product2 = createProduct('Samung Flip 5', true);

console.log(product2);


const product3 = createProduct('funda de celular');

console.log(product3);
