select YEAR(date_of_birth) as born_year , count(*) as 'No. of Students' from intern 
join person on intern.person_id = person.person_id group by born_year;