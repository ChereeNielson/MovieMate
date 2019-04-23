-- MySQL dump 10.13  Distrib 8.0.14, for macos10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: MovieMate
-- ------------------------------------------------------
-- Server version	8.0.14

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `Friends`
--
use MovieMate;

LOCK TABLES `Friends` WRITE;
/*!40000 ALTER TABLE `Friends` DISABLE KEYS */;
INSERT INTO `Friends` VALUES (1,1,2,'2019-04-19 05:15:14','2019-04-19 05:15:14'),(2,1,3,'2019-04-19 05:17:01','2019-04-19 05:17:01');
/*!40000 ALTER TABLE `Friends` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'Eric','Sayer','elsayer@msn.com','$2a$10$cXkbucB5dYo5A4PjQ106C.NfwBiT/fwXe8d6wmg..BF3HWTh8Txbu',NULL,'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','Male','Utah','USA','04/27/1982','2019-04-19 05:15:05','2019-04-19 05:15:05'),(2,'Eric','ayer','esayer@msn.com','$2a$10$bbSt/mda0qDTsZGKUeHwnuYvr2REJSWGiJXTtWETEj2rf1yGThFpO',NULL,'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','Male','Utah','USA','04/27/1982','2019-04-19 05:15:11','2019-04-19 05:15:11'),(3,'Eric','player','ellsayer@msn.com','$2a$10$Yh22HB3O9u.dHUZIHNYE7epfbcIME3sJY2pFzBourxS4rOBI/264O',NULL,'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','Male','Utah','USA','04/27/1982','2019-04-19 05:16:53','2019-04-19 05:16:53');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Watchlists`
--

LOCK TABLES `Watchlists` WRITE;
/*!40000 ALTER TABLE `Watchlists` DISABLE KEYS */;
INSERT INTO `Watchlists` VALUES (1,1,'tt0087755','https://m.media-amazon.com/images/M/MV5BNmFiYTU2YjEtNjcxNy00MzViLTljMGEtNWI4OTU0ZTRhZTM1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDIwODAwNzg@._V1_SX300.jpg',NULL,'The Muppets Take Manhattan test 1',0,'2019-04-19 05:15:27','2019-04-19 05:15:27'),(2,1,'tt0087755','https://m.media-amazon.com/images/M/MV5BNmFiYTU2YjEtNjcxNy00MzViLTljMGEtNWI4OTU0ZTRhZTM1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDIwODAwNzg@._V1_SX300.jpg',NULL,'The Muppets Take Manhattan test 2',0,'2019-04-19 05:15:32','2019-04-19 05:15:32'),(3,1,'tt0087755','https://m.media-amazon.com/images/M/MV5BNmFiYTU2YjEtNjcxNy00MzViLTljMGEtNWI4OTU0ZTRhZTM1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDIwODAwNzg@._V1_SX300.jpg',NULL,'The Muppets Take Manhattan test 3',1,'2019-04-19 05:15:38','2019-04-19 05:15:38'),(4,1,'tt0087755','https://m.media-amazon.com/images/M/MV5BNmFiYTU2YjEtNjcxNy00MzViLTljMGEtNWI4OTU0ZTRhZTM1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDIwODAwNzg@._V1_SX300.jpg',NULL,'The Muppets Take Manhattan test 4',0,'2019-04-19 05:16:02','2019-04-19 05:16:02'),(5,2,'tt0087755','https://m.media-amazon.com/images/M/MV5BNmFiYTU2YjEtNjcxNy00MzViLTljMGEtNWI4OTU0ZTRhZTM1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDIwODAwNzg@._V1_SX300.jpg',NULL,'The Muppets Take Manhattan test 1',0,'2019-04-19 05:16:22','2019-04-19 05:16:22'),(6,2,'tt0087755','https://m.media-amazon.com/images/M/MV5BNmFiYTU2YjEtNjcxNy00MzViLTljMGEtNWI4OTU0ZTRhZTM1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDIwODAwNzg@._V1_SX300.jpg',NULL,'The Muppets Take Manhattan test 2',1,'2019-04-19 05:16:30','2019-04-19 05:16:30'),(7,3,'tt0087755','https://m.media-amazon.com/images/M/MV5BNmFiYTU2YjEtNjcxNy00MzViLTljMGEtNWI4OTU0ZTRhZTM1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDIwODAwNzg@._V1_SX300.jpg',NULL,'The Muppets Take Manhattan test 1',1,'2019-04-19 06:07:55','2019-04-19 06:07:55'),(8,1,'tt1790864','https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_SX300.jpg','Thomas is deposited in a community of boys after his memory is erased, soon learning they\'re all trapped in a maze that will require him to join forces with fellow \"runners\" for a shot at escape.','The Maze Runner',0,'2019-04-20 17:12:10','2019-04-20 17:12:10'),(9,1,'tt0137523','https://m.media-amazon.com/images/M/MV5BMjJmYTNkNmItYjYyZC00MGUxLWJhNWMtZDY4Nzc1MDAwMzU5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg','An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.','Fight Club',0,'2019-04-20 17:12:36','2019-04-20 17:12:36'),(10,1,'tt0458352','https://m.media-amazon.com/images/M/MV5BZjQ3ZTIzOTItMGNjNC00MWRmLWJlMGEtMjJmMDM5ZDIzZGM3XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_SX300.jpg','A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine.','The Devil Wears Prada',0,'2019-04-20 17:13:07','2019-04-20 17:13:07');
/*!40000 ALTER TABLE `Watchlists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'MovieMate'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-20 11:21:55
