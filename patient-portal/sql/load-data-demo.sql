DELETE FROM `patient`;
INSERT INTO `patient` (`id`, `address`, `birth_date`, `city`, `created`, `first_name`, `hospital_id`, `next_kin`, `note`, `second_name`, `sex`, `telephone`, `user_id`) VALUES
	(1, 'Kernigan', '1955-07-30', 'Long Road - 58', '2023-05-31 20:59:32', 'Justin', '10001', NULL, NULL, 'Frederick', 'M', '+343341314', 4),
	(2, 'Winnipeg', '1986-08-04', 'Westerton Road', '2023-06-04 16:12:01', 'Anthon', '10002', NULL, NULL, 'Geremy', 'M', '', 5),
	(3, 'Old Avenue', '1985-01-19', 'Scholton', '2023-06-04 16:12:01', 'Veronique', '10003', NULL, NULL, 'Fountain', 'F', '', 6),
	(4, 'Oak street 5', '1962-02-02', 'Norwalk', '2023-06-04 16:12:01', 'Cypher', '10004', NULL, NULL, 'Marica', 'F', '+24521666', 7),
	(5, 'Parkhurst', '1970-03-29', 'Norwich', '2023-06-04 16:12:01', 'Serena', '10005', NULL, NULL, 'Levinson', 'F', '', 8),
	(6, 'Memorial Road 01', '1970-01-27', 'Ramonville', '2023-06-04 16:12:01', 'Bardsley', '10006', NULL, NULL, 'Zenaida', 'M', '', 9),
	(7, 'Brooksby', '1948-06-04', 'Putnam', '2023-06-04 16:12:01', 'Graney', '10007', NULL, NULL, 'Almedan', 'M', '+6525235325', 10),
	(8, 'Fairhaven St. N 1', '1985-03-18', 'Shelton', '2023-06-04 16:12:01', 'Ackman', '10008', NULL, NULL, 'Sammy', 'M', '', 11),
	(9, 'William', '1988-07-21', 'Southington', '2023-06-04 16:12:01', 'Pohlman', '10009', NULL, NULL, 'Margot', 'F', '', 12),
	(10, 'Worcester st. 11', '1940-06-11', 'Cutley', '2023-06-04 16:12:01', 'Jeana', '10010', NULL, NULL, 'Bennett', 'F', '', 13),
	(11, 'Timpany', '1950-07-07', 'Torrington', '2023-06-04 16:12:01', 'Abramo', '10011', NULL, NULL, 'Oliver', 'M', '+5113212343', 14);

DELETE FROM `patient_record`;
INSERT INTO `patient_record` (`id`, `created`, `note`, `option_value`, `record_date`, `value1`, `value2`, `patient_id`, `record_type_code`) VALUES
	(1, '2023-06-05 17:39:42', NULL, NULL, '2023-01-23 15:54:26', 180, -1, 1, 'H'),
	(3, '2023-06-05 17:41:00', NULL, NULL, '2023-02-10 17:22:10', 90, 110, 1, 'BP'),
	(4, '2023-06-05 17:41:00', NULL, NULL, '2023-02-10 17:37:18', 80, -1, 1, 'HR'),
	(5, '2023-06-05 17:41:00', NULL, NULL, '2023-03-23 15:29:32', 78, -1, 1, 'W'),
	(6, '2023-06-05 17:41:00', NULL, NULL, '2023-04-26 10:52:33', 65, -1, 2, 'W'),
	(7, '2023-06-05 17:41:00', NULL, NULL, '2023-04-26 14:22:16', 36.8, -1, 3, 'TEMP'),
	(8, '2023-06-05 17:41:00', NULL, NULL, '2023-04-27 12:30:22', 95, -1, 2, 'HGT'),
	(9, '2023-06-05 17:41:00', NULL, NULL, '2023-04-27 14:04:16', 90, -1, 2, 'SAT'),
	(10, '2023-06-05 17:41:00', NULL, NULL, '2023-04-28 10:03:27', 37, -1, 3, 'TEMP'),
	(11, '2023-06-05 17:41:00', NULL, NULL, '2023-04-29 08:24:34', 152, -1, 2, 'DIUR_V'),
	(12, '2023-06-05 17:41:00', NULL, NULL, '2023-05-03 11:55:52', 83, -1, 2, 'HGT'),
	(13, '2023-06-05 17:41:00', NULL, NULL, '2023-05-04 12:02:13', 97, -1, 2, 'SAT'),
	(14, '2023-06-05 17:41:00', NULL, NULL, '2023-05-07 07:42:43', 40, -1, 2, 'RR'),
	(15, '2023-06-05 17:41:00', NULL, 'PHYSIOLOGICAL', '2023-05-10 15:41:24', -1, -1, 2, 'DIUR'),
	(16, '2023-06-05 17:41:00', NULL, NULL, '2023-05-15 10:17:54', 76, -1, 1, 'W'),
	(17, '2023-06-05 17:41:00', NULL, NULL, '2023-05-16 16:32:21', 65, -1, 2, 'TEMP'),
	(18, '2023-06-05 17:41:00', NULL, 'REGULAR', '2023-05-16 17:11:30', -1, -1, 2, 'BWL'),
	(19, '2023-06-05 17:41:00', NULL, NULL, '2023-05-20 13:35:33', 65, -1, 2, 'AUSC'),
	(20, '2023-06-05 17:41:00', NULL, NULL, '2023-05-21 16:21:24', 98, -1, 2, 'SAT'),
	(21, '2023-06-05 17:41:00', NULL, 'CONSTIPATION', '2023-05-25 12:27:10', -1, -1, 2, 'BWL'),
	(22, '2023-06-05 17:41:00', NULL, NULL, '2023-06-01 11:14:33', 78, -1, 2, 'HGT'),
	(23, '2023-06-05 17:41:00', NULL, 'WHEEZES', '2023-06-08 16:22:16', -1, -1, 2, 'AUSC'),
	(24, '2023-06-05 17:41:00', NULL, NULL, '2023-06-10 15:30:13', 76.5, -1, 1, 'W');

DELETE FROM `hospital_event`;	
INSERT INTO `hospital_event` (`id`, `created`, `date`, `payload`, `event_type_code`, `patient_id`) VALUES
	(1, '2023-05-31 21:01:42', '2023-05-31 20:15:47', 'Blood exam', 'E', 1),
	(2, '2023-06-05 20:07:36', '2023-01-10 12:07:01', 'Cardiology exam', 'E', 1),
	(3, '2023-06-05 20:13:06', '2023-01-10 12:12:25', 'Cardiology visit', 'O', 1),
	(4, '2023-06-05 20:15:30', '2023-02-23 14:15:02', 'Cardiology visit', 'O', 1),
	(5, '2023-06-05 20:16:25', '2023-03-03 15:31:56', 'Covid vaccination', 'V', 1);
	
	