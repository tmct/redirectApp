var express = require('express');
var router = express.Router();

/* Redirect back to index, with query string parameter. */
router.get('/', function(req, res, next) {
  res.redirect('index?token=exampleToken');
});

module.exports = router;
