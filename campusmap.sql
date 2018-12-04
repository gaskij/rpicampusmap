-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 03, 2018 at 09:24 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `campusmap`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `location` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `comment` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`location`, `title`, `comment`, `time`) VALUES
('Amos Eaton Hall', 'The CS Lounge', 'The CS lounge on the first floor is a really cool place to study and work', '2018-12-02 21:19:30'),
('Darrin Communications Center', 'hi', 'hi', '2018-12-02 23:47:30'),
('Darrin Communications Center', 'hi', 'you whats up', '2018-12-02 23:47:50');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `location` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`location`, `link`) VALUES
('Amos Eaton Hall', 'https://cdn.discordapp.com/attachments/516827237413158912/518550562682437633/amos_eaton_hall_large.png'),
('Folsom Library', 'https://cdn.discordapp.com/attachments/516827237413158912/518553660142256141/1200px-Folsom_Library2.png'),
('Amos Eaton Hall', 'https://cdn.discordapp.com/attachments/516827237413158912/518973399033184266/Amos_Eaton_Hall.png'),
('Folsom Library', 'https://cdn.discordapp.com/attachments/516827237413158912/518987028277231627/a4f0fbe891c55a86371674d70514259416c6743.png'),
('Darrin Communications Center', 'https://cdn.discordapp.com/attachments/516827237413158912/518989665437745162/dcc_large.png'),
('Darrin Communications Center', 'https://cdn.discordapp.com/attachments/516827237413158912/518997414992937048/DCC.png'),
('Darrin Communications Center', 'https://cdn.discordapp.com/attachments/516827237413158912/519000239181660170/genericon_webleveled_-_ethan_spitz.png'),
('Darrin Communications Center', 'https://cdn.discordapp.com/attachments/516827237413158912/519010940746989581/ccpd.png');

-- --------------------------------------------------------

--
-- Table structure for table `main`
--

CREATE TABLE `main` (
  `location` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `main`
--

INSERT INTO `main` (`location`, `description`, `address`, `phone`) VALUES
('Amos Eaton Hall', 'Home of the Mathematics Department and part of the Computer Science Department. Many Math and Computer science courses are taught inside. It is names after Amos Eaton, Co-Founder of RPI.', 'Amos Eaton Hall, 110 8th Street, Troy, NY, 12180', 0),
('Darrin Communications Center', 'Main Lecture Hall', '110 8th Street, Troy, NY, 12180', NULL),
('Folsom Library', 'The main library on campus. 4 floors of study spaces, bookshelves and even a cafe. A great place to study quietly.', '110 8th St, Troy, NY 12180', NULL),
('Experimental Media and Performing Arts Center at Rensselaer', 'Alot of extracurricular activities happen here. The building includes a 1,200 seat concert hall and a 400 seat theater.', '44 8th St, Troy, NY 12180', '518-276-3921'), 
('Blitman Commons', 'Campus residence hall. Includes various ammenities such as a dining hall.', '1800 6th Ave, Troy, NY 12180', NULL),
('West Hall', 'Academic building that includes a large auditorium along with multiple classrooms.', '110 8th St, Troy, NY 12180', NULL), 
('Carnegie Building', 'Academic building on campus.', '110 8th St, Troy, NY 12180', NULL), 
('Pittsburgh Building', 'Academic building on campus. Home of the Lally School of Management.', '110 8th St, Troy, NY 12180', '518-276-2812'),
('Walker Laboratory', 'Academic building on campus. Alot of science labs will take place in this building.', '110 8th St, Troy, NY 12180', NULL), 
('Russell Sage Laboratory', 'Academic building on campus. Home of the School of Humanities, Arts, and Social Sciences.', '110 8th St, Troy, NY 12180', NULL), 
('Troy Building', 'Academic building on campus. Home to the Civil Engineering Department.', '110 8th St, Troy, NY 12180', NULL),
('Lally Hall', 'Academic building on campus. Home to the Information Technology and Web Science department.', '110 8th St, Troy, NY 12180', NULL), 
('Voorhees Computing Center', 'Commonly known as the VCC. Home to the schools computer lab, IT helpdesk, and computer repair shop.', '110 8th St, Troy, NY 12180', '518-276-7777'),
('Greene Building', 'Academic building on campus. Home to the School of Architecture.', '110 8th St, Troy, NY 12180', NULL),
('Rickets Building', 'Academic building on campus. Home to the Chemical Engineering Department.', '110 8th St, Troy, NY 12180', NULL),
('87 Gymnasium', 'Gymnasium on campus. Includes a number of basketball courts as well other athletic facilities.', '110 8th St, Troy, NY 12180','518-276-8824'), 
('Jonsson Engineering Center', 'Commonly known as the JEC. Academic building on campus that includes various lecture halls and lab rooms. Home to the School of Engineering.', '110 8th St, Troy, NY 12180', '518-276-6203'),
('Jonsson Rowland Science Center', 'Commonly known as JROWL. Academic building on campus that is also home to the School of Science.', '110 8th St, Troy, NY 12180', '518-276-6310'),
('Low Center for Industrial Innovation', 'Commonly known as the CII. Acadmic building on campus that has a number of larger academic buildings and auditoriums.', '110 8th St, Troy, NY 12180', NULL),
('Cogswell Laboratory', 'A chemistry-biology research center on campus. Recieves government funding from the National Science Foundation as well as the New York State Dormitory Authority.', '110 8th St, Troy, NY 12180', NULL),
('Center for Biotechnology and Interdisciplinary Studies', 'Research facility on campus. This is a popular destination for guest speakers on campus.', '1623 15th St, Troy, NY 12180', '518-276-4259'),
('Academy Hall', 'Home to the Student Health Center, Bursar, and registrar. This building also includes an auditorium.', '110 8th St, Troy, NY 12180', '518-276-6287'),
('Public Safety', 'Home to the campus police.', '110 8th St, Troy, NY 12180', NULL),
('Mueller Center', 'Fitness and wellness center on campus. This building has a gym that extends for two floors with various yoga and wellness classes offered on the third floor. This building also includes the armory and the campus swimming pools.', '110 8th St, Troy, NY 12180', '518-276-2874'),
('Rensselaer Union', 'Home to a number of different recreation centers, food courts, study rooms, and the campus store.', '110 8th St, Troy, NY 12180', '518-276-6505'),
('Sage Dining Hall', 'One of the main dining halls on campus', '110 8th St, Troy, NY 12180', NULL),
('Heffner Alumni House', 'This is where all alumni events are planned and coordinated.', '1301 Peoples Ave, Troy, NY 12180', '518-276-6205'),
('Admissions', 'This is where the admissions department is located at RPI.', '110 8th St, Troy, NY 12180', '518-276-6216'), 
('Commons Dining Hall', 'One of the main dining hills on campus. Located on freshman hill. The mailing center is also located in this building.', '1999 Burdett Ave, Troy, NY 12180', '518-276-6277'),
('Barton Hall', 'One of the residence halls on campus. Located on freshman hill.', '1999 Burdett Ave, Troy, NY 12180', NULL)
('Bray Hall', 'One of the residence halls on campus. Located on freshman hill.', '1999 Burdett Ave, Troy, NY 12180', NULL)
('Hall Hall', 'One of the residence halls on campus. Located on freshman hill.', '1999 Burdett Ave, Troy, NY 12180', NULL)
('Nason Hall', 'One of the residence halls on campus. Located on freshman hill.', '1999 Burdett Ave, Troy, NY 12180', NULL)
('Nugent Hall', 'One of the residence halls on campus. Located on freshman hill.', '1999 Burdett Ave, Troy, NY 12180', NULL);



-- --------------------------------------------------------

--
-- Table structure for table `nick`
--

CREATE TABLE `nick` (
  `location` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nick` varchar(10) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `nick`
--

INSERT INTO `nick` (`location`, `nick`) VALUES
('Amos Eaton Hall', 'AE'),
('Amos Eaton Hall', 'Amos Eaton'),
('Folsom Library', 'library'),
('Darrin Communications Center', 'DCC');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD KEY `location` (`location`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD KEY `location` (`location`);

--
-- Indexes for table `main`
--
ALTER TABLE `main`
  ADD PRIMARY KEY (`location`);

--
-- Indexes for table `nick`
--
ALTER TABLE `nick`
  ADD KEY `location` (`location`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`location`) REFERENCES `main` (`location`);

--
-- Constraints for table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`location`) REFERENCES `main` (`location`);

--
-- Constraints for table `nick`
--
ALTER TABLE `nick`
  ADD CONSTRAINT `nick_ibfk_1` FOREIGN KEY (`location`) REFERENCES `main` (`location`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
