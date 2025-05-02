const router = require('express').Router();
// TODO: import Worker model, implement listing & requesting
router.get('/',  (req, res) => res.send('list worker types'));
router.post('/request', (req, res) => res.send('request a worker'));
module.exports = router;
