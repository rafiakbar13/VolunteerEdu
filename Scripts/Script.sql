CREATE TABLE IF NOT EXISTS role_user(
	role_user_id integer not null primary key AUTOINCREMENT,
	detail varchar(10) not null
);

--INSERT INTO role_user(role_user_id, detail)
--	VALUES (1, 'admin');

--INSERT INTO role_user(role_user_id, detail)
--	VALUES (2, 'user');



CREATE TABLE IF NOT EXISTS role_act(
	role_act_id integer not null primary key AUTOINCREMENT,
	detail varchar(15) not null
);

--INSERT INTO role_act(role_act_id, detail)
--	VALUES (1, 'participant');

--INSERT INTO role_act(role_act_id, detail)
--	VALUES (2, 'volunteer');


CREATE TABLE IF NOT EXISTS class_schedules (
	class_id integer not null primary key AUTOINCREMENT,
	title varchar(255) not null,
	date date not null,
	time time not null,
	place varchar(255) not null,
	image varchar(255) not null,
	detail text not null
);

CREATE TABLE IF NOT EXISTS users(
	user_id integer not null primary key AUTOINCREMENT,
	fullname varchar(100) not null,
	email varchar(100) not null,
	password varchar not null,
	phone varchar(20) not null,
	address varchar not null,
	role_user_id integer,
	CONSTRAINT fk_role_user
		FOREIGN KEY (role_user_id)
		REFERENCES role_user(role_user_id)
);

--CREATE TABLE gallery(
--	image_id integer not null primary key AUTOINCREMENT,
--	filename varchar
--);

CREATE TABLE IF NOT EXISTS activities(
	activity_id integer not null primary key AUTOINCREMENT,
	user_id integer,
	class_id integer,
	role_act_id integer,
	FOREIGN KEY (user_id) REFERENCES users(user_id),
	FOREIGN KEY (class_id) REFERENCES class_schedules(class_id),
	FOREIGN KEY (role_act_id) REFERENCES role_act(role_act_id)
);

