const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const data = await Comment.findAll()
    res.status(400).json(data)
  } catch(err) {
    res.status(400).json(err);
  }
});

// CREATE POST ROUTE TO CREATE COMMENT
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id, // Set the user_id of the comment to the logged-in user's id
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Export the router
module.exports = router;
