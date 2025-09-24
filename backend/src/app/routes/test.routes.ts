import { Router } from "express";
import { testController } from "../controller/test.controller";

const router = Router();

router.get("/test-api", testController.testApi);

export const testRoutes = router;
