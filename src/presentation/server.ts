import express, { Router } from "express"; //import faztify, etc

//dependencias
interface Options {
  port?: number;
  routes: Router;
}

export class Server {
  public readonly app = express();
  //dependecias explicitas
  private readonly port: number;
  private readonly routes: Router;

  //enviar Objeto, como best practices
  constructor(options: Options) {
    const { port = 3100, routes } = options;

    this.port = port;
    this.routes = routes;
  }

  async start() {
    // Middlewares
    this.app.use(express.json()); //JSON
    this.app.use(express.urlencoded({ extended: true })); //Middlewares x-www-form-urlencoding

    // Usar las rutas definidas
    this.app.use(this.routes);

    // Escuchar el puerto, evitando dependencias ocultas como: process.env.PORT
    this.app.listen(/*3000*/ this.port, () => {
      console.log(`Server running on port ${this.port}` /*${3000}*/);
    });
  }
}
