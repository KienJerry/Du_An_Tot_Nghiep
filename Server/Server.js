var express = require('express');
var app = express();
var mysql = require('mysql');
var fs = require('fs');
var cors = require('cors');

//đây là cors
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// express
app.use(express.static('public'));

//kết nối csdl
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:'du_an_tot_nghiep',
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/', (req, res) => {
    res.send('Hello World Babe!')
  })

// Hiển Thị Danh Sách Dự Án
app.get('/viewduan', (req, res) => {
  var sql = "SELECT * FROM `duan` ORDER BY idduan DESC ";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result)
  });
})

//them dự án
app.post('/addDuan', (req, res) => {
  var sql = "insert into duan ( tenduan) values('" + req.body.tenduan + "');";
  console.log(sql)
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    if (result.affectedRows == 1) {
      res.send("ok")
    }
  });
})


//SignUp
app.post("/dangky", (req, res) => {
  
    var sql = "SELECT * FROM account WHERE email= '" + req.body.email + "' ";
   con.query(sql, function (err, result, fields) {
     if (err) {
       res.send({ success: false, message: "Database không có kết nối!" });
     }
     if (result.length > 0) {
       res.send({ success: false });
     } else {
       res.send({ success: true });
       var sql = "INSERT INTO account ( email, pass, ten) values('" + req.body.email + "' ,  MD5('"+req.body.pass +"') ,'"+ req.body.ten +"' );"
       console.log(sql);
       
       con.query(sql, function (err, result, fields) {
         if (err) throw err;
       });
     }
   });
  });
  
  // SignIn
  app.post("/dangnhap", (req, res) => {
   var sql ="SELECT * FROM account WHERE email= '" +req.body.username +"' AND pass= MD5('" +req.body.password +"')";
   console.log(sql);
   con.query(sql, function (err, result, fields) {
     if (err) {
       res.send({ success: false, message: "Database không có kết nối!" });
     }
     if (result.length > 0) {
       res.send({ success: true });;
     } else {
       res.send({ success: false, message: "Sai tài khoản!" });
     }
   });
  });

// ERR 404
app.use(function(req, res, next) {
    res.status(404);
    res.send('404: err');
});

//server"
app.listen(3001, function () {
    console.log('Example app listening on port 3001! "http://localhost:3001  ');
});


