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
    autoplaySpeed:4000,
    dots:true,
    arrows:true,
    pauseOnFocus:false,
    prevArrow:'<button class="slick-prev slick-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow:'<button class="slick-next slick-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
})
$('.slide_group1').slick({
    slidesToShow:3,
    autoplay:true,
    autoplaySpeed: 3500,
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

$('.logo a').click(function(){
    $('html').animate({
        scrollTop:'0'
    }, 500)
    return false
})

// 스크롤 이벤트(애니메)

// let article2Near = $('.article2 .asdf').offset().top - $(window).height()/2

// $(window).on('scroll', function(){
//     let sct = $(this).scrollTop()
//     if (sct>=article2Near) {
//         $('.article2 .asdf').addClass('on')
//     } else {
//         $('.article2 .asdf').removeClass('on')
//     }
// })

// $(window).on('load', function(){
    
//     if ( !sessionStorage.getItem('refresh') ) {
//         sessionStorage.setItem('refresh', 'yes')
//         let count = 0;
//         let timer = setInterval(add, 25)
//         function add() {
//             count++
//             if (count>=100) { 
//                 clearInterval(timer) 
//                 $('.introAni').animate({
//                     left:'-100%'
//                 }, 500, function(){
//                     $(this).addClass('on')
//                 })
//             }
//             $('.introAni div').eq(1).text(count+'%')
//         }
//     } else {
//         $('.introAni').addClass('on')
//     }

//     $('html').animate({
//         scrollTop:0
//     }, 100)

// })
// 뭐가 문젤까 ㅋㅋ 퍼 자서 모르겟넹~