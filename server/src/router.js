const express = require("express");

const { userController } = require("./controllers/user/userController");

const router = express.Router();
router.use(express.json());

router.get("/", (_req, res) => {
  res.send("Hello World!");
});

router.post("/user", userController.create);
router.get("/user/:id", userController.read);

module.exports = router;
