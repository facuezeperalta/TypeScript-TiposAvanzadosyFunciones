
export interface BaseModel{
  readonly id: string; //pongo la propiedad como solo lectura para que no pueda sobreescribirse.
  createdAt:Date;
  updatedAt:Date;
}
