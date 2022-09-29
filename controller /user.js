const { respose, request} = require('express');


const usersGet = (req = request, res = respose) =>{
    const query = req.query

    res.json({
        msg: 'get API- controlador',
        query
    })
}

const usersPost =  (req, res= respose) =>{
    const body = req.body;

    res.json({
        msg: 'post API - controller', 
        body
    })
}

const usersPut =  (req, res= respose) =>{
    const id = req.params.id
    res.json({
        msg: 'put API - controller',
        id

    })
}

const usersDelete =  (req, res= respose) =>{
    const id = req.params.id
    res.json({
        msg: 'delete API - controller',
        id
    })
}


module.exports = {
    usersGet, 
    usersPost,
    usersDelete,
    usersPut
}