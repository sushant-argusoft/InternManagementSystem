drop database  if exists `intern_management`;
create database  `intern_management`;
use `intern_management`;

create table address(
    
    address_id int primary key auto_increment,
    house_number int not null,
    street_number int not null,
    street_name varchar(100) not null,
    pin_code int not null,
    city_name varchar(50) not null,
    country_name varchar(50) not null

    
);
create index address_idx on address( house_number, street_number , street_name , pin_code , city_name , country_name );

create table company(
    name varchar(50) not null,
    company_id int primary key auto_increment,
    address_id int not null,
    foreign key (address_id) references address(address_id)
);
create index company_idx on company(name , address_id);

create table person(
   
    person_id int primary key auto_increment,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    date_of_birth date not null,
    address_id int not null,
    `password` varchar(150) not null,
    `role` varchar(20) not null,
    
    foreign key (address_id) references address(address_id)
);
create index  person_idx on person(address_id , first_name , last_name , date_of_birth);

create table mentor(
    mentor_id int primary key auto_increment,
    person_id int not null,
    foreign key (person_id) references person(person_id)
);
create index mentor_idx on mentor(person_id);
create table intern(
    intern_id int primary key auto_increment,
    mentor_id int not null,
    person_id int not null,
    foreign key (mentor_id) references mentor(mentor_id),
    foreign key (person_id) references person(person_id)
);
create index intern_idx on intern(person_id , mentor_id);
create table category( 
    c_id int primary key auto_increment,
    category_name varchar(100) not null
);
create index category_idx on category(category_name);
create table  course(
    course_id int primary key auto_increment,
    course_name varchar(100) not null,
    c_id int not null,
    company_id int not null,
    foreign key(c_id) references category(c_id),
    foreign key(company_id) references company(company_id)
);
create index course_idx on course(c_id , company_id , course_name );
create table course_enrolled(
    course_id int not null,
    intern_id int not null,
    image_url varchar(150) not null,
    foreign key(course_id) references course(course_id),
    foreign key(intern_id) references intern(intern_id)
);
create index course_enrolled_idx on course_enrolled(course_id , intern_id);
