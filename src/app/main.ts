import { addProduct, products, updateProduct, findProducts} from './products/product.service' ;
import {faker} from '@faker-js/faker';


for(let index = 0; index < 50; index++){
  addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription() ,
    image: faker.image.imageUrl(),
    stock: faker.datatype.number({min: 10,max:150}),
    size: faker.helpers.arrayElement(['S','M','L','XL']), //asigna un valor aleatorio para crear productos
    color: faker.color.human(),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    categoryId: faker.datatype.uuid(),
    tags: faker.helpers.arrayElements(['A','B'])
  });
}

console.log(products);

const product1 = products[0];

console.log('El id del primer producto es: ',typeof(product1.id));


updateProduct(product1.id,{
  title: 'Hola a todoss',
  price: 5000,
})
console.log("---------------",product1);


findProducts({
  stock: 10,
  color : 'red',
  isNew: true,

})

