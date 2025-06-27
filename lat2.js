let tanggal=44
let bulan =2
let tahun=2001

if(tanggal<1 && tanggal>31){
    console.log("tanggal salah")
} else if(bulan>12 && bulan<1){
    console.log('bulan salah')
} else if(tahun>2200 && tahun<1900){
    console.log('tahun salah')
} else {
    console.log('lain-lain')
}
