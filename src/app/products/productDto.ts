import { Product } from './product.model';


//con el omit nos ahorramos crear interfaces extras o poner como campos opcionales y asi ahorra codigo
export interface CreateProductDto extends Omit <Product,'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId : string;
}


type example = Pick <Product, 'color' | 'description' >


export interface UpdateProductDto extends Partial <CreateProductDto> {

}


export interface FindProductDto extends Readonly<Partial<Omit<Product,'tags'>>>{
  readonly tags : ReadonlyArray<string>;
}
type example2 = Readonly<Product>;
