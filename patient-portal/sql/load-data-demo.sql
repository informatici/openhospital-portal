INSERT INTO `event_type` (`code`, `id`, `name`) VALUES
	('A', 3, 'ADMISSION'),
	('E', 1, 'EXAM'),
	('O', 2, 'VISIT'),
	('T', 5, 'THERAPY'),
	('V', 4, 'VACCINATION');

INSERT INTO `record_type` (`code`, `default_option_value`, `default_value1`, `default_value2`, `id`, `min_value`, `max_value`, `measurement_type`, `measurement_value_type`, `uom`) VALUES
	('AUSC', 'NORMAL', -1, -1, 1, -1, -1, 'AUSCULTATION', 'OPTION', NULL),
	('BP', NULL, 80, 120, 2, 40, 200, 'BLOOD_PRESSURE', 'NUMERIC', 'mmHg'),
	('BWL', 'REGULAR', -1, -1, 3, -1, -1, 'BOWEL', 'OPTION', NULL),
	('DIUR', 'PHYSIOLOGICAL', -1, -1, 4, -1, -1, 'DIURESIS', 'OPTION', NULL),
	('DIUR_V', NULL, 100, -1, 5, 0, 2500, 'DIURESIS_VOL', 'NUMERIC', 'ml'),
	('H', NULL, 0, -1, 6, 0, 250, 'HEIGHT', 'NUMERIC', 'cm'),
	('HGT', NULL, 80, -1, 7, 30, 600, 'HGT', 'NUMERIC', 'mg/dl'),
	('HR', NULL, 60, -1, 8, 0, 240, 'HR', 'NUMERIC', 'bpm'),
	('RR', NULL, 20, -1, 9, 0, 100, 'RR', 'NUMERIC', 'apm'),
	('SAT', NULL, 98, -1, 10, 50, 100, 'SATURATION', 'NUMERIC', '%'),
	('TEMP', NULL, 36, -1, 11, 30, 50, 'TEMPERATURE', 'NUMERIC', '*C'),
	('W', NULL, 0, -1, 12, 0, 200, 'WEIGHT', 'NUMERIC', 'kg');

INSERT INTO `user` (`id`, `account_verified`, `active`, `created`, `email`, `failed_login_attempts`, `is_using2fa`, `login_disabled`, `password`, `secret`, `token`, `username`) VALUES
	(2, b'0', b'1', '2023-06-04 15:09:07', 'admin@email.com', 0, b'0', b'0', '$2a$10$2YBUbjzt.ulsSTKvlg2Ey.1c6CoyoyzeynrUyZ0huYGoaanWsk8vS', NULL, NULL, 'admin@email.com'),
	(3, b'0', b'1', '2023-06-04 15:07:41', 'doctor@email.com', 0, b'0', b'0', '$2a$10$L6tDOlI5PfNluOr54kBzj.jcEHWfid2B4.4dfvl2CW8pYkwAzkFTW', NULL, NULL, 'doctor@email.com'),
	(4, b'0', b'1', '2023-06-04 16:11:44', 'justin.frederick@email.com', 0, b'0', b'0', '$2a$10$I9IHt1WyPOAgt4uC6hR50.t504pypx78l4qt/lrIetv/n1fElrmte', NULL, NULL, '701010'),
	(5, b'0', b'1', '2023-06-04 16:11:44', 'anthon.geremy@email.com', 0, b'0', b'0', '$2a$10$hV0vRkJKFLuxXR/kxWxYOuhfZrVtnty8.hP3jK68nYgDrnK3oS5Fq', NULL, NULL, '701011'),
	(6, b'0', b'1', '2023-06-04 16:11:44', 'veronique.fountain@email.com', 0, b'0', b'0', '$2a$10$VzaBIESy0dRn.lbfbAk2WuuGvSn9my/7XNUFnSJdd9rBWRSiZbRrK', NULL, NULL, '701012'),
	(7, b'0', b'1', '2023-06-04 16:11:44', 'cypher.marica@email.com', 0, b'0', b'0', '$2a$10$tIxUzikM8LeuCwCQrxVUpOfz5E0Eh5nxOtawL9lp7GuhEm488ucBy', NULL, NULL, '701013'),
	(8, b'0', b'1', '2023-06-04 16:11:44', 'serena.levinson@email.com', 0, b'0', b'0', '$2a$10$Mke7qV6lEwrTP59GoRs96.E24rvLpbkezmhPpVWGlEICxlOYg54H.', NULL, NULL, '701014'),
	(9, b'0', b'1', '2023-06-04 16:11:44', 'bardsley.zenaida@email.com', 0, b'0', b'0', '$2a$10$Jzm6F7ETZBafT0tbdKhZi.uOQs2zfT77wBS/yj.9PY724YtCevmhS', NULL, NULL, '701015'),
	(10, b'0', b'1', '2023-06-04 16:11:44', 'graney.almedan@email.com', 0, b'0', b'0', '$2a$10$Hsyo/LJ0F.W1wR8YC4ruBuiMKHxzvzj7fwM6m4D0Qb2XRpqDSHOYW', NULL, NULL, '701016'),
	(11, b'0', b'1', '2023-06-04 16:11:44', 'ackman.sammy@email.com', 0, b'0', b'0', '$2a$10$xslef8bBbsVWNwn/QMCwJeQA9P7Ir5UaZT0L52unh9vwM0McrTp4O', NULL, NULL, '701017'),
	(12, b'0', b'1', '2023-06-04 16:11:44', 'pohlman.margot@email.com', 0, b'0', b'0', '$2a$10$J0.MMgwEhU3idqYqY.c59OZiuvEbTj5HRMrEUs5JjWBNs4Ws8V3O2', NULL, NULL, '701018'),
	(13, b'0', b'1', '2023-06-04 16:11:44', 'jeana.bennett@email.com', 0, b'0', b'0', '$2a$10$et2nH9Q.E0M7OjVRst3k0e/WyiQwrXeXDaLrE9S5rTOP/hd33A32O', NULL, NULL, '701019'),
	(14, b'0', b'1', '2023-06-04 16:11:44', 'abramo.oliver@email.com', 0, b'0', b'0', '$2a$10$F/xEWn6nC4zcjCFvnf4l2uf9VCm6LZTVu8RomFjP81wnrYkR3bv1.', NULL, NULL, '701020');

INSERT INTO `users_roles` (`user_id`, `role_id`) VALUES 
	('2', '1'),
	('3', '2'),
	('4', '3'),
	('5', '3'),
	('6', '3'),
	('7', '3'),
	('8', '3'),
	('9', '3'),
	('10', '3'),
	('11', '3'),
	('12', '3'),
	('13', '3'),
	('14', '3');
	
INSERT INTO `patient` (`id`, `address`, `birth_date`, `city`, `created`, `first_name`, `hospital_id`, `next_kin`, `note`, `second_name`, `sex`, `telephone`, `user_id`) VALUES
	(1, 'Kernigan', '1955-07-30', 'Long Road - 58', '2023-05-31 20:59:32', 'Justin', '701010', NULL, NULL, 'Frederick', 'M', '+343341314', 4),
	(2, 'Winnipeg', '1986-08-04', 'Westerton Road', '2023-06-04 16:12:01', 'Anthon', '701011', NULL, NULL, 'Geremy', 'M', '+256123121', 5),
	(3, 'Old Avenue', '1985-01-19', 'Scholton', '2023-06-04 16:12:01', 'Veronique', '701012', NULL, NULL, 'Fountain', 'F', '+63365623', 6),
	(4, 'Oak street 5', '1962-02-02', 'Norwalk', '2023-06-04 16:12:01', 'Cypher', '701013', NULL, NULL, 'Marica', 'F', '+24521666', 7),
	(5, 'Parkhurst', '1970-03-29', 'Norwich', '2023-06-04 16:12:01', 'Serena', '701014', NULL, NULL, 'Levinson', 'F', '+78215615', 8),
	(6, 'Memorial Road 01', '1970-01-27', 'Ramonville', '2023-06-04 16:12:01', 'Bardsley', '701015', NULL, NULL, 'Zenaida', 'M', '+251654864', 9),
	(7, 'Brooksby', '1948-06-04', 'Putnam', '2023-06-04 16:12:01', 'Graney', '701016', NULL, NULL, 'Almedan', 'M', '+6525235325', 10),
	(8, 'Fairhaven St. N 1', '1985-03-18', 'Shelton', '2023-06-04 16:12:01', 'Ackman', '701017', NULL, NULL, 'Sammy', 'M', '+25165405864', 11),
	(9, 'William', '1988-07-21', 'Southington', '2023-06-04 16:12:01', 'Pohlman', '701018', NULL, NULL, 'Margot', 'F', '+2544565432', 12),
	(10, 'Worcester st. 11', '1940-06-11', 'Cutley', '2023-06-04 16:12:01', 'Jeana', '701019', NULL, NULL, 'Bennett', 'F', '+7897564012', 13),
	(11, 'Timpany', '1950-07-07', 'Torrington', '2023-06-04 16:12:01', 'Abramo', '701020', NULL, NULL, 'Oliver', 'M', '+7897564023', 14);

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

INSERT INTO `hospital_event` (`id`, `created`, `date`, `payload`, `event_type_code`, `patient_id`) VALUES
	(1, '2023-05-31 21:01:42', '2022-11-02 00:37:32', '{ "LAB_ID" : 18, "LAB_EXA_ID_A" : "03.01", "LAB_DATE" : "2022-11-02 00:37:32", "LAB_RES" : "FEW", "LAB_NOTE" : "67 years old", "LAB_PAT_ID" : 701010, "LAB_PAT_NAME" : "Keneth Bryden", "LAB_CROSS1" : null, "LAB_CROSS2" : null, "LAB_CROSS3" : null, "LAB_CROSS4" : null, "LAB_CROSS5" : null, "LAB_CROSS6" : null, "LAB_CROSS7" : null, "LAB_CROSS8" : null, "LAB_CROSS9" : null, "LAB_CROSS10" : null, "LAB_CROSS11" : null, "LAB_CROSS12" : null, "LAB_CROSS13" : null, "LAB_LOCK" : 1, "LAB_AGE" : 0, "LAB_SEX" : "M", "LAB_MATERIAL" : "undefined", "LAB_PAT_INOUT" : "I", "LAB_CREATED_BY" : "done", "LAB_CREATED_DATE" : null, "LAB_LAST_MODIFIED_BY" : "2022-11-02 00:37:32", "LAB_LAST_MODIFIED_DATE" : "0000-00-00 00:00:00", "LAB_ACTIVE" : 127, "LAB_STATUS" : "1", "LAB_EXA_ID_A_DESC" : "3.1 Blood Slide (Malaria)" }', 'E', 1),
	(2, '2023-06-05 20:07:36', '2023-11-02 00:42:33', '{ "LAB_ID" : 19, "LAB_EXA_ID_A" : "03.01", "LAB_DATE" : "2023-11-02 00:42:33", "LAB_RES" : "FEW", "LAB_NOTE" : "68 years old", "LAB_PAT_ID" : 701010, "LAB_PAT_NAME" : "Genevie Stermer", "LAB_CROSS1" : null, "LAB_CROSS2" : null, "LAB_CROSS3" : null, "LAB_CROSS4" : null, "LAB_CROSS5" : null, "LAB_CROSS6" : null, "LAB_CROSS7" : null, "LAB_CROSS8" : null, "LAB_CROSS9" : null, "LAB_CROSS10" : null, "LAB_CROSS11" : null, "LAB_CROSS12" : null, "LAB_CROSS13" : null, "LAB_LOCK" : 1, "LAB_AGE" : 0, "LAB_SEX" : "F", "LAB_MATERIAL" : "undefined", "LAB_PAT_INOUT" : "I", "LAB_CREATED_BY" : "done", "LAB_CREATED_DATE" : null, "LAB_LAST_MODIFIED_BY" : "2022-11-02 00:42:33", "LAB_LAST_MODIFIED_DATE" : "0000-00-00 00:00:00", "LAB_ACTIVE" : 127, "LAB_STATUS" : "1", "LAB_EXA_ID_A_DESC" : "3.1 Blood Slide (Malaria)" }', 'E', 1),
	(3, '2023-06-05 20:13:06', '2022-11-02 19:57:39', '{ "OPD_ID" : 48, "OPD_WRD_ID_A" : "OPD", "OPD_DATE" : "2022-11-02 19:57:39", "OPD_NEW_PAT" : "N", "OPD_PROG_YEAR" : 44, "OPD_SEX" : "M", "OPD_AGE" : 65, "OPD_DIS_ID_A" : "15", "OPD_DIS_ID_A_2" : null, "OPD_DIS_ID_A_3" : null, "OPD_REFERRAL_FROM" : null, "OPD_REFERRAL_TO" : "R", "OPD_NOTE" : "", "OPD_PAT_ID" : 701010, "OPD_USR_ID_A" : "admin", "OPD_NEXT_VISIT_ID" : null, "OPD_LOCK" : 0, "OPD_CREATED_BY" : null, "OPD_CREATED_DATE" : "2022-11-07 19:57:39", "OPD_LAST_MODIFIED_BY" : null, "OPD_LAST_MODIFIED_DATE" : null, "OPD_ACTIVE" : 1, "OPD_PRESCRIPTION" : null, "OPD_DIS_ID_A_TYPE_DESC" : "4.NON-COMMUNICABLE DISEASES", "OPD_DIS_ID_A_DESC" : "Gastro-intestinal DISEASEss (non infective)", "OPD_DIS_ID_A_2_TYPE_DESC" : null, "OPD_DIS_ID_A_2_DESC" : null, "OPD_DIS_ID_A_3_TYPE_DESC" : null, "OPD_DIS_ID_A_3_DESC" : null }', 'O', 1),
	(4, '2023-06-05 20:13:06', '2022-11-20 23:29:50', '{ "OPD_ID" : 367, "OPD_WRD_ID_A" : "OPD", "OPD_DATE" : "2023-11-20 23:29:50", "OPD_NEW_PAT" : "N", "OPD_PROG_YEAR" : 359, "OPD_SEX" : "M", "OPD_AGE" : 53, "OPD_DIS_ID_A" : "19", "OPD_DIS_ID_A_2" : null, "OPD_DIS_ID_A_3" : null, "OPD_REFERRAL_FROM" : null, "OPD_REFERRAL_TO" : null, "OPD_NOTE" : "", "OPD_PAT_ID" : 701010, "OPD_USR_ID_A" : "admin", "OPD_NEXT_VISIT_ID" : null, "OPD_LOCK" : 0, "OPD_CREATED_BY" : "admin", "OPD_CREATED_DATE" : "2022-11-20 23:29:50", "OPD_LAST_MODIFIED_BY" : "admin", "OPD_LAST_MODIFIED_DATE" : "2022-11-20 23:29:50", "OPD_ACTIVE" : 1, "OPD_PRESCRIPTION" : null, "OPD_DIS_ID_A_TYPE_DESC" : "4.NON-COMMUNICABLE DISEASES", "OPD_DIS_ID_A_DESC" : "Other cardio-vascular DISEASEs", "OPD_DIS_ID_A_2_TYPE_DESC" : null, "OPD_DIS_ID_A_2_DESC" : null, "OPD_DIS_ID_A_3_TYPE_DESC" : null, "OPD_DIS_ID_A_3_DESC" : null }', 'O', 1),
	(5, '2023-06-05 20:13:06', '2022-05-13 20:41:05', '{ "ADM_ID" : 49, "ADM_IN" : 0, "ADM_TYPE" : "N", "ADM_WRD_ID_A" : "I", "ADM_YPROG" : 837, "ADM_PAT_ID" : 701010, "ADM_DATE_ADM" : "2022-05-09 00:46:17", "ADM_ADMT_ID_A_ADM" : "I", "ADM_FHU" : null, "ADM_IN_DIS_ID_A" : "30", "ADM_OUT_DIS_ID_A" : "30", "ADM_OUT_DIS_ID_A_2" : null, "ADM_OUT_DIS_ID_A_3" : null, "ADM_DATE_DIS" : "2022-05-13 20:41:05", "ADM_DIST_ID_A" : "EQ", "ADM_NOTE" : null, "ADM_TRANS" : 0, "ADM_PRG_DATE_VIS" : null, "ADM_PRG_PTT_ID_A" : null, "ADM_PRG_DATE_DEL" : null, "ADM_PRG_DLT_ID_A" : null, "ADM_PRG_DRT_ID_A" : null, "ADM_PRG_WEIGHT" : null, "ADM_PRG_DATE_CTRL1" : null, "ADM_PRG_DATE_CTRL2" : null, "ADM_PRG_DATE_ABORT" : null, "ADM_USR_ID_A" : "admin", "ADM_LOCK" : 3, "ADM_DELETED" : "N", "ADM_CREATED_BY" : "admin", "ADM_CREATED_DATE" : "2022-05-09 00:46:17", "ADM_LAST_MODIFIED_BY" : "admin", "ADM_LAST_MODIFIED_DATE" : "2022-05-13 20:41:05", "ADM_ACTIVE" : 1, "ADM_WRD_ID_A_DESC" : "MALE WARD", "ADM_ADMT_ID_A_ADM_DESC" : "SELF", "ADM_IN_DIS_ID_A_DESC" : "Diarrhoea-Not bloody", "ADM_OUT_DIS_ID_A_DESC" : "Diarrhoea-Not bloody", "ADM_OUT_DIS_ID_A_2_DESC" : null, "ADM_OUT_DIS_ID_A_3_DESC" : null, "ADM_DIST_ID_A_DESC" : "NORMAL DISCHARGE" }', 'A', 1); 
	