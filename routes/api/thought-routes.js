const router = require('express').Router();
const {
  addThought,
  removeThought,
//   addReply,
//   removeReply
} = require('../../controllers/thought-controller');

// // /api/comments/<Id>
// router.route('/:friendId').post(addThought);

// // /api/comments/<pizzaId>/<commentId>
// router
//   .route('/:pizzaId/:commentId')
//   .put(addReply)
//   .delete(removeComment);

// // /api/comments/<pizzaId>/<commentId>/<replyId>
// router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;