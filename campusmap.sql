-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2018 at 05:08 AM
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
('Darrin Communications Center', 'The DCC Cafe', 'The DCC cafe is a pretty good place to get a quick snack after lecture', '2018-12-03 15:29:05'),
('Folsom Library', 'The Library Cafe', 'The cafe serves Starbucks!', '2018-12-03 19:50:33'),
('Darrin Communications Center', 'The CCPD ', 'I just had a mock interview in the Career Center Interview Rooms, super helpful! I feel really prepared for my job interview now.', '2018-12-04 12:16:57'),
('Darrin Communications Center', 'Tech Dump', 'There is a tech dump in the DCC. Not many cool things the last time I checked. I found it on floor 2 near the service elevator.\r\n', '2018-12-04 13:57:31');

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
('Folsom Library', 'https://nyshei.files.wordpress.com/2007/09/folsomlibrarymainfloor.jpg'),
('Jonsson Engineering Center', 'http://alumni.rpi.edu/s/1225/images/editor/pages/wallpaper_downloads/jec/2jec_1280x1024.jpg'),
('Experimental Media and Performing Arts Center at Rensselaer', 'https://images.adsttc.com/media/images/5013/e5d1/28ba/0d3b/4500/03ab/newsletter/stringio.jpg?1414398655'),
('Blitman Commons', 'https://www.re4ormarchitecture.com/cache/advportfoliopro/xdjulwpnj06t_1419962677_jpg_a27563b8da59ab16c8e2147366ff7e99.jpg'),
('Jonsson Rowland Science Center', 'http://map.rpi.edu/images/thumb/c/c8/JRow.JPG/200px-JRow.JPG'),
('Public Safety', 'http://www.rpi.edu/dept/public_safety/image/vic3.jpg'),
('Heffner Alumni House', 'http://alumni.rpi.edu/s/1225/images/editor/pages/products_and_benefits/heffner_alumni_house/1_hah.jpg'),
('Darrin Communications Center', 'http://map.rpi.edu/images/0/01/DCC.JPG'),
('87 Gymnasium', 'https://www.cardcow.com/images/rpi/card00153_fr.jpg'),
('Academy Hall', 'http://www.lib.rpi.edu/archives/buildings/images/academy_hall.jpg'),
('Admissions', 'https://3dwarehouse.sketchup.com/warehouse/getpubliccontent?contentId=77a641d3-5ed2-43e2-81ea-eb1974227d94'),
('Barton Hall', 'https://c1.staticflickr.com/4/3113/2582931348_b1ccd2fe21.jpg'),
('Bray Hall', 'http://rpi.edu/dept/res-life/pictures/bray.jpg'),
('Carnegie Building', 'http://map.rpi.edu/images/c/c1/CarnegieBuilding.jpg'),
('Commons Dining Hall', 'https://c1.staticflickr.com/4/3098/2582931452_1cca9255cd.jpg'),
('Center for Biotechnology and Interdisciplinary Studies', 'https://news.rpi.edu/sites/default/files/styles/large/public/cbis.JPG?itok=wj_COQHT'),
('Center for Biotechnology and Interdisciplinary Studies', 'https://news.rpi.edu/sites/default/files/cbis-news_2.jpeg'),
('Cogswell Laboratory', 'http://map.rpi.edu/images/7/73/Cogswell.JPG'),
('Greene Building', 'https://www.arch.rpi.edu/wp-content/uploads/2011/09/shop-photos56_OPT-e1317754833452.jpg'),
('Lally Hall', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/AmosEaton.JPG/440px-AmosEaton.JPG'),
('Low Center for Industrial Innovation', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/LowCenterRPI.JPG/1200px-LowCenterRPI.JPG'),
('Mueller Center', 'https://farm6.static.flickr.com/5485/11404596795_c6b0cef2a0_b.jpg'),
('Pittsburgh Building', 'http://alumni.rpi.edu/s/1225/images/editor/pages/wallpaper_downloads/pittsburgh_building/pittsburgh_building_1024x768.jpg'),
('Rensselaer Union', 'https://s.hdnux.com/photos/45/05/61/9722989/7/920x920.jpg'),
('Rensselaer Union', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/RPIStudentUnion.jpg/400px-RPIStudentUnion.jpg'),
('Rickets Building', 'http://www.alpha6294.com/History/ThetaXionCampus/RickettsBuilding/RickettsBuilding-front.jpg'),
('Russell Sage Laboratory', 'https://upload.wikimedia.org/wikipedia/commons/3/37/Russell_Sage_Laboratory-RPI.JPG'),
('Sage Dining Hall', 'https://www.prolixium.com/images/rpi_photos2001/sage.jpg'),
('Troy Building', 'http://map.rpi.edu/images/3/37/Troy.JPG'),
('Voorhees Computing Center', 'https://www.prolixium.com/images/rpi_photos2001/vcc.jpg'),
('Walker Laboratory', 'https://www.prolixium.com/images/rpi_photos2001/walker.jpg'),
('West Hall', 'http://www.vmjrcompanies.com/mt-content/uploads/2017/08/westhall-2.jpg'),
('Darrin Communications Center', 'http://www.lib.rpi.edu/archives/buildings/images/dcc_large.jpg'),
('Darrin Communications Center', 'http://www.gancarz.com/Recent/RPIReunion06/reunion18.jpg'),
('Sigma Phi Epsilon', 'http://www.sigepnyd.org/images/photos/6/5.jpg'),
('Houston Field House', 'http://www.sasaki.com/media/files/06campusrpi-houston.jpg'),
('Rugby Field', 'https://www.goffrugbyreport.com/sites/default/files/styles/article-image_858x400px/public/article_images/rpi-2.jpg?itok=VUgK0jHS'),
('Hall Hall', 'http://www.rpi.edu/dept/cct/apps/reslife/images/pictures/hall1.jpg'),
('Nason Hall', 'http://www.rpi.edu/dept/cct/apps/reslife/images/pictures/nason1.jpg'),
('Nugent Hall', 'http://www.rpi.edu/dept/cct/apps/reslife/images/pictures/nugent1.jpg'),
('Experimental Media and Performing Arts Center at Rensselaer', 'http://empac.rpi.edu/sites/default/files/styles/empac_cms_slideshow__default/public/ESTO_AaronEsto_50.jpg?itok=9rVzDof9');

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
('87 Gymnasium', 'Gymnasium on campus. Includes a number of basketball courts as well other athletic facilities.', '110 8th St, Troy, NY 12180', 518),
('Academy Hall', 'Home to the Student Health Center, Bursar, and registrar. This building also includes an auditorium.', '110 8th St, Troy, NY 12180', 518),
('Admissions', 'This is where the admissions department is located at RPI.', '110 8th St, Troy, NY 12180', 518),
('Amos Eaton Hall', 'Home of the Mathematics Department and part of the Computer Science Department. Many Math and Computer science courses are taught inside. It is names after Amos Eaton, Co-Founder of RPI.', 'Amos Eaton Hall, 110 8th Street, Troy, NY, 12180', NULL),
('Barton Hall', 'One of the residence halls on campus. Located on freshman hill.', '1999 Burdett Ave, Troy, NY 12180', NULL),
('Blitman Commons', 'Campus residence hall. Includes various ammenities such as a dining hall.', '1800 6th Ave, Troy, NY 12180', NULL),
('Bray Hall', 'One of the residence halls on campus. Located on freshman hill.', '1999 Burdett Ave, Troy, NY 12180', NULL),
('Carnegie Building', 'Academic building on campus.', '110 8th St, Troy, NY 12180', NULL),
('Center for Biotechnology and Interdisciplinary Studies', 'Research facility on campus. This is a popular destination for guest speakers on campus.', '1623 15th St, Troy, NY 12180', 518),
('Cogswell Laboratory', 'A chemistry-biology research center on campus. Recieves government funding from the National Science Foundation as well as the New York State Dormitory Authority.', '110 8th St, Troy, NY 12180', NULL),
('Commons Dining Hall', 'One of the main dining hills on campus. Located on freshman hill. The mailing center is also located in this building.', '1999 Burdett Ave, Troy, NY 12180', 518),
('Darrin Communications Center', 'Main lecture hall on campus. Also where the CCPD has their office. This is the building where most large lectures are held.', '110 8th Street, Troy, NY, 12180', NULL),
('Experimental Media and Performing Arts Center at Rensselaer', 'Alot of extracurricular activities happen here. The building includes a 1,200 seat concert hall and a 400 seat theater.', '44 8th St, Troy, NY 12180', 518),
('Folsom Library', 'The main library on campus. 4 floors of study spaces, bookshelves and even a cafe. A great place to study quietly.', '110 8th St, Troy, NY 12180', NULL),
('Greene Building', 'Academic building on campus. Home to the School of Architecture.', '110 8th St, Troy, NY 12180', NULL),
('Hall Hall', 'One of the residence halls on campus. Located on freshman hill.', '1999 Burdett Ave, Troy, NY 12180', NULL),
('Heffner Alumni House', 'This is where all alumni events are planned and coordinated.', '1301 Peoples Ave, Troy, NY 12180', 518),
('Houston Field House', 'The hockey rink on campus. Come here to support the ice hockey team! Go Engineers!', '1900 Peoples Ave, Troy, NY 12180', NULL),
('Jonsson Engineering Center', 'Commonly known as the JEC. Academic building on campus that includes various lecture halls and lab rooms. Home to the School of Engineering.', '110 8th St, Troy, NY 12180', 518),
('Jonsson Rowland Science Center', 'Commonly known as JROWL. Academic building on campus that is also home to the School of Science.', '110 8th St, Troy, NY 12180', 518),
('Lally Hall', 'Academic building on campus. Home to the Information Technology and Web Science department.', '110 8th St, Troy, NY 12180', NULL),
('Low Center for Industrial Innovation', 'Commonly known as the CII. Acadmic building on campus that has a number of larger academic buildings and auditoriums.', '110 8th St, Troy, NY 12180', NULL),
('Mueller Center', 'Fitness and wellness center on campus. This building has a gym that extends for two floors with various yoga and wellness classes offered on the third floor. This building also includes the armory and the campus swimming pools.', '110 8th St, Troy, NY 12180', 518),
('Nason Hall', 'One of the residence halls on campus. Located on freshman hill.', '1999 Burdett Ave, Troy, NY 12180', NULL),
('Nugent Hall', 'One of the residence halls on campus. Located on freshman hill.', '1999 Burdett Ave, Troy, NY 12180', NULL),
('Pittsburgh Building', 'Academic building on campus. Home of the Lally School of Management.', '110 8th St, Troy, NY 12180', 518),
('Public Safety', 'Home to the campus police.', '110 8th St, Troy, NY 12180', NULL),
('Rensselaer Union', 'Home to a number of different recreation centers, food courts, study rooms, and the campus store.', '110 8th St, Troy, NY 12180', 518),
('Rickets Building', 'Academic building on campus. Home to the Chemical Engineering Department.', '110 8th St, Troy, NY 12180', NULL),
('Rugby Field', 'Sports field on campus. Many other sports play here besides rugby', 'Sage Ave, Troy, NY 12180', NULL),
('Russell Sage Laboratory', 'Academic building on campus. Home of the School of Humanities, Arts, and Social Sciences.', '110 8th St, Troy, NY 12180', NULL),
('Sage Dining Hall', 'One of the main dining halls on campus', '110 8th St, Troy, NY 12180', NULL),
('Sigma Phi Epsilon', 'Worst frat on campus, don\'t join!', '2005 15th St, Troy, NY 12180', NULL),
('Troy Building', 'Academic building on campus. Home to the Civil Engineering Department.', '110 8th St, Troy, NY 12180', NULL),
('Voorhees Computing Center', 'Commonly known as the VCC. Home to the schools computer lab, IT helpdesk, and computer repair shop.', '110 8th St, Troy, NY 12180', NULL),
('Walker Laboratory', 'Academic building on campus. Alot of science labs will take place in this building.', '110 8th St, Troy, NY 12180', NULL),
('West Hall', 'Academic building that includes a large auditorium along with multiple classrooms.', '110 8th St, Troy, NY 12180', NULL);

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
('Darrin Communications Center', 'DCC'),
('Center for Biotechnology and Interdisciplinary Studies', 'CBIS'),
('Experimental Media and Performing Arts Center at Rensselaer', 'EMPAC'),
('Experimental Media and Performing Arts Center at Rensselaer', 'The Egg'),
('Jonsson Engineering Center', 'JEC'),
('Jonsson Rowland Science Center', 'JROWL'),
('Low Center for Industrial Innovation', 'CII'),
('Low Center for Industrial Innovation', 'Low'),
('Mueller Center', 'Gym'),
('Mueller Center', 'Armory'),
('Public Safety', 'PubSafe'),
('Russell Sage Laboratory', 'Sage'),
('Voorhees Computing Center', 'VCC'),
('Darrin Communications Center', 'CCPD'),
('Houston Field House', 'Ice Rink');

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
