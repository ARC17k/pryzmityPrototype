let slide_next = document.querySelector('#work-next');
let slide_prev = document.querySelector('#work-prev');
let slider = document.querySelector('#works-slider');
let cards = document.querySelectorAll('#work-card');
let sliderStyle = getComputedStyle(slider);

// slide using btns
slide_next.addEventListener("click",next);
slide_prev.addEventListener('click',prev);

function next(){
    slider.appendChild(cards[0]);
    updateCardPositions();
}
function prev(){
    slider.prepend(cards[cards.length-1]);
    updateCardPositions();
}

setInterval(next,10000);

function updateCardPositions() {
    cards = document.querySelectorAll('#work-card');
    let offset = sliderStyle.getPropertyValue('--offset');
    let cardWidth = parseInt(sliderStyle.getPropertyValue('--card-width'));
    
    cards.forEach((card, index) => {
        card.style.left = '0px';
        card.style.transition = '.5s ease-in';
        
        if(index == cards.length - 1 || index == 0){
            card.style.transition = 'none';
        }
        if(index > 1){
            let cardOffset = card.parentElement.offsetWidth * offset;
            card.style.left = `${cardOffset + ((index - 2) * (cardWidth+10))}px`;
        }
    });
}

updateCardPositions();

window.addEventListener('resize', updateCardPositions);



