import express from 'express'
// const express = require('express');

const app = express();
const port = 3000;

app.get('/', function (req, res) {

    res.status(401).json({
      ok:false,
      msg:'No hay token en la petición'
    })

    res.send({
        ok: true,
        msg: 'Todo salio bien'
    });

});

app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
