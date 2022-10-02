function Angkot(sopir, rute, penumpang, kas) {
    this.sopir = sopir;
    this.rute = rute;
    this.penumpang = penumpang;
    this.kas = kas;



    this.pNaik = function(nPenumpang) {
        this.penumpang.push(nPenumpang)
        return penumpang;
    }
    this.pTurun = function(nPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            alert('Penumpang dalam Angkot masih kosong');
            return false;
        } else {
            for (var i = 0; i <= this.penumpang.length; i++) {
                if (this.penumpang[i] == nPenumpang) {
                    this.penumpang[i] = undefined;
                    this.kas += bayar
                    return penumpang;
                }
            }
            for (var i = 0; i <= this.penumpang.length; i++) {
                if (this.penumpang[i] !== nPenumpang) {
                    alert('Nama penumpang dengan ' + nPenumpang + ' tidak ada dalam angkot')
                    return penumpang;
                }
            }
        }
    }
}
var angkot1 = new Angkot("Ziyaa Danil M", ['Nganjuk', 'Kediri'], [], 0)