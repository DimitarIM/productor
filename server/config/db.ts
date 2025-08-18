import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

export const sql = neon(`postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`)

//# psql 'postgresql://neondb_owner:npg_7pEUACBX8iFN@ep-dawn-bush-a9uld6di-pooler.gwc.azure.neon.tech/neondb?sslmode=require&channel_binding=require'
