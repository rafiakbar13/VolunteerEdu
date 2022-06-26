SELECT  
		class_id,
		user_id,
		detail
	FROM
		role_act
		LEFT JOIN class_schedules ON role_act.class_id = class_schedules.class_id
		LEFT JOIN users ON role_act.user_id = users.user_id
		