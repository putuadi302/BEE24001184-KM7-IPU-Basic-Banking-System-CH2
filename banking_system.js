class BankAccount {
    constructor(saldo = 0) {
      this.saldo = saldo;
    }
    async deposit(amount) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!isNaN(amount) && amount > 0) {
            this.saldo += amount;
            alert(`Saldo berhasil ditambahkan`);
            resolve(this.saldo);
          } else {
            reject(alert("TIDAK VALID!"));
          }
        }, 1000);
      });
    }
  
    async withdraw(amount) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (amount < this.saldo && amount >= 0) {
            this.saldo -= amount;
            alert("saldo berhasil ditarik");
            resolve(this.saldo);
          } else if (amount > this.saldo) {
            reject(alert("saldo tidak cukup"));
          } else {
            reject(alert("Inputan Tidak Valid"));
          }
        }, 1000);
      });
    }
  
    async cekSaldo() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(`saldo anda saat ini : ${this.saldo}`);
        }, 500);
      });
    }
  }
  
  async function menu(bank) {
    let inputUser = Number(
      prompt(`saldo anda saat ini adalah ${bank.saldo}
                  1.Tambah Saldo
                  2.Tarik Saldo
                  3.Cek Saldo
                  4.Keluar`)
    );
    try {
      if (inputUser === 1) {
        let tambah = Number(
          prompt("Masukkan jumlah saldo yang ingin ditambahkan :")
        );
        await bank.deposit(tambah);
      } else if (inputUser === 2) {
        let kurang = Number(prompt("Masukkan jumlah saldo yang ingin ditarik :"));
        await bank.withdraw(kurang);
      } else if (inputUser === 3) {
        await bank.cekSaldo();
      } else if (inputUser === 4) {
        alert("terimakasih");
        return;
      } else {
        alert("Pilih angka 1 - 4");
      }
    } catch (error) {
      console.error("Yang Benar Aja dong");
    }
  
    menu(bank);
  }
  
  try {
    let bank = new BankAccount();
    menu(bank);
  } catch (error) {
    console.error("Terjadi Kesalahan", error);
  }
  