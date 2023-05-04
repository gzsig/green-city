const express = require("express");

const { userController } = require("./controllers/user/userController");

const router = express.Router();
router.use(express.json());

router.get("/", (_req, res) => {
  res.send("Hello World!");
});

router.delete("/user/:id", userController.remove);
router.get("/user/:id", userController.get);
router.patch("/user", userController.update);
router.post("/user", userController.insert);

module.exports = router;
