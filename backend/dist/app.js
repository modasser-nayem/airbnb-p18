"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const globalErrorhandler_1 = __importDefault(require("./app/middlewares/globalErrorhandler"));
const routes_1 = __importDefault(require("./app/routes"));
const config_1 = __importDefault(require("./app/config"));
const app = (0, express_1.default)();
// using middleware
app.use((0, cors_1.default)({
    origin: [config_1.default.FRONTEND_URL, "https://airbnb17.vercel.app"],
    credentials: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res
        .status(200)
        .send('<div style="height:80vh; width:98vw; display:flex; justify-content:center;align-items:center;font-size:3rem;font-style: oblique;font-weight: bold;font-family:system-ui;color:purple;">Airbnb Server is Running...</div>');
});
// Application Routes
app.use("/api/v1", routes_1.default);
// route not found error
app.use(notFound_1.default);
// global error handler
app.use(globalErrorhandler_1.default);
exports.default = app;
