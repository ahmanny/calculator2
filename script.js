
function percentage() {
  var num=document.getElementById("input").value;
  var percent=num/100;
  document.getElementById("result").value=percent;
}
function clearscreen() {
  document.getElementById("result").value="";
  document.getElementById("input").value="";
}
function display(value) {
  document.getElementById("input").value+=value;
}
function calculate(value) {
  var exp=document.getElementById("input").value;
  var answer=eval(exp)
  document.getElementById("result").value=answer;
  document.getElementById("input").value=exp
}