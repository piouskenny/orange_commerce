--Users Table

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `cart` int(10) NOT NULL,
  `wishlist` int(10) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


--Admin table
CREATE TABLE `orange_commerce`.`admin` (
    `id` INT(20) NOT NULL AUTO_INCREMENT , 
    `username` VARCHAR(255) NOT NULL , 
    `email` VARCHAR(255) NOT NULL , 
    `password` VARCHAR(255) NOT NULL , 
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;