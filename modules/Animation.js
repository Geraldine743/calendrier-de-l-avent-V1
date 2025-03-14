import quotes from './quotes.js'
import { History } from './History.js'

class Animation {
    constructor () {
        this.boxes=document.querySelectorAll(".js-box")
        this.today=new Date(Date.now())
        this.dateNumber= this.today.getDate ()
        this.url= 'assets/audios/opening-song.mp3'
        this.song= new Audio (this.url)
        this.modal= document.querySelector ('.js-modal')
        this.quote=this.modal.querySelector ('.js-quote')
        this.author=this.modal.querySelector ('.js-author')

        this.init ()
    }

    init (){
        this.triggerAnimation ()
        this.closeModal ()
        
    }

    triggerAnimation () {
        this.boxes.forEach (box =>{
            box.addEventListener ('click', ()=>{
                window.app.boxNumber= parseInt(box.textContent)
                if (window.app.boxNumber<= this.dateNumber){
                    this.playSong ()
                    this.showImage(box)
                    this.openModal (window.app.boxNumber)
                    new History
                }
            })
        })
    }

    playSong () {
        this.song.pause ()
        this.song.currentTime=0
        this.song.play ()
    }

    showImage (boxToHide){
        boxToHide.classList.add('hide')
    }

    openModal (index) {
        this.modal.showModal ()
        this.quote.textContent= quotes[index].quote
        this.author.textContent= quotes[index].author
    }

    closeModal() {
        this.modal.addEventListener ('close', ()=>{
            this.song.pause ()
        })
    }
}

export {Animation}