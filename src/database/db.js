import pg from "pg"
import dotenv from "dotenv"
dotenv.config()

const {Pool} = pg

const configDatabase={

    connectionString:process.env.Database_URL,
}

export const db = new Pool(configDatabase)