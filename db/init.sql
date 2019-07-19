drop table if exists productz;

create table productz (
    id serial primary key,
    name text,
    price integer,
    img text
);

insert into productz
(name, price, img)
values
( 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXVww9mAYQqkC_kZgHdpsVvrwFCUn8nTKilGkWpNZA5_YCUJ0THw', 0,'free friend for life' );

insert into productz
(name, price, img)
values
( 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjHvunc3b_jAhUpr1QKHcQ4D-QQjRx6BAgBEAU&url=https%3A%2F%2Fwww.emojidex.com%2Femoji%2Fkatana&psig=AOvVaw2auxNvbsbsTxZ5NRENcatv&ust=1563582730202203', 1900,'katana' );

insert into productz
(name, price, img)
values
( 'https://cdn.mos.cms.futurecdn.net/9VQAHk5WBhoVvifCs4e8tA-970-80.jpg', 1000 ,'Cassiopeia');

insert into productz
(name, price, img)
values
( 'https://i.ytimg.com/vi/51HzOxJhVgk/maxresdefault.jpg', 11,'Moppers' );