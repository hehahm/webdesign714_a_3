$(document).ready(function(){
    var targetdiv = 0;
    setInterval(function(){
        targetdiv++;
        targetdiv %= 3; //%= $('.aniSlide > div').length;
        $('.aniSlide > div').eq(targetdiv).addClass('on').siblings().removeClass('on')
    },3000)

    $('.tab h3').click(function(){
        $(this).parent().addClass('on').siblings().removeClass('on')
        //방금 전에 클릭당한 this의 부모님한테 클래스 on을 주렴. 남은 애는 빼고.
    })
})