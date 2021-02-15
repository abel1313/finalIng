-- MySQL dump 10.13  Distrib 8.0.21, for Linux (x86_64)
--
-- Host: localhost    Database: proyectoestadia
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `SPRING_SESSION`
--

DROP TABLE IF EXISTS `SPRING_SESSION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SPRING_SESSION` (
  `PRIMARY_ID` char(36) NOT NULL,
  `SESSION_ID` char(36) NOT NULL,
  `CREATION_TIME` bigint NOT NULL,
  `LAST_ACCESS_TIME` bigint NOT NULL,
  `MAX_INACTIVE_INTERVAL` int NOT NULL,
  `EXPIRY_TIME` bigint NOT NULL,
  `PRINCIPAL_NAME` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`PRIMARY_ID`),
  UNIQUE KEY `SPRING_SESSION_IX1` (`SESSION_ID`),
  KEY `SPRING_SESSION_IX2` (`EXPIRY_TIME`),
  KEY `SPRING_SESSION_IX3` (`PRINCIPAL_NAME`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SPRING_SESSION`
--

LOCK TABLES `SPRING_SESSION` WRITE;
/*!40000 ALTER TABLE `SPRING_SESSION` DISABLE KEYS */;
/*!40000 ALTER TABLE `SPRING_SESSION` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SPRING_SESSION_ATTRIBUTES`
--

DROP TABLE IF EXISTS `SPRING_SESSION_ATTRIBUTES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SPRING_SESSION_ATTRIBUTES` (
  `SESSION_PRIMARY_ID` char(36) NOT NULL,
  `ATTRIBUTE_NAME` varchar(200) NOT NULL,
  `ATTRIBUTE_BYTES` blob NOT NULL,
  PRIMARY KEY (`SESSION_PRIMARY_ID`,`ATTRIBUTE_NAME`),
  CONSTRAINT `SPRING_SESSION_ATTRIBUTES_FK` FOREIGN KEY (`SESSION_PRIMARY_ID`) REFERENCES `SPRING_SESSION` (`PRIMARY_ID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SPRING_SESSION_ATTRIBUTES`
--

LOCK TABLES `SPRING_SESSION_ATTRIBUTES` WRITE;
/*!40000 ALTER TABLE `SPRING_SESSION_ATTRIBUTES` DISABLE KEYS */;
/*!40000 ALTER TABLE `SPRING_SESSION_ATTRIBUTES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id_Categoria` int NOT NULL AUTO_INCREMENT,
  `nombre_Categoria` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `id_EstatusCategoriaFK` int NOT NULL,
  PRIMARY KEY (`id_Categoria`),
  KEY `id_EstatusCategoriaFK` (`id_EstatusCategoriaFK`),
  CONSTRAINT `categorias_ibfk_1` FOREIGN KEY (`id_EstatusCategoriaFK`) REFERENCES `estatuscategoria` (`id_EstatusCategoria`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id_cliente` int NOT NULL AUTO_INCREMENT,
  `persona_Id` int NOT NULL,
  PRIMARY KEY (`id_cliente`),
  KEY `personaID` (`persona_Id`),
  CONSTRAINT `personaID` FOREIGN KEY (`persona_Id`) REFERENCES `personas` (`id_Persona`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contruccion`
--

DROP TABLE IF EXISTS `contruccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contruccion` (
  `id_Contruccion` int NOT NULL AUTO_INCREMENT,
  `nombre_Contruccion` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `id_ProductoFK` int NOT NULL,
  `id_CategoriaFK` int NOT NULL,
  PRIMARY KEY (`id_Contruccion`),
  KEY `idProductoFK2` (`id_ProductoFK`),
  KEY `id_CategoriaFK3` (`id_CategoriaFK`),
  CONSTRAINT `id_CategoriaFK3` FOREIGN KEY (`id_CategoriaFK`) REFERENCES `categorias` (`id_Categoria`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `idProductoFK2` FOREIGN KEY (`id_ProductoFK`) REFERENCES `productos` (`id_Producto`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contruccion`
--

LOCK TABLES `contruccion` WRITE;
/*!40000 ALTER TABLE `contruccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `contruccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalleventa`
--

DROP TABLE IF EXISTS `detalleventa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalleventa` (
  `id_Detalle_Venta` int NOT NULL AUTO_INCREMENT,
  `venta_Id` int NOT NULL,
  `producto_Id` int NOT NULL,
  `precio_Detalle_Venta` double NOT NULL,
  `cantidad_Detalle_Venta` double NOT NULL,
  `subtotal_Detalle_Venta` double NOT NULL,
  PRIMARY KEY (`id_Detalle_Venta`),
  KEY `ventaIdFK` (`venta_Id`),
  KEY `productoIdFK` (`producto_Id`),
  CONSTRAINT `productoIdFK` FOREIGN KEY (`producto_Id`) REFERENCES `productos` (`id_Producto`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ventaIdFK` FOREIGN KEY (`venta_Id`) REFERENCES `ventas` (`id_Venta`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalleventa`
--

LOCK TABLES `detalleventa` WRITE;
/*!40000 ALTER TABLE `detalleventa` DISABLE KEYS */;
/*!40000 ALTER TABLE `detalleventa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direcciones`
--

DROP TABLE IF EXISTS `direcciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `direcciones` (
  `id_Direccion` int NOT NULL AUTO_INCREMENT,
  `pais_Direccion` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `estado_Direccion` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `municipio_Direccion` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `calle_Direccion` varchar(35) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `colonia_Direction` varchar(35) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `codigo_Postal_Direccion` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `numero_Interior_Direccion` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `numero_Exterior_Direccion` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id_Direccion`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direcciones`
--

LOCK TABLES `direcciones` WRITE;
/*!40000 ALTER TABLE `direcciones` DISABLE KEYS */;
INSERT INTO `direcciones` VALUES (1,'Mexico','Mexico','Luvianos','Adolfo LOpez Materos','Queretaro','51440','10','s/n'),(2,'Mexico','Mexico','Tejupilco','Centro','Centro','51800','s\\n','s/n');
/*!40000 ALTER TABLE `direcciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `electricidad`
--

DROP TABLE IF EXISTS `electricidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `electricidad` (
  `id_Electricidad` int NOT NULL AUTO_INCREMENT,
  `nombre_electricidad` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `id_ProductoFK` int NOT NULL,
  `id_CategoriaFK` int NOT NULL,
  PRIMARY KEY (`id_Electricidad`),
  KEY `idProductoFK1` (`id_ProductoFK`),
  KEY `id_CategoriaFK1` (`id_CategoriaFK`),
  CONSTRAINT `id_CategoriaFK1` FOREIGN KEY (`id_CategoriaFK`) REFERENCES `categorias` (`id_Categoria`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `idProductoFK1` FOREIGN KEY (`id_ProductoFK`) REFERENCES `productos` (`id_Producto`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `electricidad`
--

LOCK TABLES `electricidad` WRITE;
/*!40000 ALTER TABLE `electricidad` DISABLE KEYS */;
/*!40000 ALTER TABLE `electricidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estatus`
--

DROP TABLE IF EXISTS `estatus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estatus` (
  `id_Estatu` int NOT NULL AUTO_INCREMENT,
  `nombre_Estatus` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `fechaAlta_Estatu` datetime NOT NULL,
  PRIMARY KEY (`id_Estatu`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estatus`
--

LOCK TABLES `estatus` WRITE;
/*!40000 ALTER TABLE `estatus` DISABLE KEYS */;
INSERT INTO `estatus` VALUES (1,'activo','2020-01-01 00:00:00');
/*!40000 ALTER TABLE `estatus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estatuscategoria`
--

DROP TABLE IF EXISTS `estatuscategoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estatuscategoria` (
  `id_EstatusCategoria` int NOT NULL AUTO_INCREMENT,
  `nombre_EstatusCategoria` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `estatusCategoria` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id_EstatusCategoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estatuscategoria`
--

LOCK TABLES `estatuscategoria` WRITE;
/*!40000 ALTER TABLE `estatuscategoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `estatuscategoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estatusmenus`
--

DROP TABLE IF EXISTS `estatusmenus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estatusmenus` (
  `id_Estatus_Menu` int NOT NULL AUTO_INCREMENT,
  `nombre_Estatus_Menu` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id_Estatus_Menu`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estatusmenus`
--

LOCK TABLES `estatusmenus` WRITE;
/*!40000 ALTER TABLE `estatusmenus` DISABLE KEYS */;
INSERT INTO `estatusmenus` VALUES (1,'Activo'),(2,'Desactivado'),(3,'Bajo');
/*!40000 ALTER TABLE `estatusmenus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes`
--

DROP TABLE IF EXISTS `imagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes` (
  `id_Imagen` int NOT NULL AUTO_INCREMENT,
  `nombre_Imagen` varchar(150) NOT NULL,
  PRIMARY KEY (`id_Imagen`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` VALUES (1,'a');
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marcas`
--

DROP TABLE IF EXISTS `marcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marcas` (
  `id_Marca` int NOT NULL AUTO_INCREMENT,
  `nombre_Aechivo_Marca` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `id_ProveedorFK` int NOT NULL,
  PRIMARY KEY (`id_Marca`),
  KEY `idProveedorFK` (`id_ProveedorFK`),
  CONSTRAINT `marcas_ibfk_1` FOREIGN KEY (`id_ProveedorFK`) REFERENCES `proveedores` (`id_Proveedor`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas`
--

LOCK TABLES `marcas` WRITE;
/*!40000 ALTER TABLE `marcas` DISABLE KEYS */;
INSERT INTO `marcas` VALUES (3,'Trupper',4),(4,'Pinturas',4),(5,'Tortnillador',5);
/*!40000 ALTER TABLE `marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menus`
--

DROP TABLE IF EXISTS `menus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menus` (
  `id_Menu` int NOT NULL AUTO_INCREMENT,
  `nombre_Menu` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `id_Estatus_MenuFK` int NOT NULL,
  PRIMARY KEY (`id_Menu`),
  KEY `id_EstatusMenuFK` (`id_Estatus_MenuFK`),
  CONSTRAINT `menus_ibfk_1` FOREIGN KEY (`id_Estatus_MenuFK`) REFERENCES `estatusmenus` (`id_Estatus_Menu`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menus`
--

LOCK TABLES `menus` WRITE;
/*!40000 ALTER TABLE `menus` DISABLE KEYS */;
INSERT INTO `menus` VALUES (1,'Empleado',1),(2,'Cliente',2),(3,'Venta',1);
/*!40000 ALTER TABLE `menus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permisos`
--

DROP TABLE IF EXISTS `permisos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permisos` (
  `id_Permiso` int NOT NULL AUTO_INCREMENT,
  `id_MenuFK` int NOT NULL,
  `id_UsuarioFK` int NOT NULL,
  PRIMARY KEY (`id_Permiso`),
  KEY `id_MenuFK1` (`id_MenuFK`),
  KEY `id_UsuarioFK1` (`id_UsuarioFK`),
  CONSTRAINT `id_MenuFK1` FOREIGN KEY (`id_MenuFK`) REFERENCES `menus` (`id_Menu`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `id_UsuarioFK1` FOREIGN KEY (`id_UsuarioFK`) REFERENCES `usuarios` (`id_Usuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permisos`
--

LOCK TABLES `permisos` WRITE;
/*!40000 ALTER TABLE `permisos` DISABLE KEYS */;
/*!40000 ALTER TABLE `permisos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personas`
--

DROP TABLE IF EXISTS `personas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personas` (
  `id_Persona` int NOT NULL AUTO_INCREMENT,
  `nombre_Persona` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `materno_Persona` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `paterno_Persona` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `fecha_Nacimientos_Persona` date NOT NULL,
  `genero_Persona` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `correo_Electronico_Persona` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `curp_Persona` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `telefono_Persona` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL DEFAULT '',
  `id_DirecconFK` int NOT NULL,
  `id_EstatuFK` int NOT NULL,
  `id_UsuarioFK` int NOT NULL,
  PRIMARY KEY (`id_Persona`),
  UNIQUE KEY `CURP_Persona` (`curp_Persona`),
  KEY `id_EstatuFK` (`id_EstatuFK`),
  KEY `id_UsuarioFK` (`id_UsuarioFK`),
  KEY `id_DirecconFK` (`id_DirecconFK`),
  CONSTRAINT `personas_ibfk_3` FOREIGN KEY (`id_EstatuFK`) REFERENCES `estatus` (`id_Estatu`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `personas_ibfk_4` FOREIGN KEY (`id_UsuarioFK`) REFERENCES `usuarios` (`id_Usuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `personas_ibfk_5` FOREIGN KEY (`id_DirecconFK`) REFERENCES `direcciones` (`id_Direccion`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personas`
--

LOCK TABLES `personas` WRITE;
/*!40000 ALTER TABLE `personas` DISABLE KEYS */;
INSERT INTO `personas` VALUES (1,'Abel','Tiburcio','Felipe','2020-01-01','Hombre','','TIFA940513HMCBLB00','',1,1,1);
/*!40000 ALTER TABLE `personas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id_Producto` int NOT NULL AUTO_INCREMENT,
  `nombre_Producto` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `codigo_Barras_Producto` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion_Producto` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `caracteristicas_Producto` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `existencia_Producto` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `precio_Producto` double NOT NULL,
  `id_ProveedorFK` int NOT NULL,
  `imagen_Id` int NOT NULL,
  `proveedor_id` int NOT NULL,
  PRIMARY KEY (`id_Producto`),
  UNIQUE KEY `codigoBarras_Producto` (`codigo_Barras_Producto`),
  KEY `ID_PROVEEDORFK` (`id_ProveedorFK`),
  KEY `imagen_Id` (`imagen_Id`),
  CONSTRAINT `ID_PROVEEDORFK` FOREIGN KEY (`id_ProveedorFK`) REFERENCES `proveedores` (`id_Proveedor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`imagen_Id`) REFERENCES `imagenes` (`id_Imagen`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Tornillo','1010121','Termiando','de color naranja','50',5,4,1,0),(2,'Desarmador','1542015','Desarmando','de color naranja','50',60,5,1,0);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedores`
--

DROP TABLE IF EXISTS `proveedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proveedores` (
  `id_Proveedor` int NOT NULL AUTO_INCREMENT,
  `nombre_Proveedor` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id_Proveedor`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedores`
--

LOCK TABLES `proveedores` WRITE;
/*!40000 ALTER TABLE `proveedores` DISABLE KEYS */;
INSERT INTO `proveedores` VALUES (4,'aBEL'),(5,'Adan');
/*!40000 ALTER TABLE `proveedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessiones`
--

DROP TABLE IF EXISTS `sessiones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessiones` (
  `PRIMARY_ID` varchar(100) NOT NULL,
  `SESSION_ID` varchar(150) NOT NULL,
  `CREATION_TIME` varchar(20) NOT NULL,
  `LAST_ACCESS_TIME` varchar(20) NOT NULL,
  `MAX_INACTIVE_INTERVAL` int DEFAULT NULL,
  `EXPIRY_TIME` varchar(20) NOT NULL,
  `PRINCIPAL_NAME` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`PRIMARY_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessiones`
--

LOCK TABLES `sessiones` WRITE;
/*!40000 ALTER TABLE `sessiones` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessiones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tornilleria`
--

DROP TABLE IF EXISTS `tornilleria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tornilleria` (
  `id_Tornilleria` int NOT NULL AUTO_INCREMENT,
  `nombre_tornilleria` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `id_ProductoFK` int NOT NULL,
  `id_CategoriaFK` int NOT NULL,
  PRIMARY KEY (`id_Tornilleria`),
  KEY `idProductoFK3` (`id_ProductoFK`),
  KEY `id_CategoriaFK2` (`id_CategoriaFK`),
  CONSTRAINT `id_CategoriaFK2` FOREIGN KEY (`id_CategoriaFK`) REFERENCES `categorias` (`id_Categoria`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `idProductoFK3` FOREIGN KEY (`id_ProductoFK`) REFERENCES `productos` (`id_Producto`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tornilleria`
--

LOCK TABLES `tornilleria` WRITE;
/*!40000 ALTER TABLE `tornilleria` DISABLE KEYS */;
/*!40000 ALTER TABLE `tornilleria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_Usuario` int NOT NULL AUTO_INCREMENT,
  `nombre_Usuario` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `contra_Usuario` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id_Usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'trece','123');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas` (
  `id_Venta` int NOT NULL AUTO_INCREMENT,
  `total_Venta` double NOT NULL,
  `fecha_Venta` datetime NOT NULL,
  `cliente_Id` int NOT NULL,
  `usuario_Id` int NOT NULL,
  PRIMARY KEY (`id_Venta`),
  KEY `clienteIdFK` (`cliente_Id`),
  KEY `usuarioIdFK` (`usuario_Id`),
  CONSTRAINT `clienteIdFK` FOREIGN KEY (`cliente_Id`) REFERENCES `clientes` (`id_cliente`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `usuarioIdFK` FOREIGN KEY (`usuario_Id`) REFERENCES `usuarios` (`id_Usuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-15 15:38:39
