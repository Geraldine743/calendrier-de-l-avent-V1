import { Animation } from "./Animation.js"
export class AdventBox {
    /**
     * @param { HTMLElement } element
     * @param { HTMLElement } modal
     * @param { Quote } quote
     */
    constructor(element, modal, quote) {
        this.element = element
        this.modal = modal
        this.quote = quote
        this.animation = new Animation(this)

        this.init()
    }

    init (){
        console.log(this.element)
        this.element.addEventListener('click', () => {
            this.hasBeenOpened()
        })    
    }


    hasBeenOpened() {
        console.log ( 'la case à déjà été ouverte')
    }

    save() {
        console.log ('historique sauvegarder')
    }

    show() {
        this.element.classList.add('hide')
    }

    hide() {
        this.element.classList.remove('hide')
    }
}