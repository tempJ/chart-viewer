"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/chart", ctrl.output.chart);

router.post("/chart", ctrl.process.chart);

module.exports = router;