import { Product } from '../products/product.model';
import{User} from '../User/user.model';


export interface Order{
  id: string | number;
  createdAt: Date;
  products: Product[];
  user: User;
}
