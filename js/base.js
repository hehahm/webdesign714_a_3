$(document).ready(function(){

    //setInterval은 주기적으로 처리하는 명령, 화면 열리지마자는 불가/특정시간 흘러야 함 
    //setTimeout은 특정시간이 흐르고 나서 딱 한 번! 실행
    var count = 0;
    setInterval(function(){
        count++;
        count %= 3;
        $('.aniSlide').animate({
            'marginLeft' : -1200 * count
        },400,function(){})
    }, 3000)
    })
    
    // //쌤왈 매운맛 버전 - 자식들이 야바위 게임하고 있다

    //         $('.aniSlide').animate({
    //             'marginLeft' : "-=1200"//그 값이 뭔지 모르겠지만 1200 마이너스해라
    //         },400,function(){})
    //             $('.aniSlide > div:first-child').appendTo($('.antiSlide'))
    //             $('.antiSlide').css('margin-left',0)
    //     }, 1000)
    //     })