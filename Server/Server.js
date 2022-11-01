var express = require('express');
var app = express();
var mysql = require('mysql');
var fs = require('fs');
var cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser')

//Socket.io
const http = require('http');
const server = http.createServer(app);
// const {Server } = require('socket.io');

// const io = new  Server(server);

//đây là cors
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//CREATE EXPRESS APP
app.use(bodyParser.urlencoded({ extended: true }))

// express
app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));

//kết nối csdl
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'du_an_tot_nghiep1',
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
  }
})

// SET STORAGE
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

//Phần Realtime
const socketIo = require("socket.io")(server, {
  cors: {  // nhớ thêm cái cors này để tránh bị Exception nhé :D  ở đây mình làm nhanh nên cho phép tất cả các trang đều cors được.
    origin: "*",
  }
});

socketIo.on("connection", (socket) => { ///Handle khi có connect từ client tới
  console.log("New client connected" + socket.id);

  socket.on("sendDataClient", function (data) { // Handle khi có sự kiện tên là sendDataClient từ phía client
    socketIo.emit("sendDataServer", { data });// phát sự kiện  có tên sendDataServer cùng với dữ liệu tin nhắn từ phía server
  })

  socket.on("disconnect", () => {
    console.log("Client disconnected"); // Khi client disconnect thì log ra terminal.
  });
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
      var sql = "INSERT INTO account ( email, pass, ten, sdt , timelogin , lockacc , gioitinh) values('" + req.body.email + "' ,  '" + req.body.password + "' ,'" + req.body.fullName + "' ,'" + req.body.phoneNumber + "' ,'" + req.body.timeRegister + "','" + '1' + "','" + '0' + "'  );"
      con.query(sql, function (err, result, fields) {
        if (err) throw err;
      });
    }
  });
});
// SignIn
app.post("/dangnhap", (req, res) => {
  var sql = "SELECT * FROM account WHERE email= '" + req.body.email + "' AND pass= '" + req.body.passWord + "' ";
  con.query(sql, function (err, result, fields) {
    if (err) {
      res.send({ success: false, message: "Database không có kết nối!" });
    }
    if (result.length > 0) {
      var sql = "SELECT * FROM account WHERE email= '" + req.body.email + "' AND lockacc = '9999' ";
      con.query(sql, function (err, result, fields) {
        if (result.length > 0) {
          res.send({ success: false, message: "Ban!" });
        } else {
          var sql = "SELECT * FROM account WHERE email= '" + req.body.email + "' AND lockacc = '1' ";
          con.query(sql, function (err, result, fields) {
            if (result.length > 0) {
              res.send({ success: false, message: "LOCK!" });
            }
            else {
              var sql = "SELECT * FROM account WHERE email= '" + req.body.email + "' AND phanquyen = '9999' ";
              con.query(sql, function (err, result, fields) {
                if (result.length > 0) {
                  var sql = "UPDATE account SET timelogin = '" + req.body.dateTime + "' where email = '" + req.body.email + "'";
                  con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                    res.send({ success: true, message: "ADMIN!" });
                  });
                }
                else {
                  var sql = "UPDATE account SET timelogin = '" + req.body.dateTime + "' where email = '" + req.body.email + "'";
                  con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                    res.send({ success: true, message: "USER!" });
                  });
                }
              });
            }
          });
        }
      });
    } else {
      res.send({ success: false, message: "False!" });
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
//thông tin tài khoản cá nhân
app.post('/getaccountme', function (req, res) {
  var sql = "SELECT * FROM account WHERE email= '" + req.body.email + "' ";
  con.query(sql, function (err, result, fields) {
    if (err) {
      res.send({ success: false, message: "Database không có kết nối!" });
    } if (result.length > 0) {
      res.send(result);
    } else {
      res.send({ success: false, message: "False!" });
    }

  })
});
//Thời gian đăng nhập
app.post('/new-login', function (req, res) {
  var sql = "UPDATE account SET timelogin = '" + req.body.datetime + "' where email = '" + req.body.email + "'";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    if (result.affectedRows == 1) {
      res.send("sua_thanh_cong");
    }
  });
});
//Quên Mật Khẩu 
app.post("/quen-mat-khau", (req, res) => {
  var sql = "SELECT * FROM account WHERE email= '" + req.body.email + "' AND lockacc = '" + '0' + "' ";
  con.query(sql, function (err, result, fields) {
    if (err) {
      res.send({ success: false, message: "Database không có kết nối!" });
    }
    if (result.length > 0) {
      res.send({ success: true });

      var sql = "SELECT * FROM quenmatkhau WHERE email= '" + req.body.email + "' ";
      con.query(sql, function (err, result, fields) {
        if (err) {
          res.send({ success: false, message: "Database không có kết nối!" });
        }
        if (result.length > 0) {
          var sql = "SELECT * FROM quenmatkhau WHERE email= '" + req.body.email + "' AND duyet= '" + '0' + "' ";
          con.query(sql, function (err, result, fields) {
            if (result.length > 0) {
              var sql = "UPDATE quenmatkhau SET thoigian = '" + req.body.dateTime + "' , duyet =('" + '1' + "') where email = '" + req.body.email + "'";
              con.query(sql, function (err, result, fields) {
                if (err) throw err;
              });

            } else {
              var sql = "UPDATE quenmatkhau SET thoigian = '" + req.body.dateTime + "' where email = '" + req.body.email + "'";
              con.query(sql, function (err, result, fields) {
                if (err) throw err;
              });
            }
          });

        } else {
          var sqlite = "INSERT INTO quenmatkhau ( email, duyet, thoigian) values('" + req.body.email + "' ,  '" + '1' + "' ,'" + req.body.dateTime + "'  );"
          con.query(sqlite, function (err, result, fields) {
            if (err) throw err;
          });
        }
      });

    } else {
      res.send({ success: false, message: "Sai tài khoản!" });
    }
  });
});

//Update avatar thông tin cá nhân 
app.post('/getaccountme/edituploadfile', upload.single('file'), (req, res, next) => {
  const file = req.file;
  const form = req.body;
  if (file == "" || file == undefined) {
    if (form.file == "" || form.file == "undefined" || form.file == null || form.file == undefined) {
      var sql = "UPDATE account SET ten = ('" + form.ten + "'), sdt = ('" + form.sdt + "'), date = ('" + form.date + "'), gioitinh=('" + form.gioitinh + "'), diachi = ('" + form.diachi + "') where email = ('" + form.email + "')";
      con.query(sql, [imgsrc], function (err, result, fields) {
        if (err) throw err;
        res.send(file);
      })
    } else {
      var imgsrc = 'http://localhost:3001/images/' + form.file;
      var sql = "UPDATE account SET image = ('" + form.file + "'), ten = ('" + form.ten + "'), sdt = ('" + form.sdt + "'), date = ('" + form.date + "'), gioitinh=('" + form.gioitinh + "'), diachi = ('" + form.diachi + "') where email = ('" + form.email + "')";
      con.query(sql, [imgsrc], function (err, result, fields) {
        if (err) throw err;
        res.send(file);
      })
    }
  } else {
    var imgsrc = 'http://localhost:3001/images/' + file.filename;
    var sql = "UPDATE account SET image = ('" + file.filename + "'), ten = ('" + form.ten + "'), sdt = ('" + form.sdt + "'), date = ('" + form.date + "'), gioitinh=('" + form.gioitinh + "'), diachi = ('" + form.diachi + "') where email = ('" + form.email + "')";
    con.query(sql, [imgsrc], function (err, result, fields) {
      if (err) throw err;
      res.send(file);
    })
  }
})
//Del avatar thông tin cá nhân 
app.post('/getaccountme/deleteuploadfile', upload.single('file'), (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(file)
})
//Đổi Mật Khẩu
app.post("/doi-mat-khau", (req, res) => {
  var sql = "SELECT * FROM account WHERE email= '" + req.body.email + "' AND pass= '" + req.body.passwordOld + "' ";
  con.query(sql, function (err, result, fields) {
    if (err) {
      res.send({ success: false, message: "Database không có kết nối!" });
    }
    if (result.length > 0) {
      var sql = "UPDATE account SET pass = '" + req.body.rePasswordNew + "' where email = '" + req.body.email + "'";
      con.query(sql, function (err, result, fields) {
        if (err) throw err;
        if (result.affectedRows == 1) {
          res.send({ success: true, message: "Sua_Thanh_Cong!" });
        }
      });
    } else {
      res.send({ success: false, message: "False!Pass_Sai" });
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
  var sql = "insert into baocao (tenbaocao , nguoigui , nguoinhan , noidung , ghichubaocao , date , ketquabaocao , danhgia) values ('" + req.body.name_word + "' , '" + req.body.sender + "' , '" + req.body.receiver + "' , '" + req.body.text_title + "', '" + req.body.text_note + "', '" + req.body.date + "', '" + req.body.final_result + "', '" + req.body.evaluate + "')";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    if (result.affectedRows == 1) {
      res.send('ok');
    }
  });
})
//Sửa Báo Cáo
app.post('/editwork/editid', function (req, res) {
  var sql = "UPDATE baocao SET tenbaocao = ('" + req.body.name_word + "'), nguoigui =('" + req.body.sender + "'), nguoinhan =('" + req.body.receiver + "'), noidung =('" + req.body.text_title + "'), ghichubaocao =('" + req.body.text_note + "'), date =('" + req.body.date + "'), ketquabaocao =('" + req.body.final_result + "'), danhgia =('" + req.body.evaluate + "') where id = (" + req.body.id + ")";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    if (result.affectedRows == 1) {
      res.send('ok');
    }
  });
})
//Xoá Báo cáo 
app.post('/deleteword', function (req, res) {
  var sql = "delete from baocao where id = (" + req.body.id + ")";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    if (result.affectedRows == 1) {
      res.send('ok');
    }
  });
})


//Phần Bang Chấm Công
//Show C.việc
app.get('/showbangchamcong', function (req, res) {
  con.query("SELECT * FROM `bangchamcong` order by id desc", function (err, result, fields) {
    // console.log(result);
    if (err) throw err;
    res.send(result);
  });
});
//thêm C.Việc
app.post('/addbangchamcong', (req, res) => {
  var sql = "insert into bangchamcong ( ngay,nhanvien,congviec,vaitro,hoatdong,nhiemvu,gio,tuxa,duyet,ghichu,lydo) values('" + req.body.ngay + "','" + req.body.nhanvien + "','" + req.body.congviec + "','" + req.body.vaitro + "','" + req.body.hoatdong + "','" + req.body.nhiemvu + "','" + req.body.gio + "','" + req.body.tuxa + "','" + req.body.duyet + "','" + req.body.ghichu + "','" + req.body.lydo + "');";
  console.log(sql)
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    if (result.affectedRows == 1) {
      res.send("ok")
    }
  });
})
// Xóa C.Việc
app.post('/deletebangchamcong', (req, res) => {
  var idXoaa = req.body.id;
  console.log(idXoaa);
  var sql = "DELETE FROM bangchamcong WHERE id =" + idXoaa + "";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    if (result === "ok" || result.affectedRows === 1) {
      // var fs = require("fs");
      // var filePath = "./Images/"+tenhinhanh+"";
      // fs.unlink(filePath, deleteFileCallback);
      // function deleteFileCallback(error) {
      //   if (error) {
      //     console.log("Error in dleting file");
      //     console.log(error.message);
      //   } else {
      //     console.log("Deleted Successfully...");
      //   }
      // }
      res.send("ok");
    }
  });
})




// //lay dự án update
// app.get("/layeditsanpham/:id", function (req, res) {
//   var page = req.params.id;

//   var sql = "SELECT * FROM duan WHERE id = " + page;
//   con.query(sql, function (err, result, fields) {
//     if (err) throw err;
//     // console.log(result);

//     res.send(result);
//   });
// });

// // Sửa dự án
// app.post('/updateDuan', (req, res) => {
//   const idduan = req.body.idduan;
//   const tenduan = req.body.tenduan;
//   const tennhanvien = req.body.tennhanvien;
//   const ghichu = req.body.ghichu;


//   if (trong === 1 ) {
//     var sql = "UPDATE duan SET tenduan='" + tenduan + "',tennhanvien='" + tennhanvien + "',ghichu='" + ghichu + "' WHERE idduan = " + idduan + "";
  
//    console.log(sql);
//     con.query(sql, function (err, result, fields) {
//       if (err) throw err;
//           if (error) {
//             console.log("Error in dleting file");
//             console.log(error.message);
//           } else {
//             console.log("Deleted Successfully...");
//             res.send("ok");
//           }
    
//     });
//   } else if (trong === 0) {
//     var sql = "UPDATE duan SET tenduan='" + tenduan + "',tennhanvien='" + tennhanvien + "',ghichu='" + ghichu + "' WHERE idduan = " + idduan + "";
//     con.query(sql, function (err, result, fields) {
//       if (err) throw err;
//       if (result === "ok") {
//         res.send("ok");
//       }
//       res.send("ok");
//     });
//   }

// })



// ERR 404
app.use(function (req, res, next) {
  res.status(404);
  res.send('404: err');
});

//server
app.listen(3001, function () {
  console.log('Example app listening on port 3001! "http://localhost:3001"  ');
});


