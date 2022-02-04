-- MySQL dump 10.13  Distrib 8.0.27, for Linux (x86_64)
--
-- Host: localhost    Database: COP4331
-- ------------------------------------------------------
-- Server version	8.0.27-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Contacts`
--

DROP TABLE IF EXISTS `Contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Contacts` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Phone` varchar(12) DEFAULT NULL,
  `UserID` int NOT NULL DEFAULT '0',
  `DateCreated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=186 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Contacts`
--

LOCK TABLES `Contacts` WRITE;
/*!40000 ALTER TABLE `Contacts` DISABLE KEYS */;
INSERT INTO `Contacts` VALUES (141,'bob','ross','ereadsfad@fau.edu','4434243',1,'2022-01-23 19:23:18'),(155,'Hannibal','Barca','Hannibal@Cannae.Ca','2092162912',1,'2022-01-31 00:03:54'),(156,'Test','1',NULL,NULL,38,'2022-01-31 18:19:24'),(157,'Hans','Solo','Hanshotfirst@corellia.co','2187',47,'2022-01-31 18:29:37'),(158,'Test','1','testing@update.com','9999999999',42,'2022-01-31 18:36:07'),(159,'Scipio','Africanus',NULL,NULL,47,'2022-01-31 18:45:11'),(160,'Scipio2','Africanus',NULL,NULL,47,'2022-01-31 18:46:36'),(161,'Pliny','The Elder','test@email.com','1234',47,'2022-01-31 18:48:24'),(162,'s','s',NULL,NULL,47,'2022-01-31 18:49:49'),(163,'test','testlast',NULL,NULL,1,'2022-01-31 18:52:26'),(164,'test','testlast','temp@gmail.com','5555555555',1,'2022-01-31 18:52:50'),(165,'Jeffrey','Bezos',NULL,NULL,47,'2022-01-31 18:53:11'),(166,'Test1','Test1',NULL,NULL,47,'2022-01-31 18:54:17'),(167,'testagain','testlast','temp@gmail.com','5555555555',1,'2022-01-31 18:55:09'),(168,'Test','Test','email@email.com','555555555555',42,'2022-01-31 18:56:43'),(169,'TestWeb','TestWeb',NULL,NULL,47,'2022-01-31 18:58:36'),(170,'testagain','testlast','temp@gmail.com','5555555555',1,'2022-01-31 19:00:06'),(171,'1','1',NULL,NULL,47,'2022-01-31 19:00:25'),(172,'testagain','testlast','temp@gmail.com','5555555555',1,'2022-01-31 19:02:40'),(174,'Ben','B',NULL,NULL,47,'2022-01-31 19:08:03'),(176,'First','Last','email@email.me','9',47,'2022-01-31 19:19:58'),(177,'Cato','The Elder','carthagodelenda@rome.com','200',47,'2022-01-31 19:22:55'),(178,'testy','boi','boi@boi.io','666666666',42,'2022-01-31 19:25:08'),(179,'Julius','Caesar','ereadsfad@fau.edu','4434243',47,'2022-01-31 19:25:21'),(183,'test12','test12',NULL,NULL,53,'2022-02-02 17:39:57'),(185,'Arsen','Aldea','realemail@email.gov','5613608035',42,'2022-02-03 21:14:47');
/*!40000 ALTER TABLE `Contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `DateCreated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `DateLastLoggedIn` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `FirstName` varchar(50) NOT NULL DEFAULT '',
  `LastName` varchar(50) NOT NULL DEFAULT '',
  `Login` varchar(50) NOT NULL DEFAULT '',
  `Password` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (38,'2022-01-30 23:03:22','2022-01-30 23:03:22','Tom','Williamson','testperson','testPassword'),(39,'2022-01-31 00:29:16','2022-01-31 00:29:16','ryan','enriquez','test2','testPassword'),(42,'2022-01-31 18:10:52','2022-01-31 18:10:52','Gaby','Test','gabytest','gabytest'),(46,'2022-01-31 18:26:22','2022-01-31 18:26:22','hannibal','barca','carthage','carthage'),(47,'2022-01-31 18:27:24','2022-01-31 18:27:24','Jeff','Jeff','Jeff','Jeff'),(50,'2022-01-31 20:42:11','2022-01-31 20:42:11','Lab','Checkin','labUser','labPassword'),(51,'2022-02-01 22:27:00','2022-02-01 22:27:00','a','a','a','a'),(53,'2022-02-02 17:39:22','2022-02-02 17:39:22','test12','test12','test12','test12'),(56,'2022-02-02 19:54:56','2022-02-02 19:54:56','hmmm','eeeeeeee','testingregister','registerpass');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-04 17:18:13
