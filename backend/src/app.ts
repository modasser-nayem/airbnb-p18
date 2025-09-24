import express, { Application } from "express";
import cors from "cors";
import notFound from "./app/middlewares/notFound";
import globalErrorhandler from "./app/middlewares/globalErrorhandler";
import router from "./app/routes";
import config from "./app/config";

const app: Application = express();

// using middleware
app.use(
  cors({
    origin: [config.FRONTEND_URL, "https://airbnb17.vercel.app"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<div style="height:80vh; width:98vw; display:flex; justify-content:center;align-items:center;font-size:3rem;font-style: oblique;font-weight: bold;font-family:system-ui;color:purple;">Airbnb Server is Running...</div>',
    );
});

// Application Routes
app.use("/api/v1", router);

// route not found error
app.use(notFound);

// global error handler
app.use(globalErrorhandler);

export default app;
