$(function(){
    setMouseEvent();
    showinterestDetails(0);

    function setMouseEvent(){
        $(".service").mouseover(function () { 
            $(this).stop();
            $(this).css("background-color","gainsboro");
            $(this).animate({
                width: "320px",
            },100, "easeOutCubic");
        });

        $(".servicesub").mouseover(function (){
            $(this).stop();
            $(this).css("background-color","gainsboro");
            $(this).animate({
                width: "150px",
            },100, "easeOutCubic");
        });

        $(".service").mouseleave(function () { 
            $(this).stop();
            $(this).css("background-color", "white");
            $(this).animate({
                width: "300px",
            },100, "easeOutCubic");
        });

        $(".servicesub").mouseleave(function () { 
            $(this).stop();
            $(this).css("background-color", "white");
            $(this).animate({
                width: "130px",
            },100, "easeOutCubic");
        });

        $(".interestname").mouseover(function () {
            var line=$(this).find(".pointerline");
            line.stop();
            line.animate({
                width: "128px"
            },200, "easeOutCubic");

            var position = $(this).position();
            var top = position.top-3;
            $("#bubble").stop();
            $("#bubble").animate({
                top: top,
                left: "-30px"
            },200, "easeOutCubic");

            showinterestDetails($(this).index());
        });

        $(".interestname").mouseleave(function () {
            var line=$(this).find(".pointerline");
            line.stop();
            line.animate({
                width: "0"
            },200, "easeOutCubic");

            $("#bubble").stop();
            $("#bubble").animate({
                left: "0"
            },200, "easeOutCubic");

            showinterestDetails(0);
        });
    }

    function showinterestDetails(showidx){
        $("#interests").children().each(function(index, element){
            $(element).css("display", "none");
        });

        $("#interesttitles").children().each(function(index, element){
            $(element).css("display", "none");
        });

        $("#interests").children().eq(showidx).css("display", "block");
        $("#interesttitles").children().eq(showidx).css("display", "block");
    }
});