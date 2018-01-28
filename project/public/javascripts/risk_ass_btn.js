var user_name = "John"; // hard coded value

function getRiskAss(name) {
  return 0.6;
}
$('#rsk_ass_btn').on('click',function() {

  $('#user_risk_as').text("Hello " + user_name + " your current risk assment is: " + getRiskAss(user_name))

});
