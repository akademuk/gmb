jQuery(document).ready(function ($) {

    // маска телефона
    var popupScrollForm = document.querySelector('.popupScrollForm');
    var popupScroll2Form = document.querySelector('.popupScroll2Form');
    var popupScroll2 = document.querySelector('.popupScroll2');
    var popupScroll = document.querySelector('.popupScroll');
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
                url: "contact.php",
                data: str,
                success: function (msg) {
                    if (msg == 'OK') {
                        result = '<div class="notification_ok">Ваше повідомлення надіслано</div>';
                        popupScrollForm.classList.add('active');
                        popupScroll2Form.classList.add('active');
                        form.reset(); 
                        /* если нужно перенаправление */
                        // window.location.href = "applicationSend.html";
                    } else {
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
                url: "contact.php",
                data: str,
                success: function (msg) {
                    if (msg == 'OK') {
                        result = '<div class="notification_ok">Ваше повідомлення надіслано</div>';
                        popupScroll.classList.add('active');
                        popupScroll2.classList.add('active');
                        form.reset(); 
                        /* если нужно перенаправление */
                        // window.location.href = "applicationSend.html";
                    } else {
                        result = msg;
                    }
                    // $('#note2').html(result);
                }
            });
            return false;
        }
    }); 

});/* //jQuery(document).ready  */