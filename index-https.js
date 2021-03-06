var express = require('express')
var fs = require('fs')
var https = require('https')
var multer = require('multer');
var upload = multer();
var cors = require('cors')
var app = express()

app.use(cors())
app.use(express.static('public'))


app.get('/', function (req, res) {
        res.set('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, '/', 'index.html'));
})

app.put('/api/upload-photo', upload.any(), function (req, res) {
        //file_name =   new Date().getTime() + '_'+ Math.floor(100000000 + Math.random() * 900000000) + '.jpg';
    file_name = req.body.file_name + '.jpg';

    if (! fs.existsSync('public/images/' + file_name)) {
        fs.writeFile( 'public/images/' + file_name, req.files[0].buffer, (err) => {
            if (err) {
                res.status(500).send('An error occurred: ' + err.message);
            } else {
                res.status(200).send({url: req.protocol + '://' + req.get('host')  + '/images/' + file_name});
            }
        });
    } else {
        res.status(200).send({ url: req.protocol + '://' + req.get('host')  + '/images/' + file_name} );
    }
})

app.put('/api/upload-video', upload.any(), function (req, res) {
        //file_name =   new Date().getTime() + '_'+ Math.floor(100000000 + Math.random() * 900000000) + '.mp4';
    file_name = req.body.file_name + '.mp4';
    if (! fs.existsSync('public/videos/' + file_name)) {
        fs.writeFile( 'public/videos/' + file_name, req.files[0].buffer, (err) => {
            if (err) {
                res.status(500).send('An error occurred: ' + err.message);
            } else {
                res.status(200).send({url: req.protocol + '://' + req.get('host') + '/videos/' + file_name});
            }
        });
    } else {
        res.status(200).send({ url: req.protocol + '://' + req.get('host')  + '/videos/' + file_name} );
    }

})

https.createServer({
  key: fs.readFileSync('/etc/letsencrypt/live/telegram.premiumread.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/telegram.premiumread.com/fullchain.pem')
}, app)
.listen(3000, function () {
  console.log('Example app listening on port 3000! Go to ..... https://localhost:3000/')
})

