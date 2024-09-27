class Bank {
    constructor(saldo = 0) {
        this.saldo = saldo;
    }

    tambahSaldo() {
        let tambah = Number(prompt("Masukkan jumlah saldo yang ingin ditambahkan:"));
        if (!isNaN(tambah) && tambah > 0) {
            this.saldo += tambah;
            alert(`Saldo berhasil ditambahkan. Saldo sekarang: Rp.${this.saldo}`);
        } else {
            alert("Input TIDAK VALID!");
        }
    }

    kurangSaldo() {
        let kurang = Number(prompt("Masukkan jumlah saldo yang ingin ditarik:"));
        if (!isNaN(kurang) && kurang > 0 && kurang <= this.saldo) {
            this.saldo -= kurang;
            alert(`Saldo berhasil dikurangkan. Saldo sekarang: Rp.${this.saldo}`);
        } else if (kurang > this.saldo) {
            alert("Saldo anda tidak cukup.");
        } else {
            alert("Input TIDAK VALID!");
        }
    }

    cekSaldo() {
        alert(`Saldo anda saat ini: Rp.${this.saldo}`);
    }
}

function menu(bank) {
    let inputUser = Number(prompt(`Saldo anda saat ini adalah Rp.${bank.saldo}
1. Tambah Saldo
2. Tarik Saldo
3. Cek Saldo
4. Keluar`));

    switch (inputUser) {
        case 1:
            bank.tambahSaldo();
            break;
        case 2:
            bank.kurangSaldo();
            break;
        case 3:
            bank.cekSaldo();
            break;
        case 4:
            alert("Terimakasih telah menggunakan layanan kami.");
            return; // Menghentikan eksekusi menu
        default:
            alert("Masukkan angka 1 sampai 4.");
    }

    // Memanggil kembali menu setelah operasi selesai
    menu(bank);
}

let bank = new Bank();
menu(bank);
