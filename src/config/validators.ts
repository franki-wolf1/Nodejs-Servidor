export class Validators {
  static get email() {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  }

  // Validador para contraseñas
  static get password() {
    // Expresión regular para validar una contraseña:
    // - Al menos 8 caracteres de longitud
    // - Al menos una letra mayúscula
    // - Al menos una letra minúscula
    // - Al menos un dígito
    // - Caracteres especiales permitidos: !@#$%^&*()-_+=
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{8,}$/;
  }
}
