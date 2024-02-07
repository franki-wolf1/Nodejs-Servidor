import { envs } from "./config";
import { MongoDatabase } from "./data/mongodb";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

//crear scope propio y autoinvocación
(() => {
  main();
})();

async function main() {
  console.log("Hola Dev");

  new Server({
    //port: 3000, //
    port: envs.PORT,
    routes: AppRoutes.routes,
  }).start();

  /*
  await MongoDatabase.connect({
    dbName: envs.MONGO_DB_NAME,
    mongoUrl: envs.MONGO_URL,
  }); */
}
