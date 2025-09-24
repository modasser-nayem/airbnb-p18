import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

if (!process.env.NODE_ENV) {
  // eslint-disable-next-line no-console
  console.error("Please set NODE_ENV");
}

export default {
  NODE_ENV: process.env.NODE_ENV as string,
  PORT: process.env.PORT,
  DB_URL: process.env.DATABASE_URL as string,
  FRONTEND_URL: process.env.FRONTEND_URL as string,
};
