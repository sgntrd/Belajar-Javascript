let inputNilai=prompt('Silahkan Isi Suit')
let Nilai=Number(inputNilai)
let NilaiCom=Math.floor(Math.random()*3)+1;

if(Nilai == NilaiCom){
    alert('Hasil anda SERI')
} 
else if(Nilai==1 && NilaiCom==2){
    alert('Anda Menang')
} else if(Nilai==2 && NilaiCom==3){
    alert('Anda Menang')
} else if(Nilai==3 && NilaiCom==1){
    alert('Anda Menang')
} else {
    alert('Anda Kalah')
}
console.log(`Nilai ${Nilai} dan ${NilaiCom}`)