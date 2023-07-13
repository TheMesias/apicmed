import app from "./app.js";
import { createServer as createHttpsServer } from 'https'; 
import { readFileSync } from "fs";
import path from "path";
import { estadoBD, sequelize } from "./basedatos/conection.js";
import './basedatos/models/modelsBD.js';



async function main() {

  if (estadoBD) {
    console.log("Conexión establecida, base de datos activa");
  }
  //await sequelize.sync({ force: true });
  
  app.listen(4000);
  console.log("Server on port 4000");
  
}

main()