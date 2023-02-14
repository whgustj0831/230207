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