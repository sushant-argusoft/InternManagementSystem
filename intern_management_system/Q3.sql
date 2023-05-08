select count(*) as COUNT from intern 
join course_enrolled 
on intern.intern_id = course_enrolled.intern_id 
join course 
on  course.course_id = course_enrolled.course_id 
group by course.course_id order by COUNT  desc limit 2,1;
