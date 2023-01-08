// express 모듈 호출
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const mysql = require('./routes/mysql');
const bodyparser = require('body-parser');

// 다른 도메인, 다른 프로토콜, 다른 포트에 있는 리소스를 요청
const cors = require('cors');

// server port 4000 할당(클라이언트와 다른 번호)
const PORT = process.env.PORT || 4000;

// 특정 도메인만 허용하고 싶으면 corsOptions 사용
app.use(cors());
app.use(bodyparser.json());

// 클라이언트로부터 받은 http 요청 메시지 형식에서 body 데이터 해석을 위함
app.use(express.urlencoded({extended : true}));

mysql.connect();
app.use(express.static(__dirname + './routes'));

// var agree = require('./routes/agree');
// var diary = require('./routes/diary')
// var edit = require('./routes/edit');
// var findid = require('./routes/findid')
// var findpw = require('./routes/findpw');
// var home = require('./routes/home')
var join = require('./routes/join');
// var login = require('./routes/login')
// var mypage = require('./routes/mypage');
// var newdiary = require('./routes/newdiary');

// app.use('/agree', agree);
// app.use('/diary', diary);
// app.use('/edit', edit);
// app.use('/findid', findid);
// app.use('/findpw', findpw);
// app.use('/', home);
app.use('/join', join);
// app.use('/login', login);
// app.use('/mypage', mypage);
// app.use('/newdiary', newdiary);

// http://localhost:4000/ 으로 접속 시 응답 메세지
server.listen(PORT, () => {
    console.log(`Server run : htt://localhost:${PORT}/`)
})