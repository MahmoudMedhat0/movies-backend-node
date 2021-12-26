const {
  createList,
  getList,
  deleteList,
} = require("../controllers/list-controll");
const verify = require("../middlewares/verifyToken");

const router = require("express").Router();

router.get("/", verify, getList);
router.delete("/:id", verify, deleteList);
router.post("/", verify, createList);
module.exports = router;
