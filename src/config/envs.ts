//Configuración de variables de entorno
//verificar npm i dotenv env-var
import "dotenv/config";
import { get } from "env-var";

//  Archivo sujeto a modificación unico, dependiendo de los paquetes de terceros (Patron Adaptador)
export const envs = {
  PORT: get("PORT").required().asPortNumber(),
  /*
  MONGO_URL: get("MONGO_URL").required().asString(),
  MONGO_DB_NAME: get("MONGO_DB_NAME").required().asString(),

  JWT_SEED: get("JWT_SEED").required().asString(),*/
};
