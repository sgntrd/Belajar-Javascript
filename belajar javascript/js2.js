let hari=new Date().getDay()

switch(hari){
    case 1:
        hari='minggu'
        break;
    case 2:
        hari='senin'
        break;  
    case 3:
        hari='selasa'
        break;
    case 4:
        hari='rabu'
        break;
    case 5:
        hari='kamis'
        break;
    case 6:
        hari='jumat'
        break;
    case 7:
        hari='sabtu'
        break;
}
console.log(hari)