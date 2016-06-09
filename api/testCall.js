var express = require('express');
var router = express.Router();

router.post('/api/testCall', function(req, res, next) {
    console.log('API called');

});

module.exports = router;