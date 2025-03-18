import quotes from './modules/quotes.js'
import { AdventBox } from './modules/AdventBox.js'

//const history = new History() 
const boxes = document.querySelectorAll('.js-box')
const modals = document.querySelector('.js-modal')
const today=new Date(Date.now())
const dateNumber= today.getDate ()



for(let i = 0; i < boxes.length; i++) {
    const adventBox = new AdventBox(boxes[i], modals, quotes[i])
    const boxNumber = boxes[i].textContent

    if( boxNumber<=dateNumber ){
        /* if (adventBox.hasBeenOpened()) {
            adventBox.show();
        } else {*/
            adventBox.element.addEventListener('click', () => {
                adventBox.animation.play()
                //adventBox.show()
                //adventBox.save()
    })
/*}

history.add(adventBox)*/
    }

}

/*if (history.isFull()) {
    history.clear()
}*/