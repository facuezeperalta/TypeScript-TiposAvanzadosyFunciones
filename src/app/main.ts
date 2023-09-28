import { addProduct, products, updateProduct} from './products/product.service' ;
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



