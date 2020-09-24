const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";


$(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
            function () {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function () {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});



if ($('.navbar').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function () {
        scroll_top = $(this).scrollTop();
        if (scroll_top === 0) {
            $(".navbar").removeClass("scrolled-down scrolled-up").addClass("at-top")
        }
        else if (scroll_top < last_scroll_top) {
            $('.navbar').removeClass('scrolled-down at-top').addClass('scrolled-up');
        }
        else {
            $('.navbar').removeClass('scrolled-up at-top').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}

