const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.get('/',(req,res,next)=>{
    res.send('Hello world!');
});

module.exports = router;