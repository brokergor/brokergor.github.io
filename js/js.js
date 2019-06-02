// $(function () {
//     //Scroll and mark the current page in menu
//     function f() {
//         $('.link').each(function (index, element) {
//             $(element).parent().removeClass('active');
//             $(element).parent().removeClass('font-weight-bold');
//         });
//     }
//
//     $('.link').each(function (index, element) {
//         $(element).click(function () {
//             let id = $(this).attr('href');
//             let top = $(id).offset().top;
//             $('html').animate({
//                 scrollTop: top
//             }, 1400);
//             f();
//             $('.navbar-collapse.show').collapse('hide');
//             $('.link').eq(index).parent().addClass('active');
//             $('.link').eq(index).parent().addClass('font-weight-bold');
//         })
//     });
//
//     $('.btn-func').each(function (index, element) {
//         $(element).click(function(){
//             let id = $(this).attr('value');
//             let top = $(id).offset().top;
//             $('html').animate({
//                 scrollTop: top
//             }, 1400);
//         })
//     });
//     //Hide/show contacts in mobile version
//     $(window).scroll(function () {
//         if ($(window).scrollTop() > 10) {
//             $('#addressMedia2').attr('style', 'display: none!important');
//             $('.first-section').attr('style', 'padding-top: 50px;');
//         } else if ($(window).width() <= 575.98) {
//             $('#addressMedia2').attr('style', 'display: flex!important');
//             $('.first-section').attr('style', 'padding-top: 88px;');
//         } else if ($(window).width() > 575.98) {
//             $('.first-section').attr('style', 'padding-top: 120px;');
//         }
//
//     });
//     // console.log($('.first-section div:nth-of-type(3) button'))
//     // Close menu
//     // $(".link").click(function (e) {
//     //     e.preventDefault();
//     //     $('.navbar-collapse.show').collapse('hide');
//     // });
//
//
//     // $(window).resize(function() {
//     //     if ($(window).width() <= 991.98){
//     //         $('#addressMedia').hide();
//     //         $('#addressMedia2').hide();
//     //         $('#navbarSupportedContent address').hide();
//     //     }
//     //     else if($(window).width() <= '995'){
//     //         $('#shelf').hide(10)
//     //     }
//     //     else if($(window).width() <= '995'){
//     //         $('#shelf').hide(10)
//     //     }
//     //     else if($(window).width() <= '995'){
//     //         $('#shelf').hide(10)
//     //     }
//
//     // });
//
// })
//
//
// // function scrol() {
// //     let id = this;
// //     console.log(id);
// //     let top = $(id).offset().top;
// //     console.log(top);
// //     $('html').animate({
// //         scrollTop: top
// //     }, 1400);
// // }