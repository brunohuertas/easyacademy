var express = require ('express');

var servidor = express();
servidor.use(express.static(__dirname + '/public'));

servidor.get('/',function(req,res){
	res.sendFile(__dirname + "/index.html");

})

servidor.listen(3000, function(err) {
	if (err) return console.log('hubo error'), process.exit(1);
})