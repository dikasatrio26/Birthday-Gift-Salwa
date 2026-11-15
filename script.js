// UBAH tanggal di bawah sesuai tanggal ulang tahun Salwa.
// Format: YYYY-MM-DDTHH:MM:SS+07:00 (WIB)
const BIRTHDAY_DATE = "2026-11-23T00:00:00+07:00";

const $ = (id) => document.getElementById(id);
const targetDate = new Date(BIRTHDAY_DATE);

function updateCountdown(){
  const now = new Date();
  let diff = Math.max(0, targetDate - now);
  const days = Math.floor(diff / 86400000); diff %= 86400000;
  const hours = Math.floor(diff / 3600000); diff %= 3600000;
  const minutes = Math.floor(diff / 60000); diff %= 60000;
  const seconds = Math.floor(diff / 1000);
  $("days").textContent = String(days).padStart(2,"0");
  $("hours").textContent = String(hours).padStart(2,"0");
  $("minutes").textContent = String(minutes).padStart(2,"0");
  $("seconds").textContent = String(seconds).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown,1000);

$("openGift").addEventListener("click",()=>{
  $("letter").scrollIntoView({behavior:"smooth"});
});

document.querySelectorAll("[data-scroll]").forEach(btn=>{
  btn.addEventListener("click",()=>document.querySelector(btn.dataset.scroll).scrollIntoView({behavior:"smooth"}));
});

const player = $("musicPlayer");
$("musicToggle").addEventListener("click",async()=>{
  if(player.paused){
    try{
      await player.play();
      $("musicToggle").textContent = "Ⅱ Jeda musik";
      $("musicStatus").textContent = "Musik sedang diputar ♫";
    }catch(error){
      $("musicStatus").textContent = "Belum ada lagu. Unggah music/lagu.mp3 terlebih dahulu.";
    }
  }else{
    player.pause();
    $("musicToggle").textContent = "▶ Putar musik";
    $("musicStatus").textContent = "Musik dijeda";
  }
});
player.addEventListener("error",()=>{
  $("musicStatus").textContent = "Tambahkan file music/lagu.mp3 untuk mengaktifkan musik.";
});

$("surpriseBtn").addEventListener("click",()=>{
  $("surprise").classList.remove("hidden");
  $("surprise").scrollIntoView({behavior:"smooth",block:"center"});
  $("surpriseBtn").classList.add("hidden");
});
$("replayBtn").addEventListener("click",()=>{
  $("surprise").classList.add("hidden");
  $("surpriseBtn").classList.remove("hidden");
  window.scrollTo({top:0,behavior:"smooth"});
});
