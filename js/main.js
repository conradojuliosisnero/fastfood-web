const menDisplay = document.querySelector('.nav');
const tittleNav = document.querySelector('.nav');

window.onscroll = ()=>{
        if (window.scrollY > 600) {
            menDisplay.style.background='#FFCC00';
            menDisplay.style.borderBottom='solid 2px #FFFF';
        }else{
            menDisplay.style.background='transparent';
        }
}
