// Membuat game tebak angka menggunakan prompt

alert(`selamat datang di permainan tebak angka.
anda diminta untuk menebak angka 1 - 3, dalam 5 ronde.
ada 2 player dalam permainan ini.
player yang berhasil menebak angka terbanyak akan menang. SELAMAT BERMAIN....!
`);
const hasilAkhir = (nilaiP1, nilaiP2) => {
  if (nilaiP1 > nilaiP2) {
    alert(`pemenangnya adalah Player 1`);
  } else if (nilaiP2 > nilaiP1) {
    alert(`pemenangnya adalah Player 2`);
  } else {
    alert(`hasilnya seri`);
  }
};
const tebakAngka = () => {
  let tanya = true;
  while (tanya) {
    let nilaiP1 = 0;
    let nilaiP2 = 0;
    for (let i = 1; i <= 5; i++) {
      // menangkap pilihan player
      let p1 = parseInt(prompt(`Player 1 : Silahkan masukkan angka 1 - 3`));
      let p2 = parseInt(prompt(`Player 2 : Silahkan masukkan angka 1 - 3`));
      // menangkap pilihan komputer
      // membangkitkan bilangan randoom
      let comp = Math.floor(Math.random() * 3) + 1;

      // menentukan rules
      if (p1 < 1 || p2 < 1) {
        alert(`angka tidak boleh lebih kecil dari 1`);
        i -= 1;
        continue;
      } else if (p1 > 3 || p2 > 3) {
        alert(`angka tidak boleh lebih besar dari 3`);
        i -= 1;
        continue;
      } else if (isNaN(p1) || isNaN(p2)) {
        alert(`tidak boleh memasukkan selain angka`);
        i -= 1;
        continue;
      } else if (p1 == p2) {
        alert(`tebakan tidak boleh sama`);
        i -= 1;
        continue;
      }

      if (p2 == comp) {
        alert(`tebakan player 2 benar`);
        nilaiP2 += 1;
      } else if (p1 == comp) {
        alert(`tebakan player 1 benar`);
        nilaiP1 += 1;
      } else if (p1 != comp && p2 != comp) {
        alert(`kedua player salah menebak.`);
      }

      // tampilkan hasilnya
      alert(`Nilai yang dicari: ${comp}
    - Player 1: ${nilaiP1} 
    - Player 2: ${nilaiP2}`);
      if (i == 5) {
        hasilAkhir(nilaiP1, nilaiP2);
      } else {
        if (!confirm(`ronde ${i + 1}`)) {
          hasilAkhir(nilaiP1, nilaiP2);
        }
      }
    }

    tanya = confirm(`lagi?`);
  }
};

tebakAngka();

alert(`terima kasih`);
