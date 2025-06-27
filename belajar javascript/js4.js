const nilai=prompt('masukkan nilai!!')
let nilai1=parseInt(nilai)

if(nilai1<=0){
    console.log('nilai tidak valid')
} else if (nilai1<=60) {
    alert(`nilai anda ${nilai1}, anda mendapat grade D`)
}else if (nilai1<=74) {
    alert(`nilai anda ${nilai1}, anda mendapat grade C`)
} else if(nilai1<=84){
    alert(`nilai anda ${nilai1}, anda mendapat grade B`)
} else if(nilai1<=100){
    alert(`nilai anda ${nilai1}, anda mendapat grade A`)
} else{
    console.log(`nilai tidak valid`)
}