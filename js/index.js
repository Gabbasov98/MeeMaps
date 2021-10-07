$(document).ready(function() {
    $(".info__tab").click(function() {
        let path = $(this).attr("data-tab-path");
        $(".info__tab").removeClass("info__tab--active");
        $(this).addClass("info__tab--active");
        $(".info__content").removeClass("info__content--active");
        $(`.info__content[data-content-path="${path}"]`).addClass("info__content--active");
        console.log(path)
    })

    $(".easy__tab").click(function() {
        let path = $(this).attr("data-tab-path");
        $(".easy__tab").removeClass("easy__tab--active");
        $(this).addClass("easy__tab--active");
        $(".easy__content").removeClass("easy__content--active");
        $(`.easy__content[data-content-path="${path}"]`).addClass("easy__content--active");
        $(".easy__pagination-item").removeClass("easy__pagination-item--active");
        $(`.easy__pagination-item[data-pagination-path="${path}"]`).addClass("easy__pagination-item--active");
        console.log(path)
    })

    setInterval(function() {
        changeEasySlide()
    }, 3000);

    let path = parseInt($(".easy__tab--active").attr("data-tab-path"));

    function changeEasySlide() {
        if ((path >= 1) && (path < 3)) {
            path = path + 1
            $(".easy__tab").removeClass("easy__tab--active");
            $(`.easy__tab[data-tab-path="${path}"]`).addClass("easy__tab--active");
            $(".easy__content").removeClass("easy__content--active");
            $(`.easy__content[data-content-path="${path}"]`).addClass("easy__content--active");
            $(".easy__pagination-item").removeClass("easy__pagination-item--active");
            $(`.easy__pagination-item[data-pagination-path="${path}"]`).addClass("easy__pagination-item--active");
        } else if (path === 3) {
            path = 1
            $(".easy__tab").removeClass("easy__tab--active");
            $(`.easy__tab[data-tab-path="${path}"]`).addClass("easy__tab--active");
            $(".easy__content").removeClass("easy__content--active");
            $(`.easy__content[data-content-path="${path}"]`).addClass("easy__content--active");
            $(".easy__pagination-item").removeClass("easy__pagination-item--active");
            $(`.easy__pagination-item[data-pagination-path="${path}"]`).addClass("easy__pagination-item--active");
        }

    }
})