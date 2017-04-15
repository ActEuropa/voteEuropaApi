CREATE TABLE IF NOT EXISTS `polls_options` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `poll_id` INT unsigned NOT NULL,
  `text` VARCHAR(250) DEFAULT NULL,
  `votes` int unsigned DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_poll_id` (`poll_id`),
  CONSTRAINT `fk_poll_id` FOREIGN KEY (`poll_id`) REFERENCES `polls` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=392 DEFAULT CHARSET=utf8;
