const router = require('express').Router();
// TODO: import Item model, implement CRUD
router.get('/',    (req, res) => res.send('list items'));
router.post('/',   (req, res) => res.send('create item'));
router.put('/:id', (req, res) => res.send('update item'));
router.delete('/:id',(req,res)=> res.send('delete item'));
module.exports = router;
