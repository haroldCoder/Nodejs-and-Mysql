CREATE DATABASE testdb;

USE testdb;

CREATE TABLE news(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    news TEXT,
    dat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE news;
INSERT INTO news(title, news) values('my title', 'content news');

SELECT * FROM news;