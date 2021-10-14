$(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }

    });
});
//メニュー内を閉じておく
$(function () {
    $('.globalMenuSp a[href]').click(function () {
        $('.globalMenuSp').removeClass('active');
        $('.hamburger').removeClass('active');

    });
});

// 一定値スクロールを行なったらハンバーガの背景を変更する & snsアイコンの色を変更する
let hamburger_menu = document.getElementById("hamburger_menu");
let hamburger = document.getElementsByClassName("hamburger_span");

let sns_icon_white = document.getElementsByClassName("sns_icon_white");
let sns_icon_black = document.getElementsByClassName("sns_icon_black");

$(window).on('scroll', function () {
    //スクロール位置を取得
    if ($(this).scrollTop() < 120) {
        hamburger_menu.classList.remove('isActive_hamburger_area');
        hamburger[0].classList.remove('isActive_hamburger_span');
        hamburger[1].classList.remove('isActive_hamburger_span');
        hamburger[2].classList.remove('isActive_hamburger_span');

        sns_icon_white[0].classList.remove('isHidden');
        sns_icon_white[1].classList.remove('isHidden');
        sns_icon_white[2].classList.remove('isHidden');
        sns_icon_black[0].classList.add('isHidden');
        sns_icon_black[1].classList.add('isHidden');
        sns_icon_black[2].classList.add('isHidden');
    } else {
        hamburger_menu.classList.add('isActive_hamburger_area');
        hamburger[0].classList.add('isActive_hamburger_span');
        hamburger[1].classList.add('isActive_hamburger_span');
        hamburger[2].classList.add('isActive_hamburger_span');

        sns_icon_white[0].classList.add('isHidden');
        sns_icon_white[1].classList.add('isHidden');
        sns_icon_white[2].classList.add('isHidden');
        sns_icon_black[0].classList.remove('isHidden');
        sns_icon_black[1].classList.remove('isHidden');
        sns_icon_black[2].classList.remove('isHidden');
    }
});

