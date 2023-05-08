select city_name as city , group_concat(concat(first_name,' ',last_name))
as 'Full name' from intern 
join person on intern.person_id = person.person_id 
join address on address.address_id = person.address_id group by city; 