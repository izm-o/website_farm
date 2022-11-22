// バンバーガーメニュー
function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
}
toggleNav();

// 購入ボタン
$(function() {
  // 変数にクラスを入れる
  var btn = $('.button');
  
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 100) {
      btn.addClass('active');
    }else{
      btn.removeClass('active');
    }
  });

  //フッターの手前でボタンを非表示
  $(window).on('load scroll', function(){
    var height = $(document).height(), //ドキュメントの高さ 
        position = window.innerHeight + $(window).scrollTop(), //ページトップから現在地までの高さ
        footer = $('footer').height(); //フッターの高さ
    if ( height - position  < footer ){ 
      btn.addClass('absolute');
    } else { 
      btn.removeClass('absolute');
    }
  });
});

//スクロールして画像がきたらアニメーションさせる
(function() {
  const image = document.querySelectorAll('.img-wrap');

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('img-animation');
        observer.unobserve(entry.target);
      }
    });
  });

  Array.prototype.forEach.call(image, function(img) {
    observer.observe(img);
  });
})();

//商品一覧ページのアコーディオンメニュー
$(function(){
	$('.title').click(function(){
		$(this).next().slideToggle();
	});
});

$(window).on('resize', function() {
	if( 'none' == $('.title').css('pointer-events') ){
		$('.toggle').attr('style','');
	};
});

//商品詳細ページのスライダー
$(function () {
  $(".js-sub-img img").on("click", function () {
    // mainに切り替えるimgのsrc取得
    img = $(this).attr("src");
    // currentクラス付け替え(枠線などを変えたい時に)
    $(".js-sub-img li").removeClass("current");
    $(this).parent().addClass("current");
    // fadeOutできたらsrc変更してfadeIn
    $(".js-main-img img").fadeOut(50, function () {
      $(".js-main-img img")
        .attr("src", img)
        .on("load", function () {
          $(this).fadeIn();
        });
    });
  });
});