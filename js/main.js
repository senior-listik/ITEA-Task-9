const list = document.querySelector('.guests__cards');
const listItems = document.querySelectorAll('.guests__cardItem');
const nextLiBtn = document.querySelector('#getNextLi');
const prevLiBtn = document.querySelector('#getPrevLi');

let counter = 0;
let step = listItems[0].clientWidth + 20;

// list.style.transform = 'translateX(' + `${-step * counter}px)`

nextLiBtn.addEventListener('click', () => {

    if (counter >= listItems.length - 1) counter = -1;
  
    counter++;
    let listItem = document.querySelector('.guests__cards');
    listItem.classList.add('transformAnimation');
    listItem.style.transform = 'translateX(' + `${-step * counter}px)`;
    
})

prevLiBtn.addEventListener('click', () => {

    if (counter <= 0) counter = listItems.length;
  
    counter--;
    let listItem = document.querySelector('.guests__cards');
    listItem.classList.add('transformAnimation');
    listItem.style.transform = 'translateX(' + `${-step * counter}px)`;
    
    
})
