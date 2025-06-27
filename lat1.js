let nama=""
let peran="Tabib"
if(nama==="")
    {console.log("nama wajib diisi")
}else if (nama="Rudi"){
    console.log("Rudi")
}
if(peran===""){
    console.log("silahkan pilih peran")
}
else {
    switch (peran) {
        case "Ksatria":
            console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
            break;
        case "Tabib":
            console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
            break;
        case "Penyihir":
            console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
            break;
        default:
            console.log("Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
            break;
    }}