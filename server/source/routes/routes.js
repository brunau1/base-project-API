const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.get('/',(req,res)=>{
    res.send('Hello world!');
});

module.exports = router;