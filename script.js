
const CORRECT_FLAG = "FLAG{hidden_in_metadata}";

function checkFlag() {
  const input = document
    .getElementById("flagInput")
    .value.trim();

  const result = document.getElementById("result");

  if (input === CORRECT_FLAG) {
    result.textContent = "✅ Correct! Flag berhasil ditemukan!";
    result.style.color = "#4ade80";
  } else {
    result.textContent = "❌ Incorrect flag. Coba lagi!";
    result.style.color = "#f87171";
  }
}

