let tanya = true;
while (tanya) {
  // menangkap pilihan player
  let p = prompt(`pilih: gajah, semut, orang`);

  // menangkap pilihan komputer

  // membangkitkan bilangan random
  let comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  let hasil = "";
  // menentukan rules
  if (p == comp) {
    hasil = "seri";
  } else if (p == "gajah") {
    if (comp == "orang") {
      hasil = "menang";
    } else {
      hasil = "kalah";
    }
  } else if (p == "orang") {
    //   hasil = (comp == "gajah") ? "menang" : "kalah";
    if (comp == "gajah") {
      hasil = "kalah";
    } else {
      hasil = "menang";
    }
  } else if (p == "semut") {
    if (comp == "orang") {
      hasil = "kalah";
    } else {
      hasil = "menang";
    }
  } else {
    hasil = "memasukkan pilihan yang salah";
  }
  // tampilkan hasilnya
  alert(`kamu memilih ${p} dan komputer memilih ${comp}
maka hasilnya adalah kamu ${hasil}`);

  tanya = confirm("lagi?");
}

alert("terima kasih");
