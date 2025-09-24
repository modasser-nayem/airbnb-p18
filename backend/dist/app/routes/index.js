"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const test_routes_1 = require("./test.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/",
        route: test_routes_1.testRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
