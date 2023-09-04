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
})


module.exports = router;
