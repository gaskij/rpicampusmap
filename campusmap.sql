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
('Folsom Library', 'The main library on campus. 4 floors of study spaces, bookshelves and even a cafe. A great place to study quietly.', '110 8th St, Troy, NY 12180', NULL);

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
