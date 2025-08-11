const ButtonSig = document.querySelector('button.buttonSig');
const img=document.querySelector('img.tam');

const imgLista=['imagenes/web1.jpg', 'imagenes/figma1.png'];
let index =0;
ButtonSig.addEventListener('click', function(){
    index +=1
    img.src=imgLista[index];

    if(index===1){
        index=-1;
    }
})

const ButtonSig2 = document.querySelector('button.buttonSig2');
const img2=document.querySelector('img.tam2');

const imgLista2=['imagenes/03 Free iPhone 15 Pro On Rock Mockup.png', 'imagenes/iPhone-16-Pro-Mockup.png','imagenes/CapXD.png'];
let index2 =0;
ButtonSig2.addEventListener('click', function(){
    index2 +=1
    img2.src=imgLista2[index2];

    if(index2===2){
        index2=-1;
    }
})

const ButtonSig3 = document.querySelector('button.buttonSig3');
const img3=document.querySelector('img.tam3');

const imgLista3=['imagenes/Cap1.png','imagenes/Cap2.png','imagenes/Cap3.png',];
let index3 =0;
ButtonSig3.addEventListener('click', function(){
    index3 +=1
    img3.src=imgLista3[index3];

    if(index3===2){
        index3=-1;
    }
})

let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.head-right');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", function () {
    // Verifica si el navegador soporta animation-timeline
    const supportsTimeline = CSS.supports("animation-timeline: view()");
    if (supportsTimeline) return; // Chrome/Edge usan la animación nativa

    const elements = document.querySelectorAll('.autoBlur');

    window.addEventListener('scroll', () => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calcular progreso de visibilidad (0 a 1)
            let progress = 1 - (rect.top / windowHeight);
            progress = Math.max(0, Math.min(progress, 1)); // limitar entre 0 y 1

            // Simular los keyframes según el progreso
            if (progress < 0.4) {
                // Inicio -> blur alto, opacidad baja
                const blurValue = 40 - (progress / 0.4) * 40;
                el.style.filter = `blur(${blurValue}px)`;
                el.style.transform = `translateY(${0}px)`;
                el.style.opacity = progress / 0.4;
            } else if (progress < 0.6) {
                // Medio -> sin blur, opacidad total
                el.style.filter = `blur(0px)`;
                el.style.transform = `translateY(0px)`;
                el.style.opacity = 1;
            } else {
                // Final -> volver al blur y mover hacia arriba
                const endProgress = (progress - 0.6) / 0.4;
                const blurValue = endProgress * 40;
                const translateY = -200 * endProgress;
                el.style.filter = `blur(${blurValue}px)`;
                el.style.transform = `translateY(${translateY}px)`;
                el.style.opacity = 1 - endProgress;
            }
        });
    }, { passive: true });
});