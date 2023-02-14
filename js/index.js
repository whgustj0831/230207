var ww = $(window).width()
if (ww>700) {
    $('html').addClass('pc')
} else {
    $('html').addClass('mobile')
}

$('#header #nav .depth1 > li').on('mouseover', function(){
    if ( $('html').hasClass('pc') ) {
        $(this).find('.depth2').stop().slideDown()
    }
})
$('#header #nav .depth1 > li').on('mouseout', function(){
    if ( $('html').hasClass('pc') ) {
        $(this).find('.depth2').stop().slideUp()
    }
})
$('#header .open').on('click', function(){
    $(this).parents('#header').addClass('on')
})

$('#header .close').on('click', function(){
    $(this).parents('#header').removeClass('on')
})

$('.article1 .slide_group').slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    arrows:true,
    pauseOnFocus:false,
    prevArrow:'<button class="slick-prev slick-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow:'<button class="slick-next slick-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
})
$('.slide_group1').slick({
    slidesToShow:3,
    autoplay:true,
    autoplaySpeed:2000,
    prevArrow:false,
    nextArrow:false,
    centerMode:true,
    pauseOnFocus:false,
    responsive:[{ 
        breakpoint:1025,
        settings:{
            slidesToShow: 3,
        }
     }]
})

// 스크롤 이벤트(애니메)
// 팝업(...)