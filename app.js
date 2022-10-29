console.log("okk");

{/* <script type="text/javascript"> */}
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 30) {
            $('.navbar').css('background','#32657c');
            $('.nav-link').css('color','#eeeeee');
            $('.navbar-brand').css('color','#eeeeee');
            $('#newclients').css('color','#eeeeee');
            $('#newclients').css('border-color','#eeeeee');
            $('#newclients').css('background','#32657c');
        }else {
            if ($('#dvMobile').is(':hidden')) {
                $('.navbar').css('background','transparent');
                $('.nav-link').css('color','#32657c');
                $('.navbar-brand').css('color','#32657c');
                $('#newclients').css('border-color','#32657c');
                $('#newclients').css('color','#32657c');
                $('#newclients').css('background','transparent');
            }
        }
    });