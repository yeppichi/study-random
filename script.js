const tombol = document.querySelector("#tombol");
const title = document.querySelector(".card-title");
const text = document.querySelector(".card-text");

function acakMateriUtbk() {
  const acakUtbk = Math.floor(Math.random() * 7 + 1);
  let materi;

  if (acakUtbk == 1) materi = "Penalaran umum";
  if (acakUtbk == 2) materi = "Pengetahuan kuantitatif";
  if (acakUtbk == 3) materi = "Pengetahuan dan pemahaman umum";
  if (acakUtbk == 4) materi = "Pemahaman bacaan dan menulis";
  if (acakUtbk == 5) materi = "Literasi bahasa Indonesia";
  if (acakUtbk == 6) materi = "Literasi bahasa Inggris";
  if (acakUtbk == 7) materi = "Penalaran Matematika";

  return materi;
}

function acakMateriProgramming() {
  const acakProgramming = Math.floor(Math.random() * 5 + 1);
  let materi;

  if (acakProgramming == 1) materi = "Javascript";
  if (acakProgramming == 2) materi = "Laravel";
  if (acakProgramming == 3) materi = "CSS";
  if (acakProgramming == 4) materi = "API";
  if (acakProgramming == 5) materi = "Git";

  return materi;
}

function mapel() {
  const acakMapel = Math.floor(Math.random() * 2 + 1);
  let materi;

  if (acakMapel == 1) {
    title.innerHTML = "utbk"; // Mengubah innerHTML langsung di sini
    materi = acakMateriUtbk();
  } else if (acakMapel == 2) {
    title.innerHTML = "programming"; // Mengubah innerHTML langsung di sini
    materi = acakMateriProgramming();
  }
  return materi;
}

function putar() {
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval; // Hentikan interval setelah 1 detik
      return;
    }
    text.innerHTML = mapel();
  }, 100);
}

tombol.addEventListener("click", function () {
  text.innerHTML = putar();
});
