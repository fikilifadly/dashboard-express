const express = require("express");
const router = express.Router();

// routers
router.use("/user", user);
router.use("/task", task);
router.use("/subtask", subTask);

module.exports = router;
