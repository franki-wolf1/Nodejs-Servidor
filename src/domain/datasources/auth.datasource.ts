//reglas de negocio que rige la obtencion de datos
import { UserEntity } from "../entities/user.entity"; //Clase entidad
import { LoginUserDto, RegisterUserDto } from "..";

//abstrac para no crear una clase con instancias
export abstract class AuthDatasource {
  // todo:
  abstract login(loginUserDto: LoginUserDto): Promise<UserEntity>;

  abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>;
}
