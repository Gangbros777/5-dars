let ism = prompt("Ismingizni yozing")
let type = prompt("Bironta harf kiring")
if(ism.includes(`${type}`)){
    alert(`${ism} ism ${type} xarfiga yo'g'ri keladi`)
}else{
    alert(`To'g'ri kelmiydi`)
}