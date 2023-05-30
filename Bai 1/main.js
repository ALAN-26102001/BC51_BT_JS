/*Bai 1*/
var btnClick = document.getElementById("btnClick");
btnClick.onclick = function () {

  var txtUser = document.getElementById("txtInput").value;
  console.log(txtUser);
};


var btnTinhLuong = document.getElementById("btnTinhLuong");
btnTinhLuong.onclick = function () {
  
  var number1 = document.getElementById("number1").value * 1;
  var number2 = document.getElementById("number2").value * 1;

  var total = number1 * number2;


  var result = "Số Tiền Lương: " + total;
  
  var pResult = document.getElementById("pResult");
  pResult.innerHTML = result;

  pResult.classList.add("classResult");
};