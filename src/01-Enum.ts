export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  COSTUMER = "costumer",
}

export type User = {
  username : string;
  role : ROLES;
}


const usuario : User ={
  username : "Facundo",
  role : ROLES.ADMIN /* veo de manera directa que opciones puedo asignarle a una variable */
}

