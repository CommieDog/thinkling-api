const router = require('express').Router();
const { getThought, getThoughts, createThought, updateThought, deleteThought, addReaction, deleteReaction } = require("../../controllers/thoughtController");

router.route('/').get(getThoughts).post(createThought);

router.route("/:id").get(getThought).put(updateThought).delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction);

module.exports = router;