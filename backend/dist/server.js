"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const http_1 = require("http");
const config_1 = __importDefault(require("./app/config"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(config_1.default.DB_URL);
            const server = (0, http_1.createServer)(app_1.default);
            server.listen(config_1.default.PORT, () => {
                console.log(`SERVER IS RUNNING AT ${config_1.default.PORT}`);
            });
        }
        catch (err) {
            console.log(err);
        }
    });
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
