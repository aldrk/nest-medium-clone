import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "mediumclone",
  password: "123",
  database: "mediumclone",
  entities: ["dist/**/*.entity.{ts,js}"],
  synchronize: true
};

export default config;