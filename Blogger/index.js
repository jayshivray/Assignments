const express        = require('./node_modules/express');
const bodyParser     = require('./node_modules/body-parser'); 
const path           = require('path');
const fs             = require('fs'); 
//const https          = require('https');  
const http          = require('http'); 
const cors           = require('./node_modules/cors') 
const app            = express();
const conf           = require('./config/app');
                       require('./db/conn');
const _IMAGES     = express.static(__dirname+'/public/images');
const _SSL        = express.static(__dirname+'/SSL');
const _UPLOADS    = express.static(__dirname+'/uploads');
var jsonParser    = bodyParser.json();// create application/json parser

app.use('/images',_IMAGES);
app.use('/uploads',_UPLOADS);
app.use(cors());
app.use('/',jsonParser,require('./routes'));

//exporting dir path available for all modules
module.exports.root = __dirname;

//use self sign certificate here
const httpOptions = {
  cert:fs.readFileSync(path.join(__dirname,'SSL','server.cert')),
  key:fs.readFileSync(path.join(__dirname,'SSL','server.key')),
}

const port = process.env.port || 300;
//settings proxy here  
if(conf.proxy.proxyValue=='1'){
  process.env.HTTP_PROXY  = 'http://'+conf.proxy.proxyAddress+':'+conf.proxy.port; 
}

http.createServer(app).listen(port,()=>{
  console.log('server started on https://localhost:300');
});
