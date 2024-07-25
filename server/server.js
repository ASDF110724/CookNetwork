const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();
// require('dotenv').config({ path: '.env.local' })
const app = express();

// Morgan logging dev 모드 설정
app.use(morgan('dev'));

// CORS 설정
app.use(cors({
    origin: 'http://localhost:5000'
}));

// Body parser
app.use(express.json());

// API 라우트
app.get('/hello', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

// 여기에 다른 API 라우트들을 추가합니다...

// 회원가입 라우트 연결
const signupRouter = require("./router/signUp.js");

// 회원가입 라우트 요청시 사용
app.use("/signup",signupRouter);

// 요청 URL 확인
app.use((req, res, next) => {
  console.log('Requested URL:', req.url);
  next();
});


// 정적 파일 서빙 (프로덕션 모드)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
} else {
    app.use(express.static(path.join(__dirname, '../client')));
}

// 위에 해당하지 않는 모든
// API 404 에러 처리

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// React app의 라우팅을 위한 와일드카드 라우트
if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
} else {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'));
    });
}


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

