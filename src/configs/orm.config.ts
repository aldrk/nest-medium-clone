import { ConnectionOptions } from "typeorm"
import * as path from "path"

const config: ConnectionOptions = {
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "mediumclone",
	password: "123",
	database: "mediumclone",
	entities: [path.join(__dirname, "../", "/**/*.entity.{ts,js}")],
	synchronize: false,
	migrations: [path.join(__dirname, "../", "/migrations/*.{ts,js}")],
	cli: {
		migrationsDir: path.join(__dirname, "../", "/migrations")
	}
}

export default config