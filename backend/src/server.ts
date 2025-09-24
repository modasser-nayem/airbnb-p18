/* eslint-disable no-console */
import app from "./app";
import mongoose from "mongoose";
import { createServer } from "http";
import config from "./app/config";

async function main() {
  try {
    await mongoose.connect(config.DB_URL);

    const server = createServer(app);

    server.listen(config.PORT, () => {
      console.log(`SERVER IS RUNNING AT ${config.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

// process.on("unhandledRejection", (err) => {
//   console.log(`Unhandled Rejection is detected. Shutting down server...`, err);
//   if (server) {
//     server.close(() => {
//       process.exit(1);
//     });
//   }
//   process.exit(1);
// });

// process.on("uncaughtException", (err) => {
//   console.log(`Uncaught Exception is detected. Shutting down server...`, err);

//   process.exit(1);
// });

main();
