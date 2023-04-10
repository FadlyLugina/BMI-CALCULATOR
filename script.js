const form = document.querySelector("#b-form") // mengambil elemen form dengan id "bmi-form"
const weight = document.querySelector("#weight") // mengambil elemen input dengan id "weight"
const height = document.querySelector("#height") // mengambil elemen input dengan id "height"
const btnBMI = document.querySelector("#btn-bmi") // mengambil elemen button dengan id "btn-bmi"
const result = document.querySelector("#result") // mengambil elemen dengan id "result" untuk menampilkan hasil BMI

btnBMI.addEventListener("click", (event) => { // menambahkan event listener untuk tombol "Hitung BMI" ketika di klik
    event.preventDefault() // mencegah aksi default dari form saat tombol "Hitung BMI" diklik

    let bmi = weight.value / ((height.value / 100) ** 2) // menghitung BMI dengan rumus berat badan / (tinggi badan dalam meter pangkat 2)
    bmi = bmi.toFixed(1) // membulatkan nilai BMI menjadi 1 angka di belakang koma

    let category = "" // inisialisasi variabel kategori dengan nilai awal kosong

    if (bmi < 18.5) { // jika nilai BMI kurang dari 18.5
        category = "Underweight" // set kategori menjadi "Underweight"
    } else if (bmi >= 18.5 && bmi <= 24.9) { // jika nilai BMI antara 18.5 dan 24.9
        category = "Normal weight" // set kategori menjadi "Normal weight"
    } else if (bmi >= 25 && bmi <= 29.9) { // jika nilai BMI antara 25 dan 29.9
        category = "Overweight" // set kategori menjadi "Overweight"
    } else { // jika nilai BMI lebih dari atau sama dengan 30
        category = "Obesity" // set kategori menjadi "Obesity"
    }

    result.innerHTML = `Your BMI is <strong>${bmi}</strong> which means You are <strong>${category}</strong>.` // menampilkan hasil BMI dan kategori pada halaman web dengan memanipulasi elemen dengan id "result"

    form.reset() // mengosongkan nilai input pada form
})