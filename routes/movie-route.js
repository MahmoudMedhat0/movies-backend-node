const {
  updateMovie,
  getMovieById,
  getAllMovies,
  deleteMovie,
  getRandomMovie,
  createMoview,
} = require("../controllers/movie-controller");
const verify = require("../middlewares/verifyToken");

const router = require("express").Router();

//update
router.put("/:id", verify, updateMovie);

//delete
router.delete("/:id", verify, deleteMovie);
//get

router.get("/find/:id", getMovieById);

//getAll
router.get("/", verify, getAllMovies);

// get random movie
router.get("/random", getRandomMovie);

//create new movie
router.post("/", verify, createMoview);

module.exports = router;
