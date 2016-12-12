/**
 * Created by Administrator on 2016/6/1.
 */
window.onload = function() {
    //背景渐入
    $(".banner_bg").animate({
        opacity: 1
    }, 2000);
    //导航栏动画
    $(window).on("scroll", function () {
        if ($(document).scrollTop() > 0) {
            $(".navbar-default").clearQueue().animate({top: "0px"}, 300);
        } else {
            $(".navbar-default").clearQueue().animate({top: "-60px"}, 300);
        }
    });


    //背景字幕及图片自适应
    $(window).on("resize", function () {
        var window_width = $(window).width();
        var window_height = $(window).height();
        var DIV_width = $(".banner_content").width();
        var DIV_height = $(".banner_content").height();
        $(".banner_content").css({ left: (window_width - DIV_width) / 2 + "px"});
        $(".banner_content").css({top: (window_height - DIV_height) / 2 + "px"});
        var pic_width = $(".banner_bg").width();
        var pic_height = $(".banner_bg").height();

        $(".banner_bg").css({width: window_width});
        $(".banner_bg").css({height: window_height});
        if (window_width < 1008) {
            $(".banner_bg").css({ width: 1008,
                height: 630,
                "margin-top": -(pic_height - window_height) / 2 + "px",
                "margin-left": -(pic_width - window_width) / 2 + "px"
            })
            console.log(-(pic_height - window_height) / 2 + "px");
            console.log(-(pic_width - window_width) / 2 + "px");
            $(".about_sunmo").css({"margin-top": window_height});

        } else {
            $(".banner_bg").css({ width: window_width,
                height: "auto",
                "margin-top": 0,
                "margin-left": 0
            });
            $(".about_sunmo").css({"margin-top": window_height});
        }
    })
//图片弹出层
    $(".teampic01").mouseenter(function(){
         $(".teampic01 div.team-name").animate({
         opacity:0.4
         },300)
     });
    $(".teampic01").mouseleave(function(){
         $(".teampic01 div.team-name").animate({
             opacity:0
         },300)
     });
    $(".teampic02").mouseenter(function(){
         $(".teampic02 div.team-name").animate({
         opacity:0.4
     },300)
     });
    $(".teampic02").mouseleave(function(){
         $(".teampic02 div.team-name").animate({
         opacity:0
         },300)
     });
    $(".teampic03").mouseenter(function(){
         $(".teampic03 div.team-name").animate({
         opacity:0.4
         },300)
     });
    $(".teampic03").mouseleave(function(){
         $(".teampic03 div.team-name").animate({
         opacity:0
         },300)
     });
    $(".teampic01").on("click",function(){
         $('#myModal01').modal("show");
     });
    $(".teampic02").on("click",function(){
         $('#myModal02').modal("show");
     });
    $(".teampic03").on("click",function(){
         $('#myModal03').modal("show");
     });
    $(".pic1").mouseenter(function(){
        $(".pic1 img").fadeTo("fast", 1);
     })
    $(".pic1").mouseleave(function(){
        $(".pic1 img").fadeTo("fast", 0.5);
    })
    $(".pic2").mouseenter(function(){
        $(".pic2 img").fadeTo("fast", 1);
    })
    $(".pic2").mouseleave(function(){
        $(".pic2 img").fadeTo("fast", 0.5);
    })

    $(".case_content li").hover(function(){
        $(this).children('p').animate({top:"52%"},300);

    },function(){
        $(this).children('p').animate({top:"-13px"},300);
    });
/*
    $(".case_content li").hover(function(){
        $(this).children('p').fadeIn(300);
    },function(){
        $(this).children('p').fadeOut(300);
    });
*/
    $(".case_content ul li img").hover(function(){
        $(this).css({ opacity:0.3 });
    },function(){
        $(this).css({ opacity:1 });
    })



}