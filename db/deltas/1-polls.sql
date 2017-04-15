CREATE TABLE IF NOT EXISTS `polls` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(250) DEFAULT NULL,
  `description` VARCHAR(250) DEFAULT NULL,
  `active` int unsigned DEFAULT NULL,
  `creator` VARCHAR(250) DEFAULT NULL,
  `mechanism` VARCHAR(250) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=392 DEFAULT CHARSET=utf8;
