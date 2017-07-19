<?php
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$phone = trim($_POST['phone']);
$password = trim($_POST['password']);
$dt = date('Y-m-d H:i:s');

if ($name == '' || $email == '' || $phone == '' || $password == '' ){
    echo 'Заполните все поля!';
}elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)){
    echo 'Введите корректный адрес электронной почты!';
}else {
    file_put_contents('index.html', "$dt $name $email $phone $password \n", FILE_APPEND);
    echo '1';
}