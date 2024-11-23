const sendMessageBtn = document.getElementById('send-message-btn');
const loveMessage = document.getElementById('love-message');
const sentMessageDiv = document.getElementById('sent-message');

// Fungsi untuk mengirim pesan
sendMessageBtn.addEventListener('click', function() {
    const message = loveMessage.value.trim();  // Ambil pesan dari textarea
    if (message) {
        sentMessageDiv.textContent = `Pesan Cinta Terkirim: "${message}"`;
        sentMessageDiv.style.color = '#4caf50';  // Ganti warna menjadi hijau untuk pesan terkirim
        loveMessage.value = '';  // Kosongkan textarea
    } else {
        sentMessageDiv.textContent = 'Harap tulis pesan cinta terlebih dahulu!';
        sentMessageDiv.style.color = '#f44336';  // Ganti warna menjadi merah jika pesan kosong
    }
});
