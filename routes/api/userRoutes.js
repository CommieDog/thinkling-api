const router = require('express').Router();

router.route('/').get(testRoute);

function testRoute(req, res)
{
    res.send("Right route!");
}

module.exports = router;