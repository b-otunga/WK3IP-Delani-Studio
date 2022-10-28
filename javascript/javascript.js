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
//     $('#porfolio-pic').hover(function () {
//         $(this)
//              .css({display: 'flex', cursor: 'pointer', position: 'relative', 
//             opacity : '0.5', flex-direction: 'pointer' });
//  $('#work-one')
//             .hide()
//             .text('This is a hover effect')
//             .css({position: 'absolute', color: 'yellow'
//         });
        
//     });

//   });

//   $(document).ready(function(){
//     $("#porfolio-pic").hover(function(){
//         $("#work-one").show()
//         .css({"color": "white"});
     
//       });

//       }
//   )

$(document).ready(function(){

    $(".porfolio-pic1").hover(
        function(){
            $("#work-one").show()
            .css({color: "black", opacity: "1"})
        },
        function(){
            $("#work-one").hide()
        }
    )

    $(".porfolio-pic2").hover(
        function(){
            $("#work-2").show()
            .css({color: "black", opacity: "1"})
        },
        function(){
            $("#work-2").hide()
        }
    )

    $(".porfolio-pic3").hover(
        function(){
            $("#work-3").show()
            .css({color: "black", opacity: "1"})
        },
        function(){
            $("#work-3").hide()
        }
    )

    $(".porfolio-pic4").hover(
        function(){
            $("#work-4").show()
            .css({color: "black", opacity: "1"})
        },
        function(){
            $("#work-4").hide()
        }
    )

    $(".porfolio-pic5").hover(
        function(){
            $("#work-5").show()
            .css({color: "black", opacity: "1"})
        },
        function(){
            $("#work-5").hide()
        }
    )

    $(".porfolio-pic6").hover(
        function(){
            $("#work-6").show()
            .css({color: "black", opacity: "1"})
        },
        function(){
            $("#work-6").hide()
        }
    )

    $(".porfolio-pic7").hover(
        function(){
            $("#work-7").show()
            .css({color: "black", opacity: "1"})
        },
        function(){
            $("#work-7").hide()
        }
    )

    $(".porfolio-pic8").hover(
        function(){
            $("#work-8").show()
            .css({color: "black", opacity: "1"})
        },
        function(){
            $("#work-8").hide()
        }
    )
})