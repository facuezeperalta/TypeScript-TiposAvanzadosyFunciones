import {User,ROLES} from './01-Enum';

const currentUser : User ={
  username : 'facu_eze',
  role: ROLES.ADMIN
}


export const checkAdminRole = () =>{
  if(currentUser.role === ROLES.ADMIN){
    return true;
  }
  return false;
}


const rta = checkAdminRole();
console.log("Check admin role: " ,rta);



export const checkRole = (...roles : string[]) =>{
  if(roles.includes(currentUser.role)){
    return true;
  }
  return false;
}

const rta2 = checkRole(ROLES.COSTUMER);
console.log("Check Role: ", rta2);
