# Cook Network Project

이 프로젝트는 React와 Express를 사용한 웹 애플리케이션입니다. 클라이언트는 Vite를 사용하여 구축되었으며, 서버는 Node.js와 Express를 기반으로 합니다.

## 프로젝트 구조

```
CookNetwork/
├── client/
│   ├── public/ 클라이언트 정적 자료 저장소
│   ├── src/ 모듈별 jsx파일 위치
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── public/
│   ├── server.js
│   └── package.json
├── .gitignore
├── package.json
└── README.md
```

## 설치 및 설정

1. 저장소 클론:
   ```
   본인 깃허브로 프로젝틀 Fork
   git clone [fork로 가져간 본인 프로젝트 URL]
   cd CookNetwork
   git checkout -b [개인 작업 branch 이름]
   
   git add .
   git commit -m "작업 내용 설명"
   git push origin [개인 작업 branch 이름]

   git remote add upstream [원본 저장소 URL]
   git fetch upstream staging
   git rebase upstream/staging
   ```

2. 의존성 설치:
   ```
   npm run install:all --force
   ```

## 개발 모드 실행

```
npm run dev
```

이 명령어는 클라이언트(Vite 개발 서버)와 서버를 동시에 실행합니다.

## 프로덕션 빌드 및 실행

```
npm run prod
```

이 명령어는 클라이언트를 빌드하고 서버를 프로덕션 모드로 실행합니다.

## 주요 스크립트

- `npm run dev`: 개발 모드로 클라이언트와 서버 실행
- `npm run build`: 클라이언트 빌드
- `npm start`: 서버 실행
- `npm run prod`: 프로덕션 모드로 빌드 및 실행

## 기술 스택

- 프론트엔드: React, Vite
- 백엔드: Node.js, Express.js
- 기타: Concurrently (동시 스크립트 실행)

## 협업 가이드라인

1. 브랜치 전략: Fork와 Pull Request 으로 협업 진행. clone 후 각자 브랜치에서 작업 후 Pull Request 해주세요.
2. 코드 리뷰 프로세스: [코드 리뷰 프로세스 설명]
3. 커밋 메시지 컨벤션: [커밋 메시지 작성 규칙 설명]

## 주의사항

- `.env` 파일은 저장소에 포함되지 않습니다. 팀원들과 별도로 공유해야 합니다.
- `node_modules` 디렉토리는 `.gitignore`에 포함되어 있으므로, 클론 후 반드시 `npm install:all`을 실행해야 합니다.

## 문제 해결

.env를 최상위폴더(COOKNETWORK)에 넣지 않을 경우 에러 발생
.env.local 사용시 gitHUB에 올라가지 않습니다. // require('dotenv').config({ path: '.env.local' }) 사용

## 기여 방법

[프로젝트에 기여하는 방법 설명]

Copyright (c) 2024 Cook Network 팀

이 프로젝트는 [코드랩아카데미](https://www.codelabit.co.kr/)의 교육 과정의 일환으로 개발되었습니다.
