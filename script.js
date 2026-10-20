
const CORRECT_FLAG = "FLAG{hidden_in_metadata}";

const flagForm = document.getElementById("flagForm");
const flagInput = document.getElementById("flagInput");
const result = document.getElementById("result");

flagForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const answer = flagInput.value.trim();

  if (answer === CORRECT_FLAG) {
    result.textContent =
      "✓ CORRECT! Kamu berhasil menemukan flag.";

    result.className = "success";
  } else {
    result.textContent =
      "✗ INCORRECT! Periksa kembali gambar dan hint.";

    result.className = "error";
  }
});
