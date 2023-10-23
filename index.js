        // Mengambil referensi elemen-elemen HTML
        var inputDolar = document.getElementById("inputDolar");
        var konversiButton = document.getElementById("konversiButton");
        var hasilRupiah = document.getElementById("hasilRupiah");

        // Menambahkan event listener pada tombol "Konversi"
        konversiButton.addEventListener("click", function() {
            // Mengambil nilai dalam dolar dari input
            var dolar = parseFloat(inputDolar.value);

            // Kurs dolar ke rupiah (anda dapat mengganti nilai ini)
            var kurs = 15000;

            // Melakukan konversi
            var rupiah = dolar * kurs;

            // Menampilkan hasil konversi
            hasilRupiah.textContent = rupiah + " rupiah";
        });