// $(document).ready(function(){
//     $("#design_pic").click(function(){
//       $("#design_pic").hide(1200);
//       $("#design-text").toggle(1200);
//       $("#design").show(1200);
//     })
//     $("#design").click(function(){
//       $("#design-text").hide(1200);
//       $("#design").toggle(1200);
//       $("#design").show(1200);
//     });
//   });

//   $(document).ready(function(){
//     $("#development_pic").click(function(){
//       $("#development_pic").hide(1200);
//       $("#development").toggle(1200);
//       $("#development").show(1200);
//     })
//     $("#development").click(function(){
//       $("#development").hide(1200);
//       $("#development_pic").toggle(1200);
//       $("#development_pic").show(1200);
//     });
//   });


//   $(document).ready(function(){
//     $("#product_pic").click(function(){
//       $("#product_pic").hide(1200);
//       $("#product").toggle(1200);
//       $("#product").show(1200);
//     })
//     $("#product").click(function(){
//       $("#product").hide(1200);
//       $("#product_pic").toggle(1200);
//       $("#product_pic").show(1200);
//     });

$(document).ready(function () {

    $("#design-pic").click(function () {
        $(this).hide();
        $("#design-text").toggle()
        .show();
    })

    $("#design-text").click(function () {
        $(this).hide();
        $("#design-pic").toggle().show();
    })

    $("#dev-pic").click(function () {
        $(this).hide();
        $("#dev-text").toggle().show();
    })

    $("#dev-text").click(function () {
        $(this).hide();
        $("#dev-pic").toggle().show();
        
    })

    $("#prod-pic").click(function () {
        $(this).hide();
        $("#prod-text").toggle().show();
    })

    $("#prod-text").click(function () {
        $(this).hide();
        $("#prod-pic").toggle().show();
        
    })

    $(".porfolio-pic1").hover(
        function () {
            $(this).css({cursor: "pointer"})
            $("#work-one").show()
                .css({ color: "white", "font-size": "122%"})
                if($(window).width() < 822) {
                    $("#work-one").css({ color: "white", "font-size": "50%", width: "60%"})}

        },
        function () {
            $("#work-one").hide()
    
        }
    )

    $(".porfolio-pic2").hover(
        function () {
            $(this).css({cursor: "pointer"})
            $("#work-2").show()
            .css({ color: "white", "font-size": "122%"})
            if($(window).width() < 822) {
                $("#work-2").css({ color: "white", "font-size": "50%", width: "60%"})}
        },
        function () {
            $("#work-2").hide()
        }
    )

    $(".porfolio-pic3").hover(
        function () {
            $(this).css({cursor: "pointer"})
            $("#work-3").show()
            .css({ color: "white", "font-size": "122%"})
            if($(window).width() < 822) {
                $("#work-3").css({ color: "white", "font-size": "50%", width: "60%"})}
        },
        function () {
            $("#work-3").hide()
        }
    )

    $(".porfolio-pic4").hover(
        function () {
            $(this).css({cursor: "pointer"})
            $("#work-4").show()
            .css({ color: "white", "font-size": "122%"})
            if($(window).width() < 822) {
                $("#work-4").css({ color: "white", "font-size": "50%", width: "60%"})}
        },
        function () {
            $("#work-4").hide()
        }
    )

    $(".porfolio-pic5").hover(
        function () {
            $(this).css({cursor: "pointer"})
            $("#work-5").show()
            .css({ color: "white", "font-size": "122%"})
            if($(window).width() < 822) {
                $("#work-5").css({ color: "white", "font-size": "50%", width: "60%"})}
        },
        function () {
            $("#work-5").hide()
        }
    )

    $(".porfolio-pic6").hover(
        function () {
            $(this).css({cursor: "pointer"})
            $("#work-6").show()
            .css({ color: "white", "font-size": "122%"})
            if($(window).width() < 822) {
                $("#work-6").css({ color: "white", "font-size": "50%", width: "60%"})}
        },
        function () {
            $("#work-6").hide()
        }
    )

    $(".porfolio-pic7").hover(
        function () {
            $(this).css({cursor: "pointer"})
            $("#work-7").show()
            .css({ color: "white", "font-size": "122%"})
            if($(window).width() < 822) {
                $("#work-7").css({ color: "white", "font-size": "50%", width: "60%"})}
        },
        function () {
            $("#work-7").hide()
        }
    )

    $(".porfolio-pic8").hover(
        function () {
            $(this).css({cursor: "pointer"})
            $("#work-8").show()
            .css({ color: "white", "font-size": "122%"})
            if($(window).width() < 822) {
                $("#work-8").css({ color: "white", "font-size": "50%", width: "60%"})}
        },
        function () {
            $("#work-8").hide()
        }
    )


    $("#contact-form").submit(
        function () {
            alert("Your message was received and we will respond in no time. Peace!");
        }
    )

  
})