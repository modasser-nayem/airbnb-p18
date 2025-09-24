"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testRoutes = void 0;
const express_1 = require("express");
const test_controller_1 = require("../controller/test.controller");
const router = (0, express_1.Router)();
router.get("/test-api", test_controller_1.testController.testApi);
exports.testRoutes = router;
