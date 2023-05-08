
select full_name as 'Full Name' , date_of_birth as DOB, full_address as 'Full Address',course_name  as 'Course Name' from 

(select concat(first_name, ' ' , last_name) as full_name , 
intern.intern_id as id , date_of_birth,
concat_ws(',',house_number, street_number,street_name,pin_code,city_name,country_name) as full_address
from intern join person
 on intern.person_id = person.person_id 
join address on person.address_id = address.address_id) a
join
(select course_name, intern.intern_id as i_id 
from  intern join course_enrolled 
on intern.intern_id = course_enrolled.intern_id 
join course on course.course_id =
course_enrolled.course_id) p
on p.i_id = a.id;