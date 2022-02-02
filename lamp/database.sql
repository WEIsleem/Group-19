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
) ENGINE=InnoDB AUTO_INCREMENT=156 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Contacts`
--

LOCK TABLES `Contacts` WRITE;
/*!40000 ALTER TABLE `Contacts` DISABLE KEYS */;
INSERT INTO `Contacts` VALUES (129,'Karina','N',NULL,NULL,1,'2022-01-23 03:19:37'),(130,'Karina','N',NULL,NULL,1,'2022-01-23 03:19:39'),(131,'Karina','N',NULL,NULL,1,'2022-01-23 03:46:01'),(132,'Karina','N',NULL,NULL,1,'2022-01-23 04:08:09'),(133,'Karina','N',NULL,NULL,1,'2022-01-23 04:08:10'),(134,'Karina','N',NULL,NULL,1,'2022-01-23 04:12:32'),(135,'Karina','N',NULL,NULL,1,'2022-01-23 04:12:33'),(136,'Karina','N',NULL,NULL,1,'2022-01-23 04:12:34'),(137,'Karina','N',NULL,NULL,1,'2022-01-23 04:36:34'),(138,'Karina','N',NULL,NULL,1,'2022-01-23 04:36:35'),(139,'Karina','N',NULL,NULL,1,'2022-01-23 04:36:35'),(140,'Karina','N',NULL,NULL,1,'2022-01-23 18:58:01'),(141,'bob','ross','ereadsfad@fau.edu','4434243',1,'2022-01-23 19:23:18'),(142,'karina','n',NULL,NULL,1,'2022-01-23 19:43:57'),(143,'Karina','n','ereadsfad@fau.edu','4434243',20,'2022-01-29 02:51:24'),(144,'Karina','n','ereadsfad@fau.edu','4434243',20,'2022-01-29 02:52:15'),(145,'Karina','n','ereadsfad@fau.edu','4434243',20,'2022-01-29 02:54:52'),(154,'Karina','n','ereadsfad@fau.edu','4434243',20,'2022-01-30 22:33:13'),(155,'Hannibal','Barca','Hannibal@Cannae.Ca','2092162912',1,'2022-01-31 00:03:54');
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
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (38,'2022-01-30 23:03:22','2022-01-30 23:03:22','Tom','Williamson','testperson','testPassword'),(39,'2022-01-31 00:29:16','2022-01-31 00:29:16','ryan','enriquez','test2','testPassword');
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

-- Dump completed on 2022-01-31  0:40:26
