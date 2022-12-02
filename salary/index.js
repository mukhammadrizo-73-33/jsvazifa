let income=document.querySelector(".oylik")
let dollar=parseInt(income.innerHTML)
let k=+prompt("Qancha oylik oldiz")
if(k==dollar){
    console.log(`Oylikni to\'liq olibsiz`)
}
else if(k<dollar){
console.log(`Oylikni ${dollar-k}$ kam olibsiz`)
}
else{
    console.log(`Oylikni ${k-dollar}$ ko\'p olibsiz`)
}