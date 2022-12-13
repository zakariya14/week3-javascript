let tanya = true;
alert(`selamat datang di game tebak angka
anda diminta untuk menebak angka 1 - 3
kemudian anda akan bermain dalam 5 ronde
player yang berhasil menebak angka terbanyak, akan menang
SELAMAT BERMAIN!!!!`);
while (tanya) {
  // menangkap pilihan player
  let p1 = prompt(`player 1 : masukkan angka 1 - 3`);
  let p2 = prompt(`player 2 : masukkan angka 1 - 3`);

  // menangkap pilihan komputer
  // membangkitkan bilangan random
  let comp = Math.floor(Math.random() * 3) + 1;

  console.log(comp);
  if (comp == 1) {
    comp = "1";
  } else if (comp == 2) {
    comp = "2";
  } else {
    comp = "3";
  }

  //   menentukan rules
  let hasil = "";
  if (p1 == p2) {
    alert("hasil tidak boleh sama");
  } else if (p1 == comp) {
    hasil = `${p1} menang`;
  } else if (p2 == comp) {
    hasil = `${p2} menang`;
  } else if (p1 && p2 !== comp) {
    hasil = `tebakan salah`;
  } else if (p1 && p2 <= 0) {
    hasil = `tidak boleh kurang dari 1`;
  } else if (p1 && p2 >= 4) {
    hasil = `tidak boleh lebih dari 3`;
  } else {
    hasil = `tebakan tidak sesuai`;
  }

  //   tampilkan hasil
  alert(`hasil anda adalah:
  ${p1} : ${hasil}
  ${p2} : ${hasil}`);

  tanya = confirm(`lagi?`);
}
