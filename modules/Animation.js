class Animation {
    constructor () {
        this.boxes=document.querySelectorAll(".js-box")
        this.today=new Date(Date.now())
        this.dateNumber= this.today.getDate ()
        this.url= 'assets/audios/opening-song.mp3'
        this.song= new Audio (this.url)
        this.init ()
    }

    init (){
        this.triggerAnimation ()
    }

    triggerAnimation () {
        this.boxes.forEach (box =>{
            box.addEventListener ('click', ()=>{
                this.boxNumber = parseInt(box.textContent)
                if (this.boxNumber<= this.dateNumber){
                    this.playSong ()
                    this.showImage(box)
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
}

export {Animation}