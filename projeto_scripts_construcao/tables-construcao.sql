-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dados212n
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `engenheiro`
--

DROP TABLE IF EXISTS `engenheiro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `engenheiro` (
  `eng_codigo` int NOT NULL,
  `eng_nome` varchar(20) DEFAULT NULL,
  `eng_apelido` varchar(10) DEFAULT NULL,
  `eng_telefone` varchar(15) DEFAULT NULL,
  `eng_crea` varchar(6) DEFAULT NULL,
  `eng_datacrea` date DEFAULT NULL,
  PRIMARY KEY (`eng_codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `engenheiro`
--

LOCK TABLES `engenheiro` WRITE;
/*!40000 ALTER TABLE `engenheiro` DISABLE KEYS */;
INSERT INTO `engenheiro` VALUES (1,'João Marcos','João','3722-5522','123654','0000-00-00'),(2,'Maria Joaquina','Mari','3702-2522','714258','0000-00-00'),(3,'José Abreu','Abreu','3732-5522','123645','0000-00-00');
/*!40000 ALTER TABLE `engenheiro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `obra`
--

DROP TABLE IF EXISTS `obra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `obra` (
  `obr_codigo` int NOT NULL,
  `obr_cidade` varchar(20) DEFAULT NULL,
  `obr_tipoobra` varchar(10) DEFAULT NULL,
  `obr_valor` decimal(12,2) DEFAULT NULL,
  `obr_dtinicio` date DEFAULT NULL,
  `eng_codigo` int DEFAULT NULL,
  PRIMARY KEY (`obr_codigo`),
  KEY `eng_codigo_idx` (`eng_codigo`),
  CONSTRAINT `eng_codigo` FOREIGN KEY (`eng_codigo`) REFERENCES `engenheiro` (`eng_codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `obra`
--

LOCK TABLES `obra` WRITE;
/*!40000 ALTER TABLE `obra` DISABLE KEYS */;
INSERT INTO `obra` VALUES (10,'Franca','Casa',200.00,'2020-03-15',3),(20,'Pedregulho','Casa',300.00,'2021-10-25',2),(30,'Franca','Prédio',500.00,'2021-11-01',1);
/*!40000 ALTER TABLE `obra` ENABLE KEYS */;
UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-03 22:41:08
