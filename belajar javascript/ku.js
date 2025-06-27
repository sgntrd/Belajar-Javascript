let inputUmur=prompt('Inputkan Tahun Lahir anda')
const umur=parseInt(inputUmur)
let tahunIni=new Date().getFullYear()
tahunLahir=tahunIni-umur
alert('tahun ini anda berumur '+tahunLahir)
