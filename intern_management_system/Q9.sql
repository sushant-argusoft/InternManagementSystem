SELECT DATE_FORMAT(FROM_DAYS(DATEDIFF(NOW(),DATE_OF_BIRTH)), '%Y') + 0 AS age from intern
join person on intern.person_id = person.person_id 
where DATE_FORMAT(FROM_DAYS(DATEDIFF(NOW(),DATE_OF_BIRTH)), '%Y') + 0 > 21; 