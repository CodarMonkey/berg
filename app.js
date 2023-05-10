



// iniciando servidor
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const path = require('path')
const mime = require('mime-types')
const fs = require('fs')


const downloadDir = path.join(__dirname, '/public/downloads');

// Configuração do Handlebars
app.engine('.hbs', exphbs.engine({extname: '.hbs'}))
app.set('view engine', '.hbs')

// Define o diretório público para arquivos estáticos (CSS, JS, imagens, etc.)
app.use('/public', express.static(__dirname + '/public'))



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
	res.render('dash')
	//res.sendFile(__dirname+'/view/site/dash.html')
})


app.get('/download', (req, res)=>{
	fs.readdir(downloadDir, (err, files) => {
		if (err) {
		  console.error(err)
		  return res.status(500).send('Erro ao listar arquivos para download')
		}
	
		// Renderiza o arquivo index.handlebars e passa os nomes dos arquivos
		res.render('download', { files: files })
	  })
	})
	
	// Rota para fazer o download do arquivo
	app.get('/download/:filename', (req, res) => {
	  const file = path.join(downloadDir, req.params.filename)
	
	  // Verifica se o arquivo existe
	  if (fs.existsSync(file)) {
		// Define o cabeçalho para download
		res.setHeader('Content-disposition', 'attachment; filename=' + req.params.filename)
		res.setHeader('Content-type', 'application/octet-stream')
	
		// Cria o fluxo de leitura do arquivo e o envia para o cliente
		const fileStream = fs.createReadStream(file)
		fileStream.pipe(res)
	  } else {
		return res.status(404).send('Arquivo não encontrado')
	  }
	})


app.get('/contato', (req, res)=>{
	res.render('contato')
	//res.sendFile(__dirname+'/view/site/dash.html')
})


app.listen(8888,function(){
	console.log('Servidor rodando em http://localhost:8888');
})
