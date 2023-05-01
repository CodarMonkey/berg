
/*var http = require('http')

http.createServer(function(req, res){
	res.end('ola')
}).listen(8888);
	
console.log('servidor rodando');*/



// iniciando servidor
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()


app.use('/public', express.static(__dirname + '/public'))

app.engine('hbs', exphbs.engine({
	//layoutsDir: 'views/layouts/',
    //defaultLayout: null,
    extname: '.hbs'
}))
app.set('view engine', 'hbs') 
//app.set("views", "./views");




app.get('/', (req, res)=>{
	res.render('home')
	//res.sendFile(__dirname+'/view/site/index.html')
})

app.get('/sobre', (req, res)=>{
	res.render('sobre')
	//res.sendFile(__dirname+'/view/site/contato.html')
})

app.get('/login', (req, res)=>{
	res.render('login')
	//res.sendFile(__dirname+'/view/site/sobre.html')
})

app.get('/serviso', (req, res)=>{
	res.render('serviso')
	//res.sendFile(__dirname+'/view/site/serviso.html')
})

app.get('/dash', (req, res)=>{
	//res.sendFile(__dirname+'/view/site/dash.html')
})




app.listen(8888,function(){
	console.log('Servidor rodando em http://localhost:8888');
})
