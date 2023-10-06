# Project

# 1. 메인 페이지

            - 1. 슬라이드 구현: 피그마

# 2. User 관리 페이지

            - 1. DB Schema(= ERD): dbdiagram.io
            - 2. uri 정의: 스웨거
                        - 요청시 내용 정의
                        - 응답 성공시 내용 정의
                        - 응답 실패시 내용 정의

# 3. Task 관리

            - 1. 활용 도구(카드 형태의 칸드보드)
                        - 1. 트렐로
                        - 2. 노션
                        - 3. github
            - 2. Task, ToDo
                        - 1. Express 기본 세팅
                        - 2. 참고 사이트 조사
                        - 3. 디자인(와이어프레임)
                        - 4. 메인 페이지 제작
                        - 요청시 내용 정의
                        - 응답 성공시 내용 정의
                        - 응답 실패시 내용 정의

# 4. Test 관리

            - 1. 활용 도구(카드 형태의 칸드보드)
                        - 1. Postman
                        - 2. ThunderClient
                        - 3. Notion
            - 2. Task, ToDo

메인 페이지

- 디자인
- 슬라이드 구현

user 관리 페이지

- 회원 수정 o
- 회원 정보 보기 페이지o
- 회원 탈퇴 페이지(토큰 내용 삭제도 병행되어야 함)o
- 회원별 lv 부여로 접근 권한 상이하게 설정

공지사항 게시판

- 관리자만 글쓰기 가능
- 관리자만 수정 가능
- 관리자만 삭제 가능
- 사용자, 관리자는 글 보기 가능

자유게시판

- 사용자 글쓰기 가능
- 사용자 글 보기 가능
- 사용자 수정 가능(단, 작성자가 같을 경우에만)
- 사용자 삭제 가능(단, 작성자가 같을 경우에만)

# DB-WS

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

10/04 : crud / 로그인 / 회원가입 구현

10/05 : 로그아웃 / 회원정보 보기 및 수정 / 회원탈퇴 구현

10/06 : 로그인, 회원가입 실패시 알림창 / 회원가입 아이디 특수문자 또는 중복일때 각각 다른 알림창 구현
