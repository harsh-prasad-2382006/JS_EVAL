create database ecommerce; 
use ecommerce;
create table product(
productId int auto_increment primary key,
productName varchar(100),
category varchar(100),
price decimal(10,2),
stockQuantity int);

select * from product;
