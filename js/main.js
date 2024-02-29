$(function () {

   // галерея с фильтром и анимацией
   var mixer = mixitup('.portfolio__content', {
      load: {
         filter: '.paired',
      },
      animation: {
         effects: 'fade',
         duration: 500,
      },
   });

   const deviceWidth = window.innerWidth;
   // открытие меню по клику на бургер /  скрытие по клику на ссылку
   if (deviceWidth < 1200) {

      $('.menu__burger, .menu__item').on('click', function () {
         $('.header__inner').toggleClass('header--active');
         $('.everything-except-menu').toggleClass('hidden-on-mobile-menu');
      })
   };

   // плавный скролл
   $('.menu a, .menu__item, .default-btn').on('click', function (e) {
      //e.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      if (deviceWidth > 1200) $('body,html').animate({ scrollTop: top }, 1500);
   });

   // активация плагина для воспроизведения видео
   Fancybox.bind();

   // слайдер и его кастомизация
   $('.rules-slider__inner').slick({
      dots: true,
      infinite: false,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,


      responsive: [
         {
            breakpoint: 780,
            settings: {

               slidesToShow: 2,
               slidesToScroll: 2,
            },
         },
      ],
      responsive: [
         {

            breakpoint: 580,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   });

   $('.zone__link').on('click', function (e) {
      e.preventDefault();
      $('.zone__link').removeClass('zone__link--active');
      $(this).addClass('zone__link--active');

      $('.zone__item').removeClass('zone__item--active');
      $($(this).attr('href')).addClass('zone__item--active');
   });

   $('.zone-slider__inner').slick({
      dots: true,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 820,
            settings: {
               slidesToShow: 1,
            }
         }
      ],
   });
   $('.zone-slider__item').slick("setPosition");
   $('.zone__link').preventDefault();
   //Счётчик

});
