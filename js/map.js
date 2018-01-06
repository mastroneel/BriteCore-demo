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

// ****************
// Open state lists
// ****************

// open state lists
// CA
$(".open-list-ca").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open", 2000);
  $(".state").removeClass('hovered');
  $('#CA').addClass('hovered');
  $(".side-menu-ca").addClass('open', 2000);
  // if $('.state-list').not(this).parent.hasClass('.open') {
  //   $('.state-list').parent.removeClass('.open')
  // }
});

$(".btn-close").click(function () {
  $('.all-list').removeClass("invisible", 2000);
  $(".side-menu-ca").removeClass('open', 2000);
  $('#CA').removeClass('hovered');
});

// CO
$(".open-list-co").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open", 2000);
  $(".state").removeClass('hovered');
  $('#CO').addClass('hovered');
  $(".side-menu-co").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $(".side-menu-co").removeClass('open', 2000);
  $('#CO').removeClass('hovered');
});

// FL
$(".open-list-fl").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open");
  $(".state").removeClass('hovered');
  $('#FL').addClass('hovered');
  $(".side-menu-fl").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $(".side-menu-fl").removeClass('open', 2000);
  $('#FL').removeClass('hovered');
});

// LA
$(".open-list-la").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open");
  $(".state").removeClass('hovered');
  $('#LA').addClass('hovered');
  $(".side-menu-la").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $(".side-menu-la").removeClass('open', 2000);
  $('#LA').removeClass('hovered');
});

// TX
$(".open-list-tx").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open");
  $(".state").removeClass('hovered');
  $('#TX').addClass('hovered');
  $(".side-menu-tx").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $(".side-menu-tx").removeClass('open', 2000);
  $('#TX').removeClass('hovered');
});

// CT
$(".open-list-ct").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open");
  $(".state").removeClass('hovered');
  $('#CT').addClass('hovered');
  $(".side-menu-ct").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $(".side-menu-ct").removeClass('open', 2000);
  $('#CT').removeClass('hovered');
});

// MA
$(".open-list-ma").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open");
  $(".state").removeClass('hovered');
  $('#MA').addClass('hovered');
  $(".side-menu-ma").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $(".side-menu-ma").removeClass('open', 2000);
  $('#MA').removeClass('hovered');
});

// NY
$(".open-list-ny").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open");
  $(".state").removeClass('hovered');
  $('#NY').addClass('hovered');
  $(".side-menu-ny").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $(".side-menu-ny").removeClass('open', 2000);
  $('#NY').removeClass('hovered');
});

// PA
$(".open-list-pa").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open");
  $(".state").removeClass('hovered');
  $('#PA').addClass('hovered');
  $(".side-menu-pa").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $(".side-menu-pa").removeClass('open', 2000);
  $('#PA').removeClass('hovered');
});

// VT
$(".open-list-vt").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open");
  $(".state").removeClass('hovered');
  $('#VT').addClass('hovered');
  $(".side-menu-vt").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $(".side-menu-vt").removeClass('open', 2000);
  $('#VT').removeClass('hovered');
});

// MT
$(".open-list-mt").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open");
  $(".state").removeClass('hovered');
  $('#MT').addClass('hovered');
  $(".side-menu-mt").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $(".side-menu-mt").removeClass('open', 2000);
  $('#MT').removeClass('hovered');
});

// NE
$(".open-list-ne").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open");
  $(".state").removeClass('hovered');
  $('#NE').addClass('hovered');
  $(".side-menu-ne").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $(".side-menu-ne").removeClass('open', 2000);
  $('#NE').removeClass('hovered');
});

// NV
$(".open-list-nv").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open");
  $(".state").removeClass('hovered');
  $('#NV').addClass('hovered');
  $(".side-menu-nv").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $(".side-menu-nv").removeClass('open', 2000);
  $('#NV').removeClass('hovered');
});

// OK
$(".open-list-ok").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open");
  $(".state").removeClass('hovered');
  $('#OK').addClass('hovered');
  $(".side-menu-ok").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $(".side-menu-ok").removeClass('open', 2000);
  $('#OK').removeClass('hovered');
});

// WA
$(".open-list-wa").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open");
  $(".state").removeClass('hovered');
  $('#WA').addClass('hovered');
  $(".side-menu-wa").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $('.state-list').parent().removeClass("open");
  $(".side-menu-wa").removeClass('open', 2000);
  $('#WA').removeClass('hovered');
});

// WY
$(".open-list-wy").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open");
  $(".state").removeClass('hovered');
  $('#WY').addClass('hovered');
  $(".side-menu-wy").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $(".side-menu-wy").removeClass('open', 2000);
  $('#WY').removeClass('hovered');
});

// OR
$(".open-list-or").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open");
  $(".state").removeClass('hovered');
  $('#OR').addClass('hovered');
  $(".side-menu-or").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $(".side-menu-or").removeClass('open', 2000);
  $('#OR').removeClass('hovered');
});

// AZ
$(".open-list-az").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open");
  $(".state").removeClass('hovered');
  $('#AZ').addClass('hovered');
  $(".side-menu-az").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $(".side-menu-az").removeClass('open', 2000);
  $('#AZ').removeClass('hovered');
});

// NM
$(".open-list-nm").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open");
  $(".state").removeClass('hovered');
  $('#NM').addClass('hovered');
  $(".side-menu-nm").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $(".side-menu-nm").removeClass('open', 2000);
  $('#NM').removeClass('hovered');
});

// IA
$(".open-list-ia").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open");
  $(".state").removeClass('hovered');
  $('#IA').addClass('hovered');
  $(".side-menu-ia").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $(".side-menu-ia").removeClass('open', 2000);
  $('#IA').removeClass('hovered');
});

// IN
$(".open-list-in").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open");
  $(".state").removeClass('hovered');
  $('#IN').addClass('hovered');
  $(".side-menu-in").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $(".side-menu-in").removeClass('open', 2000);
  $('#IN').removeClass('hovered');
});

// MI
$(".open-list-mi").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open");
  $(".state").removeClass('hovered');
  $('#MI').addClass('hovered');
  $(".side-menu-mi").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $(".side-menu-mi").removeClass('open', 2000);
  $('#MI').removeClass('hovered');
});

// ND
$(".open-list-nd").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open");
  $(".state").removeClass('hovered');
  $('#ND').addClass('hovered');
  $(".side-menu-nd").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $(".side-menu-nd").removeClass('open', 2000);
  $('#ND').removeClass('hovered');
});

// SD
$(".open-list-sd").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open");
  $(".state").removeClass('hovered');
  $('#SD').addClass('hovered');
  $(".side-menu-sd").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $(".side-menu-sd").removeClass('open', 2000);
  $('#SD').removeClass('hovered');
});

// WI
$(".open-list-wi").click(function () {
  $('.all-list').addClass("invisible", 2000);
  $('.state-list').parent().removeClass("open");
  $(".state").removeClass('hovered');
  $('#WI').addClass('hovered');
  $(".side-menu-wi").addClass('open', 2000);
});

$(".btn-close").click(function () {
  $(".side-menu-wi").removeClass('open', 2000);
  $('#WI').removeClass('hovered');
});
