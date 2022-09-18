const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');
const commentRoutes = require('./comment-routes');

// add prefix of `/pizza` to routes created in `pizza-routes.js`
router.use('/pizzas', pizzaRoutes);
// for comments
router.use('/comments', commentRoutes);

module.exports = router;