var express = require ('express');
var app = express ()
 app.set ('view engine', 'ejs');
 app.set ('views', 'assets');
 app.set ('views', 'css');
 app.set ('views', 'view');
 app.use (express.static('assets'));
 app.use (express.static('css'));
 app.use (express.static('view'));
  
app.get ('/',function(req,res){
    res.render('saja');
});
app.listen(9090)

