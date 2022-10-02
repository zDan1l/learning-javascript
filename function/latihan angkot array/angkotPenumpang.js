var penumpangBus = ['Ziyaa', undefined, 'Danil', 'Mubarok', 'Doni'];

// tambah penumpang
var tPenumpangBus = function(nPenumpangBus, penumpangBus) {
    if (penumpangBus.length == 0) {
        penumpangBus.push(nPenumpangBus);
        return penumpangBus
    } else {
        for (j = 0; j <= penumpangBus.length; j++) {
            if (penumpangBus[j] == nPenumpangBus) {
                console.log('Nama penumpang ' +
                    penumpangBus[j] + ' sudah ada di dalam Bus')
                return penumpangBus;
            }
        }
        for (var i = 0; i < penumpangBus.length; i++) {
            if (penumpangBus[i] == undefined) {
                console.log('Penumpang ' + nPenumpangBus + " berhasil naik");
                penumpangBus[i] = nPenumpangBus;
                return penumpangBus;
            } else if (i == penumpangBus.length - 1) {
                penumpangBus.push(nPenumpangBus);
                console.log('Penumpang ' + nPenumpangBus + " berhasil naik");
                return penumpangBus;
            }
        }

    }
};

// hapus penumpang
var hPenumpangBus = function(nPenumpangBus, penumpangBus) {
    if (penumpangBus.length == 0) {
        console.log('Bus sedang kosong dan tidak ada penumpang')
        return penumpang
    } else {
        for (i = 0; i <= penumpangBus.length; i++) {
            if (nPenumpangBus == penumpangBus[i]) {
                console.log('Penumpang ' + penumpangBus[i] + " berhasil turun");
                penumpangBus[i] = undefined;
                return penumpangBus;
            }
        };
        for (i = 0; i <= penumpangBus.length; i++) {
            if (nPenumpangBus !== penumpangBus[i]) {
                console.log(nPenumpangBus + " tidak ada dalam Bus")
                return penumpangBus;
            }
        };
    }
}