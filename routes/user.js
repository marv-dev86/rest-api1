const express = require('express');
const router = express.Router();

const {usersGet, usersPost, usersPut, usersDelete} = require('../controller /user');

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })

router.get('/', usersGet)

router.post('/', usersPost)

router.put('/:id', usersPut)

router.delete('/:id', usersDelete)

module.exports = router