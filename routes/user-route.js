const {
  updateUser,
  deleteUser,
  getUserById,
  getAllUsers,
  getUserStats,
} = require("../controllers/user-controller");
const verify = require("../middlewares/verifyToken");

const router = require("express").Router();
//update
router.put("/:id", verify, updateUser);

//delete
router.delete("/:id", verify, deleteUser);
//get

router.get("/find/:id", getUserById);

//getAll
router.get("/", verify, getAllUsers);

// get user stats
router.get("/stats",getUserStats)

module.exports = router;
