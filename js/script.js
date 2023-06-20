const atualizaRelogio = () =>{
const data=new Date();
const hora=data.getHours().toString().padStart(2,'0');
const minutos= data.getMinutes().toString().padStart(2,'0');
let imgSrc=''

const body= document.body

const horaAtual= `${hora}:${minutos}`
const horario=`${hora}${minutos}`
document.getElementById('js__span').innerHTML=horaAtual
if(hora >= 0 && hora < 3 ){
    imgSrc = 'madrugada_normal.jpg'
    body.style.backgroundColor='#070707'
}else if (horario > 201 && horario <= 333 ){
    imgSrc='madrugada.jpg'
    body.style.backgroundColor='#585858'
}else if (horario > 333 && horario <= 559 ){
    imgSrc='madrugada_normal.jpg'
    body.style.backgroundColor='#070707'
}else if (horario >=600  && horario <= 1159 ){
    imgSrc='manha.jpg'
    body.style.backgroundColor='##fee902'
}else if (horario >=1200  && horario <= 1829 ){
    imgSrc='tarde.jpg'
    body.style.backgroundColor='#527297'
}else if (horario >=1830  && horario <= 2359 ){
    imgSrc='noite.jpg'
    body.style.backgroundColor='#1a2229'
}



document.getElementById('img').src=imgSrc  

};

atualizaRelogio();

setInterval(atualizaRelogio,20000);
