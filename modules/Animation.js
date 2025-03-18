export class Animation {
    /**
     * @param { AdventBox } box
     */
    constructor(box) {
        this.box = box
        this.url='assets/audios/opening-song.mp3'
        this.song=new Audio (this.url)
    }

    play() {
        this.playSong() 
        this.showImage(this.box.element)
        this.openModal()
        this.closeModal()
    }

    playSong() {
        this.song.pause()
        this.song.currentTime=0
        this.song.play()
    }

    showImage(boxToHide) {
        boxToHide.classList.add('hide')
    }

    openModal() {
        this.box.modal.showModal()
        const quote=this.box.modal.querySelector ('.js-quote')
        const author=this.box.modal.querySelector ('.js-author')
        quote.textContent= this.box.quote.quote
        author.textContent= this.box.quote.author
    }

    closeModal() {
        this.box.modal.addEventListener ('close', ()=>{
            this.song.pause()
        })
    }
}