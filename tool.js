const RenderJadwal = document.querySelector("#renderjadwal")
const RenderTanggal = document.querySelector(".tgl-adzan")
const month = [
    "","Januari","Febuari","Maret","April","Mei","Juni","Juli","Agustus", "September","Oktober","November","Desember",
];

fetch("https://api.pray.zone/v2/times/today.json?city=jakarta")
.then((res) => res.json())
.then((res) => {
    console.log(res)
    const tanggal = res["results"]["datetime"][0]["times"] ;
    const tgl = res["results"]["datetime"][0]["date"];
    const tglFilter = tgl.gregorian.replace(/-/g, " ");
    const [year,monthRaw,day] = tglFilter.split(" ");
    const convertMonth = Math.floor(monthRaw);
    const sliceHijr = tgl.hijri.slice(0,4)
    RenderJadwal.innerHTML = ` <tr>
    <td>subuh</td>
    <td> ${tanggal.Fajr}</td>
</tr>
<tr>
    <td>Zuhur</td>
    <td> ${tanggal.Dhuhr}</td>
</tr>
<tr>
    <td>Ashar</td>
    <td> ${tanggal.Asr}</td>
</tr>
<tr>
    <td>Magrib</td>
    <td> ${tanggal.Maghrib}</td>
</tr>
<tr>
    <td>Isya</td>
    <td> ${tanggal.Isha}</td>
    </tr>`
    RenderTanggal.innerHTML = `<p>jadwal adzan hari ini tanggal : ${day + " " +  month[convertMonth] + " " + year } ${sliceHijr} Hijriyah </p>`

    const time = [tanggal.Fajr,tanggal.Dhuhr,tanggal.Asr,tanggal.Maghrib,tanggal.Isha]
    let Realtime = new Date() ;
    let Realtime2 = [Realtime.getMinutes(),Realtime.getHours(),Realtime.getSeconds()]
    let Realtime3 = `${Realtime2[1] + " : " + Realtime2[0] }`
    console.log(time)
})

// Mengatur waktu akhir perhitungan mundur
 Hitungmundur = new Date("April 13, 2021 00:00:00").getTime();

let Countdown = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = Hitungmundur - now;
    
  // Perhitungan waktu untuk hari, jam, menit dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Keluarkan hasil dalam elemen dengan id = "demo"
  document.querySelector("#time").innerHTML = days + " hari " + hours + " jam "
  + minutes + " menit " + seconds + " detik";
    
  // Jika hitungan mundur selesai, tulis beberapa teks 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Alhamdulilah Kita Sudah masuk bulan suci Ramadhan";
  }
}, 1000);