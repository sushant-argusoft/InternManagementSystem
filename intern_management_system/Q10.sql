select first_name , last_name , city_name 
    from intern join person on intern.person_id = person.person_id 
    join address on person.address_id = address.address_id 
    where city_name in 
 (select city_name 
    from intern join person on intern.person_id = person.person_id 
    join address on person.address_id = address.address_id group by city_name having count(*) = 1);

