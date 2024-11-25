const express = require("express");
const taskController = require("../controllers/taskController");

const router = express.Router();

// Map routes to controller functions
router.get("/", taskController.getAllTasks);
router.post("/", taskController.createTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
