var express = require('express');
const multer = require('multer');

// 기타 express 코드
var app = express();
var _storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, 'uploads/')
	},
	filename: function(req, file, cb) {
		cb(null, file.originalname);
	}
})
var upload = multer({ storage: _storage });

app.use('/user', express.static('uploads'));
app.set('view engine', 'jade');
app.set('views', './views_file');

app.get('/upload', (req,res)=>{
	res.render('upload');
});

app.post('/upload', upload.single('userfile'), (req, res) => {
	console.log(req.file);
	res.send('uploaded')
});

app.listen(3001, function(){
	console.log('Connected, 3001 port!');
})
