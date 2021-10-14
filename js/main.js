var window_height = window.innerHeight;
document.getElementById("top").style.height = window_height + 'px';

$(document).on('ready', function () {
    $(".full-screen").slick({
        centerMode: true,
        centerPadding: '5%',
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        infinite: true,
    });
});

// ボタンクリックでhiddden
var hidden_btn = document.getElementById("hidden_btn");
var bottom_btn = document.getElementById("bottom_btn");
var flag = 0;
$(window).on('scroll', function () {
    //スクロール位置を取得
    if ($(this).scrollTop() > 650 && flag == 0) {
        bottom_btn.classList.remove('isHidden');
    }
});
init();
function init() {
    hidden_btn.addEventListener('click', hidden, false);
}
function hidden() {
    bottom_btn.classList.add('isHidden');
    flag = 1;
}