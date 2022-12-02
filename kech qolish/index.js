let vaqt={
    soat:+prompt("Dars soat 8:00 da boshlanadi.Kech qolganmisiz aniqlash uchun hozirgi vaqtni kiriting\nSoatni kiriting"),
    minut:+prompt("Minutni kiriting")
}
let time=document.querySelector("div .vaqt")
alert(vaqt.soat)
if(vaqt.soat<8){
    time.innerHTML='Darsga o\'z vaqtida keldiz'
}
else{

    if(vaqt.soat==8 && vaqt.minut<20 && vaqt.minut>3){
    time.innerHTML='Darsga kech qolganingiz uchun 20 minut o\'tgandan keyin kirasiz'
    }
    else{
        time.innerHTML='Darsga kech qoldiz';
    }
}