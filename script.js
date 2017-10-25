/**
 * Created by Ksenya on 02.06.2017.
 */
//
//var object = ['Vasya', 'Pupkin'];
//
//
//
//const showDetails = ({name, lastName}) => {
//
//    return `Hello ${name} ${lastName}`
//};
//
//var showDetails2 = function(object){
//    var name = object.name;
//    var lastName = object.lastName;
//    var age = object.age;
//    var gender = object.gender;
//    return 'Hello ' + name + ' ' + lastName
//}
$(document).ready(function(){


    jQuery(function($){
        //$("#date").mask("99/99/9999",{placeholder:"+38(050) 660-11-02"});

        $(".phone").mask("+38(999) 999-99-99");
        $('.email').blur(function() { //keyup - срабатывает на лету, недостаток при использовании мыши
            if($(this).val() != '') {
                var pattern = /^([a-z0-9_-])+@[a-z0-9-]+\.([a-z]{2,6}\.)?[a-z]{2,6}$/i;

                if($(this).val().search(pattern) == 0){
                    $('.valid').text('Верно');
                    $('#submit').attr('disabled', false);
                    $(this).removeClass('error').addClass('ok');

                } else {
                    $('.valid').text('Введите корректный e-mail адрес');
                    $('#submit').attr('disabled', true) ;
                    $(this).removeClass('ok').addClass('error');
                }
            } else {
                $('.valid').text('Поле email не должно быть пустым!');
                $(this).addClass('error');
                $('#submit').attr('disabled', true);
            }
        });
    });

    $('#submit').on('click', function(){
        var modal  = $('#myModal-regi');

        if (modal.find('.name').val() == '' || $('.email').val() == '' || $('.phone').val() == '' || $('.password').val() == '' ){
            modal.find('.result-regi').text('Заполните все поля!');
        }else {
            var output =
                '<div class="block-authorisation">'+
                    '<span>' + modal.find('.name').val() + '</span>'+
                    '<span> / </span>'+
                    '<span class="logout">Выход</span>'+
                '</div>';

            $('.modal-body').text('Вы успешно пройшли регистрацию !');

            $('.block-authorisation').hide(1000, function () {
                $(this).html(output).show(1000);
                $('.logout').on('click', function(){
                    location.reload()
                });
            });
        }
    });

    $('.go-in').on('click', function(){
        var output =
            '<div class="block-authorisation">'+
                '<span>' + 'Привет друг' + '</span>'+
                '<span> / </span>'+
                '<span class="logout">Выход</span>'+
            '</div>';

        $('.modal-body').text('Авторизация пройдена !');

        $('.block-authorisation').hide(1000, function () {
           $(this).html(output).show(1000);
           $('.logout').on('click', function () {
               location.reload()
           });
        });
    });













    //Функция для красивого отображения времени.
    function animation(vibor,param) {
        vibor.html(param)
            .css({'marginTop':'-20px','opacity':'0'})
            .animate({'marginTop':'0px','opacity':'1'});
    }

    function get_timer() {

        //Дата для обратного отсчета
        var date_t = new Date().getTime() + 1.5 * 60 * 60 * 1000;

        //Объект даты для обратного отсчета
        //var date_t = new Date(date_new);
        //Объект текущей даты
        var date = new Date();
        //Вычисляем сколько миллисекунд пройдет
        //от текущей даты до даты отсчета времени
        var timer = date_t - date;
        //Проверяем не нужно ли закончить отсчет
        //если дата отсчета еще не истекла, то количество
        //миллисекунд в переменной date_t будет больше чем в переменной date
        if(date_t > date) {

            //Вычисляем сколько осталось дней до даты отсчета.
            //Для этого количество миллисекунд до даты отсчета делим
            //на количество миллисекунд в одном дне
            var day = parseInt(timer/(60*60*1000*24));
            //если полученное число меньше 10 прибавляем 0
            if(day < 10) {
                day = '0' + day;
            }
            //Приводим результат к строке
            day = day.toString();

            //Вычисляем сколько осталось часов до даты отсчета.
            //Для этого переменную timer делим на количество
            //миллисекунд в одном часе и отбрасываем дни
            var hour = parseInt(timer/(60*60*1000))%24;
            //если полученное число меньше 10 прибавляем 0
            if(hour < 10) {
                hour = '0' + hour;
            }
            //Приводим результат к строке
            hour = hour.toString();

            //Вычисляем сколько осталось минут до даты отсчета.
            //Для этого переменную timer делим на количество
            //миллисекунд в одной минуте и отбрасываем часы
            var min = parseInt(timer/(1000*60))%60;
            //если полученное число меньше 10 прибавляем 0
            if(min < 10) {
                min = '0' + min;
            }
            //Приводим результат к строке
            min = min.toString();

            //Вычисляем сколько осталось секунд до даты отсчета.
            //Для этого переменную timer делим на количество
            //миллисекунд в одной минуте и отбрасываем минуты
            var sec = parseInt(timer/1000)%60;
            //если полученное число меньше 10 прибавляем 0
            if(sec < 10) {
                sec = '0' + sec;
            }
            //Приводим результат к строке
            sec = sec.toString();
        }
        else {
            $("#clock").html("<span id='stop'>Отсчет закончен!!!</span>");
        }
        //alert(day + " : " + hour + " : " + min + " : " + sec);

        //Выводим дни
        //Проверяем какие предыдущие цифры времени должны вывестись на экран
        //Для десятков дней
        if(day[1] == 9 &&
            hour[0] == 2 &&
            hour[1] == 3 &&
            min[0] == 5 &&
            min[1] == 9 &&
            sec[0] == 5 &&
            sec[1] == 9) {
            animation($("#day0"),day[0]);
        }
        else {
            $("#day0").html(day[0]);
        }
        //Для единиц  дней
        if(hour[0] == 2 &&
            hour[1] == 3 &&
            min[0] == 5 &&
            min[1] == 9 &&
            sec[0] == 5 &&
            sec[1] == 9) {
            animation($("#day1"),day[1]);
        }
        else {
            $("#day1").html(day[1]);
        }
        //Выводим часы
        //Проверяем какие предыдущие цифры времени должны вывестись на экран
        //Для десятков часов
        if(hour[1] == 3 &&
            min[0] == 5 &&
            min[1] == 9 &&
            sec[0] == 5 &&
            sec[1] == 9) {
            animation($("#hour0"),hour[0]);
        }
        else {
            $("#hour0").html(hour[0]);
        }
        //Для единиц часов
        if(min[0] == 5 &&
            min[1] == 9 &&
            sec[0] == 5 &&
            sec[1] == 9) {
            animation($("#hour1"),hour[1]);
        }
        else {
            $("#hour1").html(hour[1]);
        }

        //Выводим минуты
        //Проверяем какие предыдущие цифры времени должны вывестись на экран
        //Для десятков минут
        if(min[1] == 9 &&
            sec[0] == 5 &&
            sec[1] == 9) {
            animation($("#min0"),min[0]);
        }
        else {
            $("#min0").html(min[0]);
        }
        //Для единиц минут
        if(sec[0] == 5 && sec[1] == 9) {
            animation($("#min1"),min[1]);
        }
        else {
            $("#min1").html(min[1]);
        }

        //Выводим секунды
        //Проверяем какие предыдущие цифры времени должны вывестись на экран
        //Для десятков секунд
        if(sec[1] == 9) {
            animation($("#sec0"),sec[0]);
        }
        //Для единиц секунд
        else {
            $("#sec0").html(sec[0]);
        }
        animation($("#sec1"),sec[1]);
        //Периодически вызываем созданную функцию,
        //интервал вызова одна секунда(1000 милли секунд)
        setTimeout(get_timer,1000);


    }
    get_timer();

    $('.goods-day-button').on('click', function () {
        var prom = $(this).siblings('.hide-goods');
        $(this).text(prom .is(':visible') ? 'Весь список' : 'Скрыть');
        prom.toggle('show')
    });


    $('.btn-more').on('click', function () {
        var btn = $(this).siblings('.text-article');
        $(this).text(btn .is(':visible') ? 'Больше' : 'Меньше');
        btn.toggle('show')
    });

    $(window).scroll(function(){
        var cart = $('#fly-cart');
        if ( $(window).scrollTop() > 200 ){
            cart.css('display','flex')
        } else {
            cart.css('display','none');
        }
    });

    $('#question-answer').on('click', function(){
        $(this).siblings('#wrap-chat').show('slow');
        $('.close').on('click', function() {
            $(this).parents('#wrap-chat').hide('slow');
        })
    })

});
