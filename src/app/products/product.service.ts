//manipulacion
import {faker} from '@faker-js/faker';
import {Product} from './product.model';
import {CreateProductDto, UpdateProductDto, FindProductDto} from './productDto'


export const products : Product[] = [];

export const addProduct = (data:CreateProductDto) => {
  // genereamos la data de lo omitido en el metodo CreateProductDto, en realidad esto lo haría la base de datos.
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct; //retorno el producto nuevo creado.

}


export const updateProduct = (id: Product['id'], changes: UpdateProductDto):Product=> { //con Product['id'] obtengo el tipado del valor, se hace de manera automática
  // code
  const index = products.findIndex(item => item.id === id);
  const prevDta = products[index];
  products[index] ={
    ...prevDta,
    ...changes
  }
  return products[index];

}


export const findProducts = (dto: FindProductDto): Product[] =>{
  //codigo de filtro
  /* dto.color = 'blue'; */
  return products;
}



