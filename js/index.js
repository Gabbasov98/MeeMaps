$(document).ready(function() {
    $(".info__tab").click(function() {
        let path = $(this).attr("data-tab-path");
        $(".info__tab").removeClass("info__tab--active");
        $(this).addClass("info__tab--active");
        $(".info__content").removeClass("info__content--active");
        $(`.info__content[data-content-path="${path}"]`).addClass("info__content--active");
        console.log(path)
    })

})