
export interface BaseModel{
  readonly id: string | number; //pongo la propiedad como solo lectura para que no pueda sobreescribirse.
  createdAt:Date;
  updatedAt:Date;
}
