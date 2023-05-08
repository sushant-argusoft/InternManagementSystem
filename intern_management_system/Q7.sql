select first_name,last_name , city_name as city from mentor 
join person on mentor.person_id = person.person_id
join address on address.address_id = person.address_id 
where city_name!='Mumbai';