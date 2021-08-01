import { ConnectionOptions } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

const dbConnnectionOptions: ConnectionOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  entities: [__dirname + "db/entities/*.entity.{js,ts}"],
  synchronize: process.env.DB_SYNC === "true"
}

export default dbConnnectionOptions;