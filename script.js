$(document).ready(function(){jQuery(function($){$(".phone").mask("+38(999) 999-99-99");$('.email').blur(function(){if($(this).val()!=''){var pattern=/^([a-z0-9_-])+@[a-z0-9-]+\.([a-z]{2,6}\.)?[a-z]{2,6}$/i;if($(this).val().search(pattern)==0){$('.valid').text('Верно');$('#submit').attr('disabled',false);$(this).removeClass('error').addClass('ok');}else{$('.valid').text('Введите корректный e-mail адрес');$('#submit').attr('disabled',true);$(this).removeClass('ok').addClass('error');}}else{$('.valid').text('Поле email не должно быть пустым!');$(this).addClass('error');$('#submit').attr('disabled',true);}});});$('#submit').on('click',function(){var modal=$('#myModal-regi');if(modal.find('.name').val()==''||$('.email').val()==''||$('.phone').val()==''||$('.password').val()==''){modal.find('.result-regi').text('Заполните все поля!');}else{var output='<div class="block-authorisation">'+'<span>'+modal.find('.name').val()+'</span>'+'<span> / </span>'+'<span class="logout">Выход</span>'+'</div>';$('.modal-body').text('Вы успешно пройшли регистрацию !');$('.block-authorisation').hide(1000,function(){$(this).html(output).show(1000);$('.logout').on('click',function(){location.reload()});});}});$('.go-in').on('click',function(){var output='<div class="block-authorisation">'+'<span>'+'Привет друг'+'</span>'+'<span> / </span>'+'<span class="logout">Выход</span>'+'</div>';$('.modal-body').text('Авторизация пройдена !');$('.block-authorisation').hide(1000,function(){$(this).html(output).show(1000);$('.logout').on('click',function(){location.reload()});});});function animation(vibor,param){vibor.html(param).css({'marginTop':'-20px','opacity':'0'}).animate({'marginTop':'0px','opacity':'1'});}function get_timer(){var date_t=new Date().getTime()+1.5*60*60*1000;var date=new Date();var timer=date_t-date;if(date_t>date){var day=parseInt(timer/(60*60*1000*24));if(day<10){day='0'+day;}day=day.toString();var hour=parseInt(timer/(60*60*1000))%24;if(hour<10){hour='0'+hour;}hour=hour.toString();var min=parseInt(timer/(1000*60))%60;if(min<10){min='0'+min;}min=min.toString();var sec=parseInt(timer/1000)%60;if(sec<10){sec='0'+sec;}sec=sec.toString();}else{$("#clock").html("<span id='stop'>Отсчет закончен!!!</span>");}if(day[1]==9&&hour[0]==2&&hour[1]==3&&min[0]==5&&min[1]==9&&sec[0]==5&&sec[1]==9){animation($("#day0"),day[0]);}else{$("#day0").html(day[0]);}if(hour[0]==2&&hour[1]==3&&min[0]==5&&min[1]==9&&sec[0]==5&&sec[1]==9){animation($("#day1"),day[1]);}else{$("#day1").html(day[1]);}if(hour[1]==3&&min[0]==5&&min[1]==9&&sec[0]==5&&sec[1]==9){animation($("#hour0"),hour[0]);}else{$("#hour0").html(hour[0]);}if(min[0]==5&&min[1]==9&&sec[0]==5&&sec[1]==9){animation($("#hour1"),hour[1]);}else{$("#hour1").html(hour[1]);}if(min[1]==9&&sec[0]==5&&sec[1]==9){animation($("#min0"),min[0]);}else{$("#min0").html(min[0]);}if(sec[0]==5&&sec[1]==9){animation($("#min1"),min[1]);}else{$("#min1").html(min[1]);}if(sec[1]==9){animation($("#sec0"),sec[0]);}else{$("#sec0").html(sec[0]);}animation($("#sec1"),sec[1]);setTimeout(get_timer,1000);}get_timer();$('.goods-day-button').on('click',function(){var prom=$(this).siblings('.hide-goods');$(this).text(prom.is(':visible')?'Весь список':'Скрыть');prom.toggle('show')});$('.btn-more').on('click',function(){var btn=$(this).siblings('.text-article');$(this).text(btn.is(':visible')?'Больше':'Меньше');btn.toggle('show')});$(window).scroll(function(){var cart=$('#fly-cart');if($(window).scrollTop()>200){cart.css('display','flex')}else{cart.css('display','none');}});$('#question-answer').on('click',function(){$(this).siblings('#wrap-chat').show('slow');$('.close').on('click',function(){$(this).parents('#wrap-chat').hide('slow');})})});