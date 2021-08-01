import { ConnectionOptions } from "typeorm";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config();

const entitiesDir = path.join(__dirname, "..", "db", "entities");

const dbConnnectionOptions: ConnectionOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  entities: [`${entitiesDir}/*.entity.{js,ts}`],
  synchronize: process.env.DB_SYNC === "true"
}

export default dbConnnectionOptions;