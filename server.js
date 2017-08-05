var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var moiz={
	titles:'Moiz',
	date:'4 August',
	contents: ` <h1> Moiz Main Page !!</h1>
	<p><a href="/"> Home </a> </p> `
};
var infodata={
	titles:'Information',
	date:'3 August',
	contents: ` <h1> Information Page !!</h1>
	<p><a href="/"> Home </a> </p> `
};
function binded(data)
{
	title=data.titles;
	date=data.date;
	content=data.contents;
	var templateHtml=`<!DOCTYPE html>
<html>
<head>
	<title>${title}</title>
</head>
<body>
<p> Date : </p>
<p>  ${date}</p>
<h1> ${content}</h1>
</body>
</html>`;

return templateHtml;
}
mz=binded(moiz);
info=binded(infodata);
app.get('/moiz',function (req,res){
  //res.sendFile(path.join(__dirname, 'ui', 'moiz.html'));
  res.send(mz);
	
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/', function (req, res) {
  res.send(info);
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
