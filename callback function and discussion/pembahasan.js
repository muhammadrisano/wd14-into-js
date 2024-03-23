const biodata = {
  namaLengkap: "Chanra S Bakkara",
  email: "louki.art66@gmail.com",
  nomorHandphone: "08123123123",
  umur: 23,
  tempatTanggalLahir: "lumban suhi-suhi, o6 juni 2000",
  alamat: "Gg. Delima no.30A, catur tunggal, Depok",
  kota: "Sleman",
  provinsi: "Yogyakarta",
  kodePos: "55283",
  programingExperience: ["HTML", "CSS", "Bootstrap"],
  riwayatPendidikan: [
    {
      nama: "SDN 177681 Saurnauli",
      tingkat: "SD",
      tahunMulai: 2005,
      tahunBerakhir: 2011,
      jurusan: null,
      direkomendasikanAtauTidak: false,
      lokasi: "samosir",
      pengajarFavorit: ["", ""],
      materiFavorit: [
        {
          nama: "",
          date: "",
          alasan: "",
          apakahSulit: "",
        },
        {
          nama: "",
          date: "",
          alasan: "",
          apakahSulit: "",
        },
        {
          nama: "",
          date: "",
          alasan: "",
          apakahSulit: "",
        },
      ],
    },
    {
      nama: "SMP N 3 Pangururan",
      tingkat: "SMP",
      tahunMulai: 2011,
      tahunBerakhir: 2014,
      jurusan: null,
      direkomendasikanAtauTidak: false,
      lokasi: "samosir",
      pengajarFavorit: ["", ""],
      materiFavorit: [
        {
          nama: "",
          date: "",
          alasan: "",
          apakahSulit: "",
        },
        {
          nama: "",
          date: "",
          alasan: "",
          apakahSulit: "",
        },
        {
          nama: "",
          date: "",
          alasan: "",
          apakahSulit: "",
        },
      ],
    },
    {
      nama: "SMA N 2 Pangururan",
      tingkat: "SMA",
      tahunMulai: 2014,
      tahunBerakhir: 2017,
      jurusan: "IPA",
      direkomendasikanAtauTidak: false,
      lokasi: "samosir",
      pengajarFavorit: ["H. Simarmata", ""],
      materiFavorit: [
        {
          nama: "Rumus Empiris dan Rumus Molekul",
          date: 2014,
          alasan: "Karena rumus empiris dan rumus molekul adalah salah satu materi yang menggunakan perhitungan dan logika",
          apakahSulit: false,
          pengajar:  'budi'
        },
        {
          nama: "Fungsi Kuadrat",
          date: 2014,
          alasan: "karena saya suka materi yang membutuhkan konsentrasi dalam pemecahan masalah perhitungan",
          apakahSulit: false,
          pengajar: 'toni'
        },
        {
          nama: "Program Linear",
          date: 2017,
          alasan: "karena suka hitung-hitungan",
          apakahSulit: false,
          pengajar: 'ani'
        },
      ],
    },
  ],
  golonganDarah: "o",
  hobi: ["berenang", "menonton film", "bermain game", "ngoding"],
  makananFavorit: [
    {
      nama: "napinadar",
      asal: "Sumatera utara",
    },
    {
      nama: "nasi padang",
      asal: "padang",
    },
  ],
};

// nomo3
console.log(`Nama Lengkap: ${biodata.namaLengkap}`);

console.log(`Nomor Handphone : ${biodata.nomorHandphone}`);

console.log(`Programming Experience : ${biodata.programingExperience}`);

const {nama, asal} = biodata.makananFavorit[0]
console.log(`Makan Favorit pertama ${nama} dan asalanya ${asal}`);

console.log(`Hobi terakhir saya : ${biodata.hobi[biodata.hobi.length - 1]}`);

const {nama:namaMateri, pengajar} = biodata.riwayatPendidikan[2].materiFavorit[0]

console.log(`Nama Materi Favorit pertama sekolah terakhir ${namaMateri} dan pengajarnya ${pengajar} `);

// console.log(`Nama Materi Favorit pertama sekolah terakhir ${biodata.riwayatPendidikan[2].materiFavorit[0].nama} dan pengajarnya ${biodata.riwayatPendidikan[2].pengajarFavorit[0]} `);

