$(document).ready(function () {
    $(".navbar-toggler").on("click", function (event) {
        const isShow = $(".header").attr('class').split(/\s+/).includes('show');
        switch (isShow) {
            case true: 
                $(".header").addClass('hide');
                $(".header").removeClass('show');
                break;
            case false: 
                $(".header").addClass('show');
                $(".header").removeClass('hide');
                break;
        }
        console.log(isShow);
    });
    console.log('work')
});
