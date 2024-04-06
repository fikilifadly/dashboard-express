const express = require("express");
const router = express.Router();
const user = require("./user");
const errorHandler = require("../middlewares/ErrorHandler");

// routers
router.use(user);
router.use(errorHandler);

module.exports = router;
