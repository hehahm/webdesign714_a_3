$(document).ready(function(){
        $("#slideAni").animate({
            "marginLeft": -1200*$(this).index() //태그자체가 갖고 있는 순번이 .index
        },300, function(){})
    })