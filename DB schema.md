```sql
CREATE DATABASE DB_WS;

CREATE TABLE `user_info` (
  `userid` varchar(30) NOT NULL PRIMARY KEY ,
  `userpw` varchar(30) NOT NULL,
  `level` integer DEFAULT 0
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
  `writer` varchar(30) NOT NULL,
  `created_at` datetime DEFAULT NOW(),
  `hit` integer DEFAULT 0
);

INSERT INTO boards(title, writer, content) values('테스트 제목', '테스트 계정', '테스트 내용'), ('테스트 제목2', '테스트 계정2', '테스트 내용2');

ALTER TABLE user_info MODIFY userid varchar(30) NOT NULL;

INSERT INTO user_info(userid, userpw, level) VALUES('admin','admin','9');

ALTER TABLE user_info MODIFY level INT DEFAULT 0;

DELETE FROM user_info WHERE userid NOT IN ('admin', 'test');

DELETE FROM boards WHERE id NOT IN ('1', '2');

ALTER TABLE boards delete COLUMN writerid VARCHAR(30);

SELECT
    id,
    title,
    content,
    writer,
    hit,
    IF(
        TIMESTAMPDIFF(HOUR, created_at, NOW()) < 24,
        DATE_FORMAT(created_at, '%H:%i:%s'),
        DATE_FORMAT(created_at, '%Y-%m-%d')
    ) AS formatted_date
FROM boards;


```
