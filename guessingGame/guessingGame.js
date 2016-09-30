var num1 = "";
var num2 = "";
var num3 = "";
var answer = "";
var Correct1 = false;
var Correct2 = false;
var Correct3 = false;
function validate(evt) {
   var theEvent = evt || window.event;
   var key = theEvent.keyCode || theEvent.which;
   key = String.fromCharCode(key);
   var regex = /[0-9]|\./;
   if (!regex.test(key)) {
       theEvent.returnValue = false;
       if (theEvent.preventDefault) theEvent.preventDefault();
   }
};
function start(){
    $("#guess1").val();
    $("#guess2").val();
    $("#guess3").val();

    num1 = parseInt(Math.random() * 9);
    num2 = parseInt(Math.random() * 9);
    num3 = parseInt(Math.random() * 9);
    answer = parseInt(Math.random() * 9);
    console.log("This is the answer: " + answer);
    if (num1 == num2 || num2 == num3){
        num2 = parseInt(Math.random() * 10);
    }
}
function guess1() {
    var guess1 = $("#guess1A").val();
    if (+guess1 == num1) {
        $("#guess1").removeClass("close");
        $("#guess1").removeClass("wrong");
        $("#guess1").addClass("correct");
        isCorrect1 = true;
        console.log(isCorrect1);
    }
    else if (+guess1 == num2 || +guess1 == num3) {
        $("#guess1").removeClass("correct");
        $("#guess1").removeClass("wrong");
        $("#guess1").addClass("close");
        isCorrect1 = false;
    } else if(+guess1 !== num1 && +guess1 !== num2 && +guess1 !== num3) {
        $("#guess1").removeClass("correct");
        $("#guess1").removeClass("close");
        $("#guess1").addClass("wrong");
        isCorrect1 = false;
    }
    guess2();

};
function guess2() {
    var guess2 = $("#guess2A").val();
    if (+guess2 == num1) {
        $("#guess2").removeClass("close");
        $("#guess2").removeClass("wrong");
        $("#guess2").addClass("correct");
        correct2 = true;
    }
    else if (+guess2 == num2 || +guess2 == num3) {
        $("#guess2").removeClass("correct");
        $("#guess2").removeClass("wrong");
        $("#guess2").addClass("close");
        correct2 = false;
    } else if(+guess2 !== num1 && +guess2 !== num2 && +guess2 !== num3) {
        $("#guess2").removeClass("correct");
        $("#guess2").removeClass("close");
        $("#guess2").addClass("wrong");
        correct2 = false;
    }
    checkGuess2();

};
function guess3() {
    var guess3 = $("#guess3A").val();
    if (+guess3 == num1) {
        $("#guess3").removeClass("close");
        $("#guess3").removeClass("wrong");
        $("#guess3").addClass("correct");
        correct3 = true;
    }
    else if (+guess3 == num2 || +guess3 == num3) {
        $("#guess3").removeClass("correct");
        $("#guess3").removeClass("wrong");
        $("#guess3").addClass("close");
        correct2 = false;
    } else if(+guess3 !== num1 && +guess3 !== num2 && +guess3 !== num3) {
        $("#guess3").removeClass("correct");
        $("#guess3").removeClass("close");
        $("#guess3").addClass("wrong");
        correct3 = false;
    }
    checkGuess3();

};