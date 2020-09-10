$(function () {
    $(document).on("click", ".navbar-collapse.show .nav-link", function () {
        $(this).closest(".navbar-collapse").removeClass("show");
        $(this).closest(".navbar-collapse").siblings(".navbar-toggler").addClass("collapsed")
        $(this).closest(".navbar-collapse").siblings(".navbar-toggler").attr("aria-expanded", "false");
    })
})

