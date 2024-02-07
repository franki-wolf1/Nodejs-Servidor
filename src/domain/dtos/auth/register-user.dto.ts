import { Validators } from "../../../config";

export class RegisterUserDto {
  //evitar la creacion del objeto desde el constructor
  private constructor(
    public name: string,
    public email: string,
    public password: string
  ) {}

  static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
    const { name, email, password } = object;

    if (!name) return ["Missing name"];
    if (!email) return ["Missing email"];
    if (!Validators.email.test(email)) return ["Email is not valid"];
    if (!password) return ["Missing password"];
    if (!Validators.password.test(password))
      return ["Format password is not valid"];
    if (password.length < 6) return ["Password too short"];

    return [undefined, new RegisterUserDto(name, email, password)];
  }
}
