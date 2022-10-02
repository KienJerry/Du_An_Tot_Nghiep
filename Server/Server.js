var express = require('express');
var app = express();
var mysql = require('mysql');
var fs = require('fs');
var cors = require('cors');
const multer = require('multer');

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
  database: 'du_an_tot_nghiep',
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

//Lưu hình ảnh vào file public/images và edit tên ảnh
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, 'public/images')  //Đường link uploads ảnh 
  },
  filename: (req, file, callBack) => {
    const myArray = file.originalname.split(".");
    let imgname = new Date().getTime().toString() + "." + myArray[myArray.length - 1];  // Đặt lại tên image thành date + time + .(đuôi ảnh)
    callBack(null, `${imgname}`)
    // callBack(null, imgname+`${file.originalname}`)
  }
})
let upload = multer({ storage: storage })

// Hiện thị hình ảnh mục image
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World Babe!')
})

//Fix hình ảnh :D
app.get('/images', function (req, res) {
  res.send('hình ảnh!');
});

//Phần Tài Khoản
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
      var sql = "INSERT INTO account ( email, pass, ten, sdt , timelogin , lockacc) values('" + req.body.email + "' ,  MD5('" + req.body.passWord + "') ,'" + req.body.fullName + "' ,'" + req.body.phoneNumber + "' ,'" + req.body.timeRegister + "','" +  '1' + "' );"
      con.query(sql, function (err, result, fields) {
        if (err) throw err;
      });
    }
  });
});
// SignIn
app.post("/dangnhap", (req, res) => {
  var sql = "SELECT * FROM account WHERE email= '" + req.body.email + "' AND pass= MD5('" + req.body.passWord + "')";
  con.query(sql, function (err, result, fields) {
    if (err) {
      res.send({ success: false, message: "Database không có kết nối!" });
    }
    if (result.length > 0) {
      res.send({ success: true });
    } else {
      res.send({ success: false, message: "Sai tài khoản!" });
    }
  });
});
//Hiển thị thông tin tài khoản
app.get('/showaccount', function (req, res) {
  con.query("SELECT * FROM `account` order by id desc", function (err, result, fields) {
    // console.log(result);
    if (err) throw err;
    res.send(result);
    });
});
//Thời gian đăng nhập
app.post('/new-login' , function(req, res){
  var sql = "UPDATE account SET timelogin = '"+req.body.datetime+"' where email = '"+req.body.email+"'";
  con.query(sql, function(err, result, fields){
    if(err) throw err;
    if(result.affectedRows == 1){
      res.send("sua_thanh_cong");
    }
  });
})


//Phần báo cáo
//Show báo cáo
app.get('/showwork', function (req, res) {
  con.query("SELECT * FROM `baocao` order by id desc", function (err, result, fields) {
    // console.log(result);
    if (err) throw err;
    res.send(result);
    });
});
//gửi báo cáo
app.post('/addwork', function (req, res) {
  var sql = "insert into baocao (tenbaocao , nguoigui , nguoinhan , noidung , ghichubaocao , date , ketquabaocao , danhgia) values ('"+req.body.name_word+"' , '"+req.body.sender+"' , '"+req.body.receiver+"' , '"+req.body.text_title+"', '"+req.body.text_note+"', '"+req.body.date+"', '"+req.body.final_result+"', '"+req.body.evaluate+"')";
      con.query(sql , function(err, result, fields){
        if(err) throw err;
        if(result.affectedRows == 1){
          res.send('ok');
        }
      });
})
//Sửa Báo Cáo
app.post('/editwork/editid', function(req, res){
  var sql = "UPDATE baocao SET tenbaocao = ('"+req.body.name_word+"'), nguoigui =('"+req.body.sender+"'), nguoinhan =('"+req.body.receiver+"'), noidung =('"+req.body.text_title+"'), ghichubaocao =('"+req.body.text_note+"'), date =('"+req.body.date+"'), ketquabaocao =('"+req.body.final_result+"'), danhgia =('"+req.body.evaluate+"') where id = ("+req.body.id+")";
  con.query(sql, function(err, result, fields){
    if(err) throw err;
    if(result.affectedRows == 1){
      res.send('ok');
    }
  });
})
//Xoá Báo cáo 
app.post('/deleteword', function(req, res){
  var sql = "delete from baocao where id = ("+req.body.id+")";
  con.query(sql, function(err, result, fields){
    if(err) throw err;
    if(result.affectedRows == 1){
      res.send('ok');
    }
  });
})


//Phần Công việc & Chấm Công
//Show C.việc
app.get('/showtaskmission', function (req, res) {
  con.query("SELECT * FROM `congviec` order by id desc", function (err, result, fields) {
    // console.log(result);
    if (err) throw err;
    res.send(result);
    });
});
// ERR 404
app.use(function (req, res, next) {
  res.status(404);
  res.send('404: err');
});

//server
app.listen(3001, function () {
  console.log('Example app listening on port 3001! "http://localhost:3001"  ');
});


