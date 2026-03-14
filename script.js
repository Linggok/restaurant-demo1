const translations = {

zh: {
title: "老串角居酒屋",
home: "首頁",
menu: "菜單",
reservation: "訂位"
},

en: {
title: "kushi-kadoizakaya",
home: "Home",
menu: "Menu",
reservation: "Reservation"
},

jp: {
title: "老串角居酒屋",
home: "ホーム",
menu: "メニュー",
reservation: "予約"
},

kr: {
title: "라오추안자오 이자카야",
home: "홈",
menu: "메뉴",
reservation: "예약"
}

};

const form = document.getElementById("reservationForm");

form.addEventListener("submit", async function(e){

e.preventDefault();

const data = {

name: form[0].value,
phone: form[1].value,
date: form[2].value,
time: form[3].value,
people: form[4].value,
note: form[5].value

};

await fetch("https://script.google.com/macros/s/AKfycbzMdcUL5-mfnQuXCWfZ_SYQgXmDSl11Jx12pewu2UYGBJZvwyNBD2lBnEx0DD1v4Bcx/exec",{

method:"POST",

body: JSON.stringify(data)

});

alert("訂位成功！");

});

const today = new Date().toISOString().split("T")[0];

const dateInput = document.getElementById("date");

if(dateInput){
dateInput.setAttribute("min", today);
}

document.getElementById("language").addEventListener("change", function(){

const lang = this.value;

document.getElementById("title").innerText = translations[lang].title;

document.getElementById("nav-home").innerText = translations[lang].home;

document.getElementById("nav-menu").innerText = translations[lang].menu;

document.getElementById("nav-reservation").innerText = translations[lang].reservation;

});