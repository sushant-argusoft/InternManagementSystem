insert into address(address_id,house_number,street_number,street_name,pin_code,city_name , country_name)
values 
(1, 1, 1, 'wolf street',101010,'Lucknow','India'),
(2, 1, 2, 'bear street',101010,'Lucknow','India'),
(3, 1, 3, 'wolf street',101010,'Mumbai','India'),
(4, 1, 4, 'cat street',101010,'Delhi','India'),
(5, 1, 5, 'dog street',101010,'Delhi','India'),
(6, 1, 6, 'giraffe street',101010,'Kolkata','India'),
(7, 1, 7, 'horse street',101010,'Gandhinagar','India');

insert into company(company_id , name , address_id)
values 
(1,'Argusoft', 7 ),
(2, 'Textbook',3),
(3, 'Thales',4),
(4, 'Sevosys',5),
(5, 'TCS',1),
(6, 'Infosys',2),
(7, 'Bhokaro',6);

insert into person(first_name, last_name, date_of_birth,address_id,`password`,`role`)
values
('Sushant','Sharma','2001-12-03',1,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_INTERN'),
('Sanya','Srivastav','2001-03-11',2,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_INTERN'),
('Archit','Prowal','2000-03-12',3,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_INTERN'),
('Devansh','Singh','2001-03-10',4,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_INTERN'),
('Srinivasan','Bashyam','2001-03-09',5,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_INTERN'),
('Anurag','Seth','1999-02-12',6,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_INTERN'),
('Shivansh','Khare','2001-01-12',7,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_INTERN'),
('Janmejay','Jani','1995-03-12',1,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_MENTOR'),
('Prateek','Garg','1995-03-12',2,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_MENTOR'),
('Harsh','Marolia','1995-03-12',3,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_MENTOR'),
('Jay','Jain','1995-03-12',4,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_MENTOR'),
('Prateek','Gulati','1995-03-12',5,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_MENTOR'),
('Harsh','Sharma','1995-03-12',6,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_MENTOR'),
('Divya','Singh','1994-03-12',7,'$2a$10$wCqB40UBImJpwyZkoE5Auu8RAas42vSAU50vrHXvv8c2YHgeGzioS','ROLE_MENTOR');

insert into mentor(person_id)
values
(8),(9),(10),(11),(12),(13),(14);
insert into intern(mentor_id , person_id)
values
(1,1),(2,2),(3,3),(5,4),(6,5),(7,6),(4,7);

insert into category(category_name) values
('Database'),('Java'),('Web');

insert into course(course_name,c_id,company_id,image_url) values
('Realtional Database Design',1,1,'https://img-c.udemycdn.com/course/480x270/4687762_1121.jpg') ,
('SQL',1,1,'https://img-c.udemycdn.com/course/480x270/4687762_1121.jpg') ,
('MongoDB',1,1,'https://img-c.udemycdn.com/course/480x270/4687762_1121.jpg') ,
('JAVA BASIC',2,1,'https://img-c.udemycdn.com/course/480x270/4687762_1121.jpg') ,
('Maven',2,1,'https://img-c.udemycdn.com/course/480x270/4687762_1121.jpg'),
('Angular',3,1,'https://img-c.udemycdn.com/course/480x270/4687762_1121.jpg'),
('Node',3,1,'https://img-c.udemycdn.com/course/480x270/4687762_1121.jpg');

insert into course_enrolled(course_id,intern_id)
values
(1,1),
(1,2),
(1,3),
(1,4),
(1,5),
(2,2),
(2,4),
(2,5),
(3,7),
(3,5),
(3,6),
(4,1),
(4,4),
(6,5),
(7,5),
(7,6),
(1,6);



