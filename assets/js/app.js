document.addEventListener("DOMContentLoaded", function(){
    
    let button = $('.toTopBtn');
    button.fadeOut();

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 50) {
            button.fadeIn();
          } else {
            button.fadeOut();
          }
    });

    $(window).scroll(function() {
        let ratio = $(document).scrollTop() / (($(document).height() - window.innerHeight) / 100);
        $("#progress").width(ratio + "%");
    });

});