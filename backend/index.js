const express = require('express')
const app = express()

const conn = require('./db/conn')

// Imports Modelos
// Obs.: só o fato delas estarem aqui quando rodar o projeto elas já são criadas.
const Usuario = require('./models/Usuario')
app.post('/users/create', async (req, res)=>{
    const nome = req.body.nome


    // O inputcheckbox quando vem marcado seu value é 'on', quando vem desmarcado seu value é undefined e o undefined se comporta como false também;
    console.log(req.body)

    await Usuario.create({nome}) // espera o usuário ser criado para só depois redirecioná-lo

    res.redirect('/')

})


conn.sync()
    .then(() => {
        app.listen(3307)
    }).catch(err => console.log(err))
