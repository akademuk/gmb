jQuery(document).ready(function ($) {

    // маска телефона
    let modalForm = document.querySelector('.modalForm');
    let body1 = document.querySelector('.body');
    // добавляем адрес в форму (для рекламы)
    // let fullURL = window.location.href;
    // sessionStorage.setItem('fullURL', fullURL);
    // $("input[name='url']").val(sessionStorage.getItem('fullURL'));


    // форма с проверкой
    $("#apply").validate({
        errorClass: "novalid",
        errorElement: "span",
        success: function (label) {
            label.addClass("valid");
        },
        errorPlacement: function (error, element) {
            error.appendTo($('#invalid'));
        },
        submitHandler: function (form) {
            var str = $(form).serialize();

            $.ajax({
                type: "POST",
                url: "/contact.php",
                data: str,
                success: function (msg) {
                    if (msg == 'OK') {
                        result = '<div class="notification_ok">Ваше повідомлення надіслано</div>';
                        console.log("Ok");
                        modalForm.classList.add('active');
                        body1.classList.add('active');
                        form.reset(); 
                        /* если нужно перенаправление */
                        // window.location.href = "applicationSend.html";
                    } else {
                        console.log("error")
                        result = msg;
                    }
                    // $('#note').html(result);
                }
            });
            return false;
        }
    });

    // форма с проверкой
    $("#blockNumber").validate({
        errorClass: "novalid",
        errorElement: "span",
        success: function (label) {
            label.addClass("valid");
        },
        errorPlacement: function (error, element) {
            error.appendTo($('#invalid'));
        },
        submitHandler: function (form) {
            var str = $(form).serialize();

            $.ajax({
                type: "POST",
                url: "/contact.php",
                data: str,
                success: function (msg) {
                    if (msg == 'OK') {
                        result = '<div class="notification_ok">Ваше повідомлення надіслано</div>';
                        modalForm.classList.add('active');
                        body1.classList.add('active');
                        console.log("Ok");
                        form.reset(); 
                        /* если нужно перенаправление */
                        // window.location.href = "applicationSend.html";
                    } else {
                        console.log("error")
                        result = msg;
                    }
                    // $('#note2').html(result);
                }
            });
            return false;
        }
    }); 

});/* //jQuery(document).ready  */