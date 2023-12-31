const myImage = document.querySelector("#myImage");
const textTitle = document.querySelector(".text");
const boxBtnPlay = document.querySelector(".box-btn");
const textPesan = document.querySelector(".form-group")


textPesan.style.display = "none";
textTitle.innerHTML = '"HaI...Tiara..!"';


const btnPlay = () => {
    console.log("diclick");
    boxBtnPlay.style.display = "none";

    var audio = new Audio("bersamamu.mp3");

    audio.play();
    
    

    setTimeout(() => {
        textTitle.innerHTML = '"Btw... Terima kasih ya. 😆😆"'
        setTimeout(() => {
            myImage.src = "weee.gif";
            textTitle.innerHTML = '"Semoga tetap jadi orang baik😇😇"'
        }, 5000);
        setTimeout(() => {
            myImage.src = "emawh.gif"
            textTitle.innerHTML = '"Jangan pernah lelah dengan tingkah aku yang random ini😅"'
        }, 10000);
        setTimeout(() => {
            myImage.src = "mikir.gif"
            textTitle.innerHTML = '"Dan semoga tahun depan semua cita citamu terwujud🏥👩🏻‍⚕️😇"'
        }, 15000);
        setTimeout(() => {
            myImage.src = "pandaketawa2.gif"
            textTitle.innerHTML = '"Selamat Tahun Baru 2024🎉🎉"'
        }, 20000);
        setTimeout(() => {
            textPesan.style.display = "flex";
            textPesan.style.opacity = 1;
            textTitle.style.display = "none";
        }, 25000);
    }, 3000);
}

function kirim() {
    // Ambil isi dari textarea
    var pesan = document.getElementById('comment').value;

    // Ganti nomor berikut dengan nomor tujuan di format internasional tanpa tanda '+' atau '00'
    var nomorTujuan = '+6281219879510';

    // Membuka aplikasi WhatsApp dengan URL khusus
    var whatsappURL = 'https://wa.me/' + nomorTujuan + '?text=' + encodeURIComponent(pesan);
    window.location.href = whatsappURL;
}