CREATE DATABASE IF NOT EXISTS student_quiz;
USE student_quiz;

CREATE TABLE students (
id INT PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100)
);

CREATE TABLE questions (
id INT AUTO_INCREMENT PRIMARY KEY,
quiz_id INT,
question TEXT,
correct_answer VARCHAR(100)
);

CREATE TABLE student_answers (
id INT AUTO_INCREMENT PRIMARY KEY,
student_id INT,
question_id INT,
answer TEXT,
is_correct BOOLEAN
);

CREATE TABLE scores (
id INT AUTO_INCREMENT PRIMARY KEY,
student_id INT,
quiz_id INT,
score INT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);