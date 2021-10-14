$(function () {
    ScrollReveal().reveal('.fadein_left', {
        delay: 180, // アニメーション開始までの時間
        duration: 2000, // アニメーション完了にかかる時間
        origin: 'left', // 要素がどの方向から来るか
        distance: '100px', // 移動する距離
        reset: false // フレームインの度に動かすか
    });

    ScrollReveal().reveal('.fadein_right', {
        delay: 180, // アニメーション開始までの時間
        duration: 2000, // アニメーション完了にかかる時間
        origin: 'right', // 要素がどの方向から来るか
        distance: '100px', // 移動する距離
        reset: false // フレームインの度に動かすか
    });

    ScrollReveal().reveal('.fadein_bottom', {
        delay: 200, // アニメーション開始までの時間
        duration: 2000, // アニメーション完了にかかる時間
        origin: 'bottom', // 要素がどの方向から来るか
        distance: '100px', // 移動する距離
        reset: false // フレームインの度に動かすか
    });

    ScrollReveal().reveal('.fadein_bottom2', {
        delay: 300, // アニメーション開始までの時間
        duration: 2000, // アニメーション完了にかかる時間
        origin: 'bottom', // 要素がどの方向から来るか
        distance: '100px', // 移動する距離
        reset: false // フレームインの度に動かすか
    });

    ScrollReveal().reveal('.fadein_contents', {
        delay: 850, // アニメーション開始までの時間
        duration: 2000, // アニメーション完了にかかる時間
        origin: 'bottom', // 要素がどの方向から来るか
        distance: '100px', // 移動する距離
        reset: false // フレームインの度に動かすか
    });
});