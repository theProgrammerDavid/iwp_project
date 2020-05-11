$(document).ready(function () {

    document.addEventListener("visibilitychange", function (e) {
        alert('Cheating Detected. Exam will end');
        const Url = window.location.href + '/event';
        console.log('url is : ' + Url);
        $.ajax({
            url: Url,
            type: "GET",
            success: function (result) {
                console.log('result is : ' + result);
                window.location.replace("http://localhost:3000/home")
            },
            error: function (err) {
                console.log('error is');
                console.log(err);
            }
        });
    });
});


