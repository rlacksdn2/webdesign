$(".menu").hover(
    function(){
        $(".sub-menu").stop().slideDown("slow");
    },function(){
            $(".sub-menu").stop().slideUp("slow");
    }
);

var slide = $(".slide > img");
var sno = 0;
var eno = slide.length - 1;
var timer = setInterval("autoslide(),3000");

function autoslide(){
    $(slide[sno]).animate({
        left: "-100%"
    }, 1000,function(){
        $(this).css({left:"100%"});
    });
    sno++;
    if(sno > eno) sno = 0;
    $(slide[sno]).animate({
        left:"0"
    },1000);
}

$(".slide").hover(
    function(){
        clearInterval(timer);
    },function(){
        timer = setInterval("autoslide()",3000);
    }
)

$(".tab-news").click(function(){
    $(this).css({
        "border-bottom":"0",
        "background-color":"#888"
    });
    $(".tab-gallery").css({
        "border-bottom":"1px solid #000",
        "background-color":"#888"
    });
    $(".gallery").hide();
    $(".news").show();
});

$(".tab-gallery").click(function(){
    $(this).css({
        "border-bottom":"0",
        "background-color":"white"
    });
    $(".tab-news").css({
        "border-bottom":"1px solid #000",
        "background-color":"#888"
    });
    $(".news").hide();
    $(".gallery").show();
});


function openPop() {
    $("#pop").show("slow");
}
function closePop() {
    $("#pop").hide("fast");
}