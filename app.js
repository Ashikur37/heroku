const express=require('express')
const app=express()
const fs=require('fs')
const hbs=require('hbs')
app.use(express.static(__dirname+'/public'))
app.use((req,res,next)=>{
    const log=` ${req.headers.location} ${new Date().getDate()}  ${req.method} ${req.url}`
    fs.appendFile('log.txt',log,(err)=>{
        console.log(err)
    })
    next()
})
app.set('view engine','hbs')
hbs.registerPartials(__dirname+'/views/partials')
hbs.registerHelper('currentYear',()=>new Date().getFullYear())
app.get('/',(req,res)=>{
    res.json({
        msg:'hello'
    })
})
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        name:'piash vai'
    })
})
app.listen(3000)