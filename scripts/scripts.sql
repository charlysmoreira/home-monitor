CREATE TABLE `supplier` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`phoneNumber` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`message` VARCHAR(100) NOT NULL COLLATE 'latin1_swedish_ci',
	`status` TINYINT(1) NOT NULL DEFAULT '0',
	`created_at` TIMESTAMP NOT NULL DEFAULT current_timestamp(),
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
AUTO_INCREMENT=10
;

CREATE TABLE `water` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`value` DECIMAL(6,3) NOT NULL,
	`created_at` TIMESTAMP NOT NULL DEFAULT current_timestamp(),
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
AUTO_INCREMENT=352
;
