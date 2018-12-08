let express = require('express');
let router = express.Router()


router.get('/create',(req,res) =>{
    res.send('Create cat!!!')
});

router.get('/details/:id',(req,res) =>{
    res.send(`Cats with id: ${req.params.id}`)
});

module.exports = router;
