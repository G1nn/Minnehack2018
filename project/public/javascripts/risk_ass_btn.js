var user_name = "Tom Brady"; // hard coded value

function getRiskAss(name) {
  return 0.6;
}

// function move() {
//     var elem = document.getElementById("myBar");
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//         if (width >= 60) {
//             clearInterval(id);
//         } else {
//             width++;
//             elem.style.width = width + '%';
//         }
//     }
//}

function move(risk_per) {
  // risk_per : A NUMBER BETWEEN 0 and 100
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= risk_per) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}


$('#rsk_ass_btn').on('click',function() {

  $('#user_risk_as').text(user_name + "'s risk assessment is...");
  move(getRiskAss() * 100);



});
