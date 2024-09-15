-- Create the new database
CREATE DATABASE Assignment;
GO

-- Switch to the new database
USE Assignment;
GO

-- Create the Users table
CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY(1,1),
    Username NVARCHAR(50) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    [Password] NVARCHAR(255) NOT NULL
);


CREATE TABLE Questions (
    QuestionID INT IDENTITY(1,1) PRIMARY KEY,
    Question NVARCHAR(MAX) NOT NULL,
    Category NVARCHAR(50) NOT NULL
);

CREATE TABLE UserAnswers (
    UserAnswerID INT IDENTITY(1,1) PRIMARY KEY,
    UserID INT NOT NULL,
    QuestionID INT NOT NULL,
    Answer NVARCHAR(MAX) NOT NULL,
    CreatedAt DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (UserID) REFERENCES Users(UserId),
    FOREIGN KEY (QuestionID) REFERENCES Questions(QuestionID)
);

-- Insert Home Questions
INSERT INTO Questions (Question, Category)
VALUES 
    ('How much electricity do you use in your home?', 'Home'),
    ('What percentage is purchased from a clean energy program?', 'Home'),
    ('What is your natural gas consumption?', 'Home'),
    ('How much heating oil and other fuels do you use?', 'Home'),
    ('How many square feet is your living space?', 'Home'),
    ('How much water do you use annually?', 'Home'),
    ('Is your water usage 0, 1x, 2x, 3x, 4x, or 5x the average?', 'Home');

-- Insert Transport Questions
INSERT INTO Questions (Question, Category)
VALUES 
    ('How many miles do you typically travel by car each year?', 'Transport'),
    ('What is the average fuel efficiency (miles per gallon or kilometers per liter) of your car?', 'Transport'),
    ('How many miles do you travel by public transportation annually?', 'Transport'),
    ('How many flights do you take each year, and what is the average distance per flight?', 'Transport'),
    ('How many miles do you travel by train or other forms of mass transit per year?', 'Transport'),
    ('Do you frequently use ridesharing or carpooling services, and if so, how often and over what distances?', 'Transport'),
    ('How often do you walk or bike for transportation, and what is the average distance covered per trip?', 'Transport'),
    ('Do you own any electric vehicles or hybrids, and if so, how often do you use them and for what purposes?', 'Transport'),
    ('Are there any other modes of transportation you regularly use, such as motorcycles, scooters, or boats?', 'Transport'),
    ('How frequently do you engage in long-distance driving or road trips, and what is the average distance traveled per trip?', 'Transport');

-- Insert Lifestyle Questions
INSERT INTO Questions (Question, Category)
VALUES 
    ('How often do you use energy-consuming appliances such as washing machines, dryers, dishwashers, and refrigerators?', 'Lifestyle'),
    ('What types of lighting fixtures do you have in your home, and how often are they used?', 'Lifestyle'),
    ('How frequently do you use electronic devices such as computers, televisions, gaming consoles, and smartphones?', 'Lifestyle'),
    ('Do you use energy-efficient versions of household appliances and electronics, such as ENERGY STAR-rated products?', 'Lifestyle'),
    ('How often do you cook at home, and what types of appliances do you use for cooking (e.g., gas stove, electric oven, microwave)?', 'Lifestyle'),
    ('Are there any energy-intensive activities or hobbies you regularly engage in, such as woodworking, crafting, or home brewing?', 'Lifestyle');
