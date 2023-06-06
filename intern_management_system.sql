-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: intern_management
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `address_id` int NOT NULL AUTO_INCREMENT,
  `house_number` int NOT NULL,
  `street_number` int NOT NULL,
  `street_name` varchar(100) NOT NULL,
  `pin_code` int NOT NULL,
  `city_name` varchar(50) NOT NULL,
  `country_name` varchar(50) NOT NULL,
  PRIMARY KEY (`address_id`),
  KEY `address_idx` (`house_number`,`street_number`,`street_name`,`pin_code`,`city_name`,`country_name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,1,1,'wolf street',101010,'Lucknow','India'),(2,1,2,'bear street',101010,'Lucknow','India'),(3,1,3,'wolf street',101010,'Mumbai','India'),(4,1,4,'cat street',101010,'Delhi','India'),(5,1,5,'dog street',101010,'Delhi','India'),(6,1,6,'giraffe street',101010,'Kolkata','India'),(7,1,7,'horse street',101010,'Gandhinagar','India');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `c_id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(100) NOT NULL,
  PRIMARY KEY (`c_id`),
  KEY `category_idx` (`category_name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Database'),(2,'Java'),(3,'Web');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `name` varchar(50) NOT NULL,
  `company_id` int NOT NULL AUTO_INCREMENT,
  `address_id` int NOT NULL,
  PRIMARY KEY (`company_id`),
  KEY `address_id` (`address_id`),
  KEY `company_idx` (`name`,`address_id`),
  CONSTRAINT `company_ibfk_1` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES ('Argusoft',1,7),('Bhokaro',7,6),('Infosys',6,2),('Sevosys',4,5),('TCS',5,1),('Textbook',2,3),('Thales',3,4);
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `course_id` int NOT NULL AUTO_INCREMENT,
  `course_name` varchar(100) NOT NULL,
  `c_id` int NOT NULL,
  `company_id` int NOT NULL,
  `image_url` varchar(150) NOT NULL,
  PRIMARY KEY (`course_id`),
  KEY `company_id` (`company_id`),
  KEY `course_idx` (`c_id`,`company_id`,`course_name`),
  CONSTRAINT `course_ibfk_1` FOREIGN KEY (`c_id`) REFERENCES `category` (`c_id`),
  CONSTRAINT `course_ibfk_2` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (1,'Realtional Database Design',1,1,'https://img-c.udemycdn.com/course/480x270/4687762_1121.jpg'),(2,'SQL',1,1,'https://img-c.udemycdn.com/course/480x270/4687762_1121.jpg'),(3,'MongoDB',1,1,'https://img-c.udemycdn.com/course/480x270/4687762_1121.jpg'),(4,'JAVA BASIC',2,1,'https://img-c.udemycdn.com/course/480x270/4687762_1121.jpg'),(5,'Maven',2,1,'https://img-c.udemycdn.com/course/480x270/4687762_1121.jpg'),(6,'Angular',3,1,'https://img-c.udemycdn.com/course/480x270/4687762_1121.jpg'),(7,'Node',3,1,'https://img-c.udemycdn.com/course/480x270/4687762_1121.jpg');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_enrolled`
--

DROP TABLE IF EXISTS `course_enrolled`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_enrolled` (
  `course_id` int NOT NULL,
  `intern_id` int NOT NULL,
  KEY `intern_id` (`intern_id`),
  KEY `course_enrolled_idx` (`course_id`,`intern_id`),
  CONSTRAINT `course_enrolled_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`),
  CONSTRAINT `course_enrolled_ibfk_2` FOREIGN KEY (`intern_id`) REFERENCES `intern` (`intern_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_enrolled`
--

LOCK TABLES `course_enrolled` WRITE;
/*!40000 ALTER TABLE `course_enrolled` DISABLE KEYS */;
INSERT INTO `course_enrolled` VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(2,2),(2,4),(2,5),(3,5),(3,6),(3,7),(4,1),(4,4),(6,5),(7,5),(7,6);
/*!40000 ALTER TABLE `course_enrolled` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `intern`
--

DROP TABLE IF EXISTS `intern`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `intern` (
  `intern_id` int NOT NULL AUTO_INCREMENT,
  `mentor_id` int NOT NULL,
  `person_id` int NOT NULL,
  PRIMARY KEY (`intern_id`),
  KEY `mentor_id` (`mentor_id`),
  KEY `intern_idx` (`person_id`,`mentor_id`),
  CONSTRAINT `intern_ibfk_1` FOREIGN KEY (`mentor_id`) REFERENCES `mentor` (`mentor_id`),
  CONSTRAINT `intern_ibfk_2` FOREIGN KEY (`person_id`) REFERENCES `person` (`person_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `intern`
--

LOCK TABLES `intern` WRITE;
/*!40000 ALTER TABLE `intern` DISABLE KEYS */;
INSERT INTO `intern` VALUES (1,1,1),(2,2,2),(3,3,3),(4,5,4),(5,6,5),(6,7,6),(7,4,7);
/*!40000 ALTER TABLE `intern` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mentor`
--

DROP TABLE IF EXISTS `mentor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mentor` (
  `mentor_id` int NOT NULL AUTO_INCREMENT,
  `person_id` int NOT NULL,
  PRIMARY KEY (`mentor_id`),
  KEY `mentor_idx` (`person_id`),
  CONSTRAINT `mentor_ibfk_1` FOREIGN KEY (`person_id`) REFERENCES `person` (`person_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor`
--

LOCK TABLES `mentor` WRITE;
/*!40000 ALTER TABLE `mentor` DISABLE KEYS */;
INSERT INTO `mentor` VALUES (1,8),(2,9),(3,10),(4,11),(5,12),(6,13),(7,14);
/*!40000 ALTER TABLE `mentor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `person`
--

DROP TABLE IF EXISTS `person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `person` (
  `person_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `date_of_birth` date NOT NULL,
  `address_id` int NOT NULL,
  `password` varchar(150) NOT NULL,
  `role` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`person_id`),
  KEY `person_idx` (`address_id`,`first_name`,`last_name`,`date_of_birth`),
  CONSTRAINT `person_ibfk_1` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `person`
--

LOCK TABLES `person` WRITE;
/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` VALUES (1,'Sushant','Sharma','2001-12-03',1,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_INTERN','ssharma@argusoft.com'),(2,'Sanya','Srivastav','2001-03-11',2,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_INTERN','ssrivastav@argusoft.com'),(3,'Archit','Prowal','2000-03-12',3,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_INTERN','aporwal@argusoft.com'),(4,'Devansh','Singh','2001-03-10',4,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_INTERN','dsingh@argusoft.com'),(5,'Srinivasan','Bashyam','2001-03-09',5,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_INTERN','sbashyam@argusoft.com'),(6,'Anurag','Seth','1999-02-12',6,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_INTERN','aseth@argusoft.com'),(7,'Shivansh','Khare','2001-01-12',7,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_INTERN','skhare@argusoft.com'),(8,'Janmejay','Jani','1995-03-12',1,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_MENTOR','jjani@argusoft.com'),(9,'Prateek','Garg','1995-03-12',2,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_MENTOR','pgarg@argusoft.com'),(10,'Harsh','Marolia','1995-03-12',3,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_MENTOR','hmarolia@argusoft.com'),(11,'Jay','Jain','1995-03-12',4,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_MENTOR','jjain@argusoft.com'),(12,'Prateek','Gulati','1995-03-12',5,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_MENTOR','pgulati@argusoft.com'),(13,'Harsh','Sharma','1995-03-12',6,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_MENTOR','hsharma@argusoft.com'),(14,'Divya','Singh','1994-03-12',7,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_MENTOR','disingh@argusoft.com');
/*!40000 ALTER TABLE `person` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-05 18:40:51
