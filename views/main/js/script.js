$(function () {



	var numberArray = [],
  emailRegular = /^[A-Za-z0-9]\.?([`\w-]\.?)+@[a-z]+(\.[a-z]+)+$/g,
  $userName = $('[name="user_name"]'),
  $userPhone = $('[name="user_phone"]'),
  $userCountry = $('[name="user_country"]'),
  $userEmail = $('[name="user_email"]'),
  $userPassword1 = $('[name="password_1"]'),
  $userPassword2 = $('[name="password_2"]'),
  $registrationSubmit = $('[name="registration_submit"]');
  for (var i = 0; i < 10; i++) {
    numberArray[i] = i;
  }

  $userName.keypress(function (e) {
    if (e.key.search(/[`'A-zА-я\sіїЇІёЁ-]/g) == -1) {
     return false;
   }
 });
  $userPhone.keypress(function (e) {
    if (e.key.search(/[\s()0-9+-]/g) == -1) {
     return false;
   }
 });
  $userCountry.keypress(function (e) {
    if (e.key.search(/[`'A-zА-я\sіїЇІёЁ]/g) == -1) {
     return false;
   }
 });
  $userEmail.blur(function () {
    if ($userEmail[0].value.search(emailRegular) == -1) {
     $userEmail.addClass('registration_form_error');
   }
   else {
     $userEmail.removeClass('registration_form_error');
   }
 });
  $userPassword2.blur(function () {
    if ($userPassword1[0].value != $userPassword2[0].value) {
     $userPassword1.addClass('registration_form_error');
     $userPassword2.addClass('registration_form_error');
   }
   else {
     $userPassword1.removeClass('registration_form_error');
     $userPassword2.removeClass('registration_form_error');
   }
 });

	//function2
	$('.nav li').hover(function () {
		$(this).css('background', 'rgba(0,0,0,0.1)');
		$(this).css('transition', 'background 0.6s');
	}, function () {
		$(this).css('background', '#3c8dbc');
		$(this).css('transition', 'background 0.6s');
	});

	$('.log_animate').click(function () {
		$('.form_log').show(1000);
		$('#overlay_log').show(400);
	});
	$('#overlay_log').click(function () {
		$(this).hide(400);
		$('.form_log').hide(400);
	});

	$('.connect').click(function () {
		$('#overlay_log').show(600);
		$('.us_info').show(1000);
	});
	$('#overlay_log').click(function () {
		$(this).hide(400);
		$('.us_info').hide(400);
	});
	$('.btn-default').click(function () {
		$('#overlay_log').hide(400);
		$('.form_log').hide(400);
	});
	$('body').on('click', '.click-remove', function () {
		$('.click-remove').parents('.resize-remove').remove();
	});

  var numberArray = [],
  emailRegular = /^[A-Za-z0-9]\.?([`\w-]\.?)+@[a-z]+(\.[a-z]+)+$/g,
  $userName = $('[name="user_name"]'),
  $userPhone = $('[name="user_phone"]'),
  $userCountry = $('[name="user_country"]'),
  $userEmail = $('[name="user_email"]'),
  $userPassword1 = $('[name="password_1"]'),
  $userPassword2 = $('[name="password_2"]'),
  $registrationSubmit = $('[name="registration_submit"]');
  for (var i = 0; i < 10; i++) {
    numberArray[i] = i;
  }

  $userName.keypress(function (e) {
    if (e.key.search(/[`'A-zА-я\sіїЇІёЁ-]/g) == -1) {
      return false;
    }
  });
  $userPhone.keypress(function (e) {
    if (e.key.search(/[\s()0-9+-]/g) == -1) {
      return false;
    }
  });
  $userCountry.keypress(function (e) {
    if (e.key.search(/[`'A-zА-я\sіїЇІёЁ]/g) == -1) {
      return false;
    }
  });
  $userEmail.blur(function () {
    if ($userEmail[0].value.search(emailRegular) == -1) {
      $userEmail.addClass('registration_form_error');
    }
    else {
      $userEmail.removeClass('registration_form_error');
    }
  });
  $userPassword2.blur(function () {
    if ($userPassword1[0].value != $userPassword2[0].value) {
      $userPassword1.addClass('registration_form_error');
      $userPassword2.addClass('registration_form_error');
    }
    else {
      $userPassword1.removeClass('registration_form_error');
      $userPassword2.removeClass('registration_form_error');
    }
  });

    //function2
    $('.nav li').hover(function () {
      $(this).css('background', 'rgba(0,0,0,0.1)');
      $(this).css('transition', 'background 0.6s');
    }, function () {
      $(this).css('background', '#3c8dbc');
      $(this).css('transition', 'background 0.6s');
    });

    $('.log_animate').click(function () {
      $('.form_log').show(1000);
      $('#overlay_log').show(400);
    });
    $('#overlay_log').click(function () {
      $(this).hide(400);
      $('.form_log').hide(400);
    });

    $('.connect').click(function () {
      $('#overlay_log').show(600);
      $('.us_info').show(1000);
    });
    $('#overlay_log').click(function () {
      $(this).hide(400);
      $('.us_info').hide(400);
    });
    $('.btn-default').click(function (e) {
      e.preventDefault();
      $('#overlay_log').hide(400);
      $('.form_log').hide(400);
    });
    $('body').on('click', '.click-remove', function () {
      $('.click-remove').parents('.resize-remove').remove();
    });


    // add participats for reg crew



    $('.part').nextAll('.part').hide();
    window.a = 1;
    $('#add_part').on('click', function () {
      $('.part' + window.a).slideDown(400);
      var dist = $(this).offset().top;
      $('body,html').animate({scrollTop: dist}, 500);
      window.a++;
    });
    $('body').on('click', 'a.remove-part', function () {
      $(this).parents('.part').slideUp(300);
    });

	// button add new trainer
	var incr_train = 0;
	$('body').on('сlick', '.add-trainer', function () {
		window.incr_train++;

		let trainer_node = +'<div class="form-group">'
    +'<div class="col-sm-12">'
    +'<input type="text" class="form-control" name="club_trener_' + window.incr_train + '" id="inputPassword3" placeholder="Тренер №' + window.incr_train + '">'
    +'</div>'
    +'</div>';

    $('.add_train_box').append(trainer_node);

  });
//MENU-EVENT
$('.tabs').each(function () {
  $(this).children().filter(':first').addClass('active');
});
$('.info_event').each(function () {
  $(this).children().not(':first').hide();
});

$('.tabs a').click(function () {
  $(this).parents('.tabs').find('li').removeClass('active');
  $(this).parents('li').addClass('active');
  var target = $(this).attr('href');
  $(this).parents('.tabs').find('a').each(function () {
   $($(this).attr('href')).hide();
 });
  $(target).show();
  return false;
});
$('.info_event').each(function () {
  $(this).children().children('div').css('padding-top', '50px');
});




$('.part').nextAll('.part').hide();
window.a=1;
$('#add_part').on('click',function(){
  $('.part'+window.a).slideDown(400);
  var dist= $(this).offset().top;
  $('body,html').animate({scrollTop: dist}, 500);
  window.a++;
});
$('body').on('click', 'a.remove-part', function(){
  $(this).parents('.part').slideUp(300);
});

$('.part').nextAll('.part').hide();
window.a = 1;
$('#add_part').on('click', function () {
  $('.part' + window.a).slideDown(400);
  var dist = $(this).offset().top;
  $('body,html').animate({scrollTop: dist}, 500);
  window.a++;
});
$('body').on('click', 'a.remove-part', function () {
  $(this).parents('.part').remove();
});

    // button on page: organization for create event, reg club, dance
    $('.event_data_list').on('click', function () {
      $('.search_wrap').hide(400);
      $('.list_information').slideUp();
      $('.search_wrap_event').slideDown(400);
      $('.search_wrap input').removeClass('active');
      $('.search_wrap_event input').addClass('active');
    });
    $('.category_data_list').on('click', function () {
      $('.search_wrap').hide(400);
      $('.list_information').slideUp();
      $('.search_wrap_category').slideDown(400);
      $('.search_wrap input').removeClass('active');
      $('.search_wrap_category input').addClass('active');
    });
    $('.club_data_list').on('click', function () {
      $('.search_wrap').hide(400);
      $('.list_information').slideUp();
      $('.search_wrap_club').slideDown(400);
      $('.search_wrap input').removeClass('active');
      $('.search_wrap_club input').addClass('active');
    });

    // button add new trainer
    var incr_train = 0;
    $('body').on('click', '#add-trainer', function () {
      console.log('asd');
      incr_train++;

      let trainer_node = '<div class="form-group">'
      + '<label for="inputPassword3" class="col-sm-2 control-label">Тренер</label>'
      + '<div class="col-sm-10">'
      + '<input type="text" class="form-control" name="club_trener_' + incr_train + '" id="inputPassword3" placeholder="ФИО тренера">'
      + '</div>'
      + '</div>';

      $('.add_train_box').after(trainer_node);
    });

    // button add new trainer
    var incr_train = 0;
    $('body').on('сlick', '.add-trainer', function () {
      window.incr_train++;
      console.log('asd');
      let trainer_node = +'<div class="form-group">'
      + '<label for="inputPassword3" class="col-sm-2 control-label">Тренер №1</label>'
      + '<div class="col-sm-10">'
      + '<input type="text" class="form-control" name="club_trener_' + window.incr_train + '" id="inputPassword3" placeholder="Тренер №' + window.incr_train + '">'
      + '</div>'
      + '</div>';

      $('.add_train_box').append(trainer_node);
    });
    window.summ = 0;
    $('tbody>').each(function (i) {
      $(this).children(':first').text(i + 1);
      var price = parseInt($(this).children().eq(1).text());
      window.summ = window.summ + price;
    });

    $('body').on('click', 'tbody>tr', function () {
      $('.bg-opacity').show(200);

      let top_height= $(this).offset().top;
      $('.popup-control').css('top',top_height+'px');
      $('.popup-control').show(200);
    });
    $('body').on('click', '.bg-opacity', function(){
      $(this).hide();
      $('.popup-control').hide(200);
    });

    // add class activ btn
    $('.btn_table_list').on('click', function(){
      $('.btn_table_list').removeClass('activ_table_list');
      $(this).addClass('activ_table_list');
    });
    $('.btn-plus').on('click', function(){
      $('.btn-plus').removeClass('active_btn_plus');
      $(this).addClass('active_btn_plus');
    });
    $('.button-list').on('click', function(){
      $('.button-list').removeClass('active_button_list');
      $(this).addClass('active_button_list');
    });

    // event options list the clubs target click
    $('.list_club_data li').on('click', function(){
      let id = $(this).attr('data-club-id');
      $.ajax({
        url:'regParticipantForEvent/'+id,
        type:'POST',
        dataType:'html',
        success:TakeInfoPartisipant
      });

      $('.bg_shadow').show();
      $('.list_table_part').show(300);
      $(this).css({
        'z-index':'801',
        'position':'relative'
      });
    });


    //--------------- take JSON all information paticipant for registration on event
    function TakeInfoPartisipant(data){
      let list = JSON.parse(data);
      let nameList = list.map(function(participant){

        let node = '<tr role="row" class="odd" data-id-part="'+ participant.id_participant +'">'
        +'<td class="sorting_1">'+ participant.id_participant +'</td>'
        +'<td>'+ participant.first_name +'</td>'
        +'<td>'+ participant.second_name +'</td>'
        +'<td>'+ participant.third_name +'</td>'
        +'<td>'+ participant.birth_date +'</td>'
        +'<td>'+ participant.equals_date +'</td>'
        +'</tr>';

        return node;
      });
      let box = $('.list_table_part').find('#table_part > .part_list');
      box.find().remove();
      nameList.forEach(function(element){
        box.append(element);
      });
    };
//--------------------------- END



$('.bg_shadow').on('click', function(){
  $(this).hide();
  $('.list_table_part').hide(300);
  $('.list_club_data li').css({
    'z-index':'0',
    'position':'static'
  });
  $('#table_part .part_list .active_part').removeClass('active_part');
});

$('.accordeon_category').hide();
$('.form_block_reg').hide();

$('body').on('click', '#table_part .part_list tr', function(){
  $(this).toggleClass('active_part');
});


function editCategory(data) {
  let list = JSON.parse(data);
  console.log(list, data);
  let element = list.map(function(category) {

    let node =  '<li>'
    +'<div class="dance_category"><span>' +category.d_c_program+ '</span></div>'
    +'</li>'
    +'<ul class="list_category_down">'
    +'<li class="act_part">' +category.d_c_age_category+ '"-"' +category.d_c_nomination+ '"-"' +category.d_c_league+ '</li>'
    +'</ul>';
    return node
    
  });

  let box = $('.accordeon_category');
  $box.find().remove();
  element.forEach(function(element){
    box.append(element);
  });
};

$('body').on('click', '.block_reg .table_reg .part_list tr', function(){

  $.ajax({
    url:'ajax_test_json',
    type:'POST',
    dataType:'html',
    success:editCategory
  });
  $('.accordeon_category').show(300);
});


//================ take participant with list and add on page
var checkRepet = function(id) {
  let $part = [];
  $('#table_take_part').find('tr').each(function(i){
    $part[i] = $(this).attr('data-id-part');
  });

  if($part.length){
    for(i=0; i<=$part.length; i++){
      if( $part[i] === id ){
        return false
      }else{
        return true
      };
    };
  }else{
    return true
  };

};

$('.take_btn').on('click', function(){
  $('.bg_shadow').hide();
  $('.list_table_part').hide(300);
  $('.list_club_data li').css({
    'z-index':'0',
    'position':'static'
  });

  $('.list_table_part .part_list tr').each(function(i){
    var arr_part = [],
    $that = $(this);
    thisId = $that.attr('data-id-part');

    if( $that.hasClass('active_part') && checkRepet(thisId) ){
      arr_part[i]=$that.html();
      $('.block_reg .part_list').append('<tr data-id-part="' +thisId+ '"  >' +arr_part[i]+ '</tr>');
    };

  });

  $('#table_part .part_list .active_part').removeClass('active_part');

});

// $('body').on('click', '#table_take_part tr', function(){
//   $(this).toggleClass('active_part');
//   console.log('asd');
// });

//========== hide show accordeon category 





$('body').on('click','#btn_go_event_cabinet', function(){
  let elementId = $(this).find('.list-search').attr('data-element-id');
  console.log(elementId);
  $(this).children('a').attr('href', '../pick_categories_for_event/'+elementId);
});
$('body').on('click','#btn_go_club_cabinet', function(){
  let elementId = $(this).find('.list-search').attr('data-element-id');
  console.log( '../cabinet_club/'+elementId);
  $(this).children('a').attr('href', '../cabinet_club/'+elementId);
});

    // ---------- Accordion with dance categary list for participant registration at the event
    $('.list_category_down').hide();
    var $accordeonLi = $('.accordeon_category').children('li');
    $accordeonLi.on('click', function(){
      $accordeonLi.next('.list_category_down').slideUp(300);
      $(this).next('.list_category_down').slideDown(300);

    });
    $('.list_category_down li').on('click', function(){
      $(this).toggleClass('act_part');
    });

  });

    // add new part in club on page reg part for event
    // $('.new_part_btn').on('click', function(){
    //   $('#table_part').hide(300);
    //   $.ajax({
    //     url:'view_add_part',
    //     type:'POST',
    //     dataType:'html',
    //     seccess:function(data){
    //       $('.list_table_part').append(data);
    //       console.log(data);
    //     }
    //   });
    // });






