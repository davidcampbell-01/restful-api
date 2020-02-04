const router = require('express').Router()
const jets = require('../controllers/jets')
const users = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/jets')
  .get(jets.index)
  .post(secureRoute, jets.create)

router.route('/jets/:id')
  .get(jets.show)
  .delete(secureRoute, jets.deleteJet)
  .put(secureRoute, jets.edit)

router.route('/jets/:id/comments')
  .post(secureRoute, jets.commentCreate)

router.route('/jets/:id/comments/:commentId')
  .delete(secureRoute, jets.commentDelete)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

module.exports = router