$(document).ready(function () {

    document.addEventListener("visibilitychange", function (e) {

        const Url = window.location.href + '/event';

        $.post(Url,
            {
                event: 'window change'
            },
            function (data, status) {
                alert("Caught Cheating. Test will end");
                window.location.replace("http://localhost:3000/home")
            });
    });
});


