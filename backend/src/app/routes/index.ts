import { Router } from "express";
import { testRoutes } from "./test.routes";
const router = Router();
const moduleRoutes = [
  {
    path: "/",
    route: testRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
