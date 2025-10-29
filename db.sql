-- Creazione database
CREATE DATABASE IF NOT EXISTS movies_db;
USE movies_db;

-- Tabella movies
DROP TABLE IF EXISTS movies;
CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  director VARCHAR(255) NOT NULL,
  genre VARCHAR(255) DEFAULT NULL,
  release_year YEAR DEFAULT NULL,
  abstract TEXT,
  image VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

-- Dati movies
INSERT INTO movies (id, title, director, genre, release_year, abstract, image, created_at, updated_at) VALUES
(1,'Inception','Christopher Nolan','Science Fiction',2010,'A skilled thief is given a chance at redemption if he can successfully perform inception.','inception.jpg','2024-11-29 10:40:13','2025-05-09 13:44:45'),
(2,'The Godfather','Francis Ford Coppola','Crime',1972,'The story of a powerful Italian-American crime family and their struggles.','the_godfather.jpg','2024-11-29 10:40:13','2025-05-09 13:44:45'),
(3,'Titanic','James Cameron','Romance',1997,'A romantic story set against the tragic sinking of the RMS Titanic.','titanic.jpg','2024-11-29 10:40:13','2025-05-09 13:44:45'),
(4,'The Matrix','The Wachowskis','Action',1999,'A hacker discovers the truth about his reality and his role in the war against its controllers.','matrix.jpg','2024-11-29 10:40:13','2025-05-09 13:44:45'),
(5,'Interstellar','Christopher Nolan','Science Fiction',2014,'A team of explorers travels through a wormhole in space to save humanity.','interstellar.jpg','2024-11-29 10:40:13','2025-05-12 14:26:17');

-- Tabella reviews
DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT,
  movie_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  vote TINYINT NOT NULL CHECK (vote BETWEEN 1 AND 5),
  text TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY fk_movie (movie_id),
  CONSTRAINT fk_movie FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE CASCADE
);

-- Dati reviews
INSERT INTO reviews (id, movie_id, name, vote, text, created_at, updated_at) VALUES
(1,1,'Alice',5,'A mind-bending masterpiece.','2024-11-29 10:40:13','2024-11-29 10:40:13'),
(2,1,'Bob',4,'Great visuals and a compelling story.','2024-11-29 10:40:13','2024-11-29 10:40:13'),
(3,1,'Charlie',3,'Confusing at times, but worth watching.','2024-11-29 10:40:13','2024-11-29 10:40:13'),
(4,2,'Diana',5,'The best crime movie ever made.','2024-11-29 10:40:13','2024-11-29 10:40:13'),
(5,2,'Eve',5,'A cinematic classic that never gets old.','2024-11-29 10:40:13','2024-11-29 10:40:13'),
(6,2,'Frank',4,'A bit slow-paced but very impactful.','2024-11-29 10:40:13','2024-11-29 10:40:13'),
(7,3,'Grace',5,'A heartbreaking love story.','2024-11-29 10:40:13','2024-11-29 10:40:13'),
(8,3,'Hank',4,'Beautiful visuals and a moving plot.','2024-11-29 10:40:13','2024-11-29 10:40:13'),
(9,3,'Ivy',3,'A bit too melodramatic for my taste.','2024-11-29 10:40:13','2024-11-29 10:40:13'),
(10,4,'Jack',5,'A revolutionary film in every sense.','2024-11-29 10:40:13','2024-11-29 10:40:13'),
(11,4,'Karen',4,'Great action and a thought-provoking plot.','2024-11-29 10:40:13','2024-11-29 10:40:13'),
(12,4,'Liam',4,'A unique take on reality and perception.','2024-11-29 10:40:13','2024-11-29 10:40:13'),
(13,5,'Mia',5,'Visually stunning and emotionally resonant.','2024-11-29 10:40:13','2024-11-29 10:40:13'),
(14,5,'Noah',3,'Interesting ideas but too long.','2024-11-29 10:40:13','2024-11-29 10:40:13'),
(15,5,'Olivia',4,'A beautiful story about love and survival.','2024-11-29 10:40:13','2024-11-29 10:40:13'),
(17,1,'Gian',5,'bello','2025-05-14 11:49:35','2025-05-14 11:49:35'),
(18,1,'Gian',1,'brutto','2025-05-14 11:50:52','2025-05-14 11:50:52'),
(19,1,'Gian',3,'non male','2025-05-14 11:51:17','2025-05-14 11:51:17'),
(20,1,'Gian',3,'non male','2025-05-14 11:58:24','2025-05-14 11:58:24'),
(21,1,'asd',1,'sad','2025-05-14 13:58:22','2025-05-14 13:58:22'),
(22,1,'Gianfranco',4,'Molto bello ma neache troppo','2025-05-14 14:01:47','2025-05-14 14:01:47'),
(23,1,'Gianfranco',4,'Molto bello ma neache troppo','2025-05-14 14:01:58','2025-05-14 14:01:58'),
(24,1,'Gianfranco Mendoza',5,'Bellissimo','2025-05-14 14:02:59','2025-05-14 14:02:59'),
(25,5,'Matteo',5,'Film miglior di tutti','2025-05-14 14:05:37','2025-05-14 14:05:37'),
(26,1,'Maco',5,'Non male','2025-05-15 08:20:33','2025-05-15 08:20:33');
