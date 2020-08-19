//Servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//configurar nunjucks(teamplate engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

//Inicio e configuracao do servidor
server
//receber os dados do req.body
.use(express.urlencoded({extended:true}))
// configurar arquivos estaticos (css,scripts,imagens)
.use(express.static("public"))
//rotas de aolicação
.get("/",pageLanding) 
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start no servidor
.listen(5500)