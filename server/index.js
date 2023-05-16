const app = require('express')() ;

const cors = require('cors');

app.use(cors());

app.get('/', function (req, res) {
    res.send('GET request to homepage');
  });

app.get('/check', function(req,res){
    res.send('Hit ');
});

  app.listen(5000, () => {          
    console.log(`Now listening on port 5000`); 
});