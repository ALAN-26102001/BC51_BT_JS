document.getElementById('btnTrungBinh').onclick = function () {
    var Sothu1 = document.getElementById('Sothu1').value;
      var Sothu2 = document.getElementById('Sothu2').value;
      var Sothu3 = document.getElementById('Sothu3').value;
      var Sothu4 = document.getElementById('Sothu4').value;
      var Sothu5 = document.getElementById('Sothu5').value;
      debugger
      tinhTrungBinh = (Number(Sothu1) + Number(Sothu2) + Number(Sothu3) + Number(Sothu4) + Number(Sothu5)) / 5;
      document.getElementById('out-put-tinh-trung-binh').innerHTML = diemTrungBinh;
      
  }