var express = require('express');
var app = express();
var mysql = require('mysql');
var fs = require('fs');
var cors = require('cors');
const multer = require('multer');

//Socket.io
const http = require('http');
const server = http.createServer(app);
// const {Server } = require('socket.io');

// const io = new  Server(server);

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

//Phần Realtime
const socketIo = require("socket.io")(server, {
  cors: {  // nhớ thêm cái cors này để tránh bị Exception nhé :D  ở đây mình làm nhanh nên cho phép tất cả các trang đều cors được.
      origin: "*",
  }
}); 

socketIo.on("connection", (socket) => { ///Handle khi có connect từ client tới
  console.log("New client connected" + socket.id); 

  socket.on("sendDataClient", function(data) { // Handle khi có sự kiện tên là sendDataClient từ phía client
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
      var sql = "INSERT INTO account ( email, pass, ten, sdt , timelogin , lockacc) values('" + req.body.email + "' ,  '" + req.body.password + "' ,'" + req.body.fullName + "' ,'" + req.body.phoneNumber + "' ,'" + req.body.timeRegister + "','" + '1' + "' );"
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
                    res.send({ success: true , message: "ADMIN!"});
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


//Phần Công việc & Chấm Công
//Show C.việc
app.get('/showtaskmission', function (req, res) {
  con.query("SELECT * FROM `congviec` order by id desc", function (err, result, fields) {
    // console.log(result);
    if (err) throw err;
    res.send(result);
  });
});
//thêm C.Việc
app.post('/addmission', (req, res) => {
  var sql = "insert into congviec ( tencongviec,nhanvien,vaitro,hoatdong,thoigianhoanthanh,ghichu) values('" + req.body.tencongviec + "','" + req.body.nhanvien + "','" + req.body.vaitro + "','" + req.body.hoatdong + "','" + req.body.thoigianhoanthanh + "','" + req.body.ghichu + "');";
  console.log(sql)
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    if (result.affectedRows == 1) {
      res.send("ok")
    }
  });
})
// Xóa C.Việc
app.post('/deleteMission', (req, res) => {
  var idXoaa = req.body.id;
  console.log(idXoaa);
  var sql = "DELETE FROM congviec WHERE id =" + idXoaa + "";
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


