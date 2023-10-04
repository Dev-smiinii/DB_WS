```sql
CREATE DATABASE DB_WS;

CREATE TABLE `user_info` (
  `userid` integer NOT NULL PRIMARY KEY ,
  `userpw` varchar(30) NOT NULL,
  `level` integer
);

CREATE TABLE `announce` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(70) NOT NULL,
  `content` text,
  `created_at` datetime DEFAULT NOW()
);

CREATE TABLE `boards` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(70) NOT NULL,
  `content` text,
  `writer` varchar(20) NOT NULL,
  `created_at` datetime DEFAULT NOW(),
  `hit` integer DEFAULT 0
);

INSERT INTO boards(title, writer, content) values('테스트 제목', '테스트 계정', '테스트 내용'), ('테스트 제목2', '테스트 계정2', '테스트 내용2');
```
