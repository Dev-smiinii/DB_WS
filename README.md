# DB-WS
 Team Project

1. 화면 구현
    - index(슬라이드, 공지사항, 로그인버튼, 회원가입)
        - 회원가입
            - id
            - pw
        - 유저 프로필
        - list
            - write
            - view
                - delete
                - modify
                    - update

2. db스키마
    - 공지사항 테이블
        - id
        - title
        - content
        - created_at
    - 게시판 테이블
        - id
        - title
        - content
        - writer
        - created_at
        - hit
    - 사용자 테이블
        - userid
        - userpw
        - lv

3. 서버구현
```powershell
/
├── lib
│   └── jwt.js
├── node_modules
├── src
│   ├── auth
│   │   └── auth.middleware.js
│   ├── board
│   │   ├── board.controller.js
│   │   ├── board.repository.js
│   │   ├── board.route.js
│   │   └── board.service.js
│   ├── user
│   │   ├── user.controller.js
│   │   ├── user.repository.js
│   │   ├── user.route.js
│   │   └── user.service.js
│   └── index.js
├── views
│   ├── board
│   │   ├── list.html
│   │   ├── modify.html
│   │   ├── view.html
│   │   └── write.html
│   ├── user
│   │   ├── join.html
│   │   ├── login.html
│   │   └── usermodify.html
│   └── index.html
├── .gitignore
├── package-lock.json
├── package.json
├── pool.js
├── README.md
└── server.js
```


09/26 : express 기본설정 및 html 생성

09/27 : 테스트용 DB 추가 및 list구현

09/28 : view구현