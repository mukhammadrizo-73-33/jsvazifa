let a = +prompt("Bu dastur sonning TUB ekanligini tekshirib beradi \n Sonni kiriting");
let n = 0;
for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
        n++;
    }
}
let s=document.querySelector("#tubmi")

if(n==2){
    s.innerHTML=`${a} soni TUB`

}
else{
    s.innerHTML=`${a} soni murakkab`
}