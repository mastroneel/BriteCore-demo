var accordionHeader = $('.accordion__header'),
  accordionContent = $('.accordion__content'),
  accordionIcon = $('.accordion__header span');

$(accordionHeader).click(function () {
if ($(this).hasClass('is-active')){
    $(this).next(accordionContent).slideUp('slow');
    $(this).removeClass('is-active');
    $(this).children(".plus-minus-toggle").addClass('collapsed');
}
else {
  // close other content
  $(accordionHeader).not(this).next(accordionContent).slideUp('slow');
  $(accordionHeader).not(this).removeClass('is-active');
  $(accordionHeader).not(this).children(".plus-minus-toggle").addClass('collapsed');
  $(this).next(accordionContent).slideDown('slow');
  $(this).addClass('is-active');
  $(this).children(".plus-minus-toggle").removeClass('collapsed');
}
});

$(".accordion__header#ABC").click(function () {
if ($(this).hasClass('is-active')){
    $(".state").removeClass('hovered');
    $("#CA, #TX, #CO, #LA, #FL").addClass('hovered');
}
else {
  // close other content
  $("#CA, #TX, #CO, #LA, #FL").removeClass('hovered');
}
});

$("#DEF").click(function () {
if ($(this).hasClass('is-active')){
    $(".state").removeClass('hovered');
    $("#CT, #MA, #NY, #PA, #VT").addClass('hovered');
}
else {
  $("#CT, #MA, #NY, #PA, #VT").removeClass('hovered');
}
});

$("#GHI").click(function () {
if ($(this).hasClass('is-active')){
    $(".state").removeClass('hovered');
    $("#MT, #NE, #NV, #OK, #WA, #WY").addClass('hovered');
}
else {
  $("#MT, #NE, #NV, #OK, #WA, #WY").removeClass('hovered');
}
});

$("#PH").click(function () {
if ($(this).hasClass('is-active')){
    $(".state").removeClass('hovered');
    $("#CA, #OR, #WA").addClass('hovered');
}
else {
  $("#CA, #OR, #WA").removeClass('hovered');
}
});

$("#NJ").click(function () {
if ($(this).hasClass('is-active')){
    $(".state").removeClass('hovered');
    $("#AZ, #CA, #NM, #NV, #TX").addClass('hovered');
}
else {
  $("#AZ, #CA, #NM, #NV, #TX").removeClass('hovered');
}
});

$("#MNO").click(function () {
if ($(this).hasClass('is-active')){
    $(".state").removeClass('hovered');
    $("#IA, #IN, #MI, #ND, #SD, #WI").addClass('hovered');
}
else {
  $("#IA, #IN, #MI, #ND, #SD, #WI").removeClass('hovered');
}
});

$("#SP").click(function () {
if ($(this).hasClass('is-active')){
    $(".state").removeClass('hovered');
    $("#CA, #OR, #WA").addClass('hovered');
}
else {
  $("#CA, #OR, #WA").removeClass('hovered');
}
});

// State click color change effects
// $("#CA").click(function () {
// // if ($('#CA').hasClass('hovered')){
// //     // $('#CA').removeClass('hovered');
// // }
// // else {
//   $(".state").removeClass('hovered');
//   $('#CA').addClass('hovered');
//
// // }
// });

// $("#CO").click(function () {
//   $(".state").removeClass('hovered');
//   $('#CO').addClass('hovered');
// });
//
// $("#FL").click(function () {
//   $(".state").removeClass('hovered');
//   $('#FL').addClass('hovered');
// });
//
// $("#LA").click(function () {
//   $(".state").removeClass('hovered');
//   $('#LA').addClass('hovered');
// });
//
// $("#TX").click(function () {
//   $(".state").removeClass('hovered');
//   $('#TX').addClass('hovered');
// });
//
// $("#CT").click(function () {
//   $(".state").removeClass('hovered');
//   $('#CT').addClass('hovered');
// });
//
// $("#MA").click(function () {
//   $(".state").removeClass('hovered');
//   $('#MA').addClass('hovered');
// });
//
// $("#NY").click(function () {
//   $(".state").removeClass('hovered');
//   $('#NY').addClass('hovered');
// });
//
// $("#PA").click(function () {
//   $(".state").removeClass('hovered');
//   $('#PA').addClass('hovered');
// });
//
// $("#VT").click(function () {
//   $(".state").removeClass('hovered');
//   $('#VT').addClass('hovered');
// });
//
// $("#MT").click(function () {
//   $(".state").removeClass('hovered');
//   $('#MT').addClass('hovered');
// });
//
// $("#NE").click(function () {
//   $(".state").removeClass('hovered');
//   $('#NE').addClass('hovered');
// });
//
// $("#NV").click(function () {
//   $(".state").removeClass('hovered');
//   $('#NV').addClass('hovered');
// });
//
// $("#OK").click(function () {
//   $(".state").removeClass('hovered');
//   $('#OK').addClass('hovered');
// });
//
// $("#WA").click(function () {
//   $(".state").removeClass('hovered');
//   $('#WA').addClass('hovered');
// });
//
// $("#WY").click(function () {
//   $(".state").removeClass('hovered');
//   $('#WY').addClass('hovered');
// });
//
// $("#OR").click(function () {
//   $(".state").removeClass('hovered');
//   $('#OR').addClass('hovered');
// });
//
// $("#AZ").click(function () {
//   $(".state").removeClass('hovered');
//   $('#AZ').addClass('hovered');
// });
//
// $("#NM").click(function () {
//   $(".state").removeClass('hovered');
//   $('#NM').addClass('hovered');
// });
//
// $("#IA").click(function () {
//   $(".state").removeClass('hovered');
//   $('#IA').addClass('hovered');
// });
//
// $("#IN").click(function () {
//   $(".state").removeClass('hovered');
//   $('#IN').addClass('hovered');
// });
//
// $("#MI").click(function () {
//   $(".state").removeClass('hovered');
//   $('#MI').addClass('hovered');
// });
//
// $("#ND").click(function () {
//   $(".state").removeClass('hovered');
//   $('#ND').addClass('hovered');
// });
//
// $("#SD").click(function () {
//   $(".state").removeClass('hovered');
//   $('#SD').addClass('hovered');
// });
//
// $("#WI").click(function () {
//   $(".state").removeClass('hovered');
//   $('#WI').addClass('hovered');
// });
