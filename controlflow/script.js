let lagi = true;

while (lagi === true) {
  let nilai = prompt(`Masukkan nilai 1 - 100
konversi nilai => 
0 - 20 = E
21 - 40 = D
41 - 60 = C
61 - 80 = B
81 - 100 = A
`);

  if (nilai <= 20) {
    alert("Nilai Anda dikonversi menjadi E");
  } else if (nilai <= 40) {
    alert("Nilai Anda dikonversi menjadi D");
  } else if (nilai <= 60) {
    alert("Nilai Anda dikonversi menjadi C");
  } else if (nilai <= 80) {
    alert("Nilai Anda dikonversi menjadi B");
  } else if (nilai <= 100) {
    alert("Nilai Anda dikonversi menjadi A");
  } else {
    alert("Yang Anda masukkan bukan nilai");
  }

  lagi = confirm("coba lagi?");
}
alert("terima kasih....");
