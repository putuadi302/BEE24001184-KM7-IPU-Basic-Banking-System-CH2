let saldoAwal = 0;

function menu(){
    let inputUser = +prompt(`saldo anda saat ini adalah Rp.${saldoAwal}
        1.Tambah Saldo
        2.Tarik Saldo
        3.Cek Saldo
        4.Keluar`);
        
    switch(inputUser){
        case 1:
            tambahSaldo();
            break;
        case 2:
            kurangSaldo();
            break;
        case 3:
            cekSaldo();
            break;
        case 4:
            alert("Terimakasih");
            return;
        default:
            alert("Masukkan angka 1 sampai 4");
    }

    //memanggil kembali menu setelah operasi selesai
    menu();
}


function tambahSaldo(){
    let tambah = +prompt("Masukkan jumlah saldo yang ingin ditambahkan :");
    if(!isNaN(tambah) && tambah > 0){
        saldoAwal+= tambah;
        alert(`Saldo berhasil ditambahkan`)
    }else{
        alert("TIDAK VALID!");
    }
}

function kurangSaldo(){
    let kurang = +prompt("Masukkan jumlah saldo yang ingin ditarik :");
    if(!isNaN(kurang) && kurang > 0 && kurang <= saldoAwal){
        saldoAwal-= kurang;
        alert(`Saldo berhasil dikurangkan`)
    }else if(saldoAwal< kurang){
        alert("Saldo anda tidak cukup");
    }else{
        alert("TIDAK VALID!");
    }
}

function cekSaldo(){
    alert(`saldo anda : ${saldoAwal}`);
}

menu();