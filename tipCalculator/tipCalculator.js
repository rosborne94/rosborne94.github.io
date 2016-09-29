  function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
  }
}
function calculate(){
  var billAmount = $("#bill").val();
  var serviceQuality = $('#service').val();
  var numPeople = $('#people').val();
  if (billAmount == "" || serviceQuality == 0){
   window.alert("Please enter values");
    return;
  }
  var tip = (billAmount * serviceQuality)/ numPeople;
  tip = Math.round(tip * 100) / 100;
  tip = tip.toFixed(2);
$('#tip').text(tip);
var total = (parseInt(billAmount) + parseInt(tip))/ numPeople;
$('#total').text(total);
  }

$(function (){ 
 $('#calculate').on("click", function() {
    calculate();
  
  });
  /*$('#clear').on("click", function(){
    clear();
  });*/

});
