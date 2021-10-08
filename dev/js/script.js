$(window).on('load', () => {

    var header = document.querySelector('.header__inner');
    var sticky = header.offsetTop;

    $(this).scroll(function () {
        if(window.pageYOffset > sticky){
            header.classList.add('position-fixed');
            header.style.boxShadow = '0 0 30px 1px rgba(0, 0, 0, 0.3)';
            if($(window).width() > 992){
                header.style.backgroundColor = '#fff';
            }
        }else{
            header.classList.remove('position-fixed');
            header.style.boxShadow = 'none';
            if($(window).width() > 992){
                header.style.backgroundColor = 'transparent';
            }
        }
    });

    const menu = document.querySelector('.menu'),
    hamburger = document.querySelector('.hamburger'),
    menuItem = document.querySelectorAll('.menu__item');
    

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger--active');
        menu.classList.toggle('menu--active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('hamburger--active');
            menu.classList.remove('menu--active');
        });
    });


    $('a[href^="#"]:not(a.popup)').on('click', function() {
        let href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });


    let formContent = '';
    // Тест формы -- раскомментировать и юзать при необходимости
    // $("form").on("submit", (function (e) {
    //     e.preventDefault();
    //     let form = $(this);
    //     formContent = 
    //     '<h2 class="title text-center form-popup__title"> Спасибо, наш менеджер свяжется с Вами в ближайшее время </h2>' + 
    //         '<h3 class="subtitle text-center form-popup__subtitle">А пока можете ознакомится с другими нашими услугами на сайте <a href="https://ortoprof.ru/" style="color: #e35191">ortoprof.ru</a> </h3>' + 
    //         '<div class="form__row form-popup__row">' +
    //         '<a class="btn form-popup__btn text-white" href="https://ortoprof.ru/" style="padding: 0">Перейти на сайт</a>' + 
    //     '</div>';
    //     console.log('success');
    //     form[0].innerHTML = formContent;
    // }));

    // Отправка формы
    $("form").on("submit", (function (e) {
        e.preventDefault();
        let form = $(this);
        return $.ajax({
            type: "POST",
            url: "send.php",
            data: $(this).serialize(),
            success: function (e) {
                e = JSON.parse(e);
                formContent = 
                '<h2 class="title text-center form-popup__title"> Спасибо, наш менеджер свяжется с Вами в ближайшее время </h2>' + 
                    '<h3 class="subtitle text-center form-popup__subtitle">А пока можете ознакомится с другими нашими услугами на сайте <a href="https://ortoprof.ru/" style="color: #e35191">ortoprof.ru</a> </h3>' + 
                    '<div class="form__row form-popup__row">' +
                    '<a class="btn form-popup__btn text-white" href="https://ortoprof.ru/" style="padding: 0">Перейти на сайт</a>' + 
                '</div>';
                console.log('success');
                form[0].innerHTML = formContent;
                form.find("input[type='name'], input[type='tel']").val(""), $("form").trigger("reset");
            }
        });
    }));

    $().fancybox();

    $('input[type="tel"]').inputmask('+7 (999) 999-99-99');

});

// Map
YaMapsShown = false; 
$(window).scroll(function() {
    if (!YaMapsShown){
        if($(window).scrollTop() + $(window).height() > $(document).height() - 702) {      
        showYaMaps();
        YaMapsShown = true;
        }
    }
});
function showYaMaps(){
    var script   = document.createElement("script");
    script.type  = "text/javascript";
    script.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Acb08fec08110b844d57a8238a0ce4822c4dbd495deeab24779c019bc3e0907c1&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=true";
    document.getElementById("YaMaps").appendChild(script);
}


/* var greenBlock = window.getComputedStyle(document.querySelector('.longlife'), ':before').height;

console.log(greenBlock); */