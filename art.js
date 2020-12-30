
$(document).ready(function () {

  $("#Ellipse1,#moon,#Cloud,#anim").css({ animation: "null" })
  $("#Moment,#sun,#sunlight_2,#sunlight_3,#sunlight_5,#sunlight_1,#sunlight_4,#sunlight_6,#sunlight_7,#sunlight_8,#daymode,#fullperson").css({ animation: "null" })
  $("#moonicon").css({ animation: "null" })
  $("#moonicon").fadeOut()
  $("#sunicon").css({ animation: "null" })
  $("#RectanglebgT").css({ animation: "null" })
  
  

  $('input[type="checkbox"]').click(function () {

    if ($(this).prop("checked") == true) {

      $("#Ellipse1,#moon,#Cloud,#anim").css({ animation: "" })
      $("#Moment,#sun,#sunlight_2,#sunlight_3,#sunlight_5,#sunlight_1,#sunlight_4,#sunlight_6,#sunlight_7,#sunlight_8,#daymode,#fullperson").css({ animation: "null" })
      $("body").css({ "background-color": "rgb(41, 44, 53)", "color": "rgb(240, 240, 240)" })
      $("#moonicon").css({ animation: "" })
      $("#moonicon").css({'transform': "rotate(0deg)"});
      $("#RectanglebgT").css({ animation: "" })
      
      $("#moonicon").fadeIn()

      $("#sunicon").css({ animation: "null" })
      
      $("#sunicon").css({'transform': "rotate(170deg)"});
      $("#sunicon").fadeOut(1400)
      
     
    }


    else if ($(this).prop("checked") == false) {

      $("#Moment,#sun,#sunlight_2,#sunlight_3,#sunlight_5,#sunlight_1,#sunlight_4,#sunlight_6,#sunlight_7,#sunlight_8,#daymode,#fullperson").css({ animation: "" })
      $("#Ellipse1,#moon,#Cloud,#anim").css({ animation: "null" })
      $("body").css({ "background-color": "rgb(250, 250, 250)", "color": "black" })
      $("#moonicon").css({ animation: "null" })
      $("#moonicon").css({'transform': "rotate(170deg)"});
      
       $("#moonicon").fadeOut(1200)
       $("#sunicon").css({'transform': "rotate(0deg)"})
      $("#sunicon").css({ animation: "" }) 
     
      $("#sunicon").fadeIn()
      $("#RectanglebgT").css({ animation: "null" })
    
    }
  });

})