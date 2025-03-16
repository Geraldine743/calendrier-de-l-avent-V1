class History {
    constructor () {
        this.boxes=document.querySelectorAll(".js-box")
        this.today=new Date(Date.now())
        this.dateNumber= this.today.getDate ()
        this.openedBoxes = []
        this.init ()
    }

    init (){
        this.saveHistory ()
        this.showPreviouslyOpenedBoxes ()
    }

    saveHistory (){
        this.boxes.forEach (box =>{
            box.addEventListener ('click', ()=>{
                const boxNumber=box.textContent
                if(boxNumber<= this.dateNumber){
                    let localValue = localStorage.getItem ("openedBoxes")
                    if (localValue!==null){
                        this.openedBoxes= localValue.split(',')
                    }
                this.openedBoxes.push(boxNumber)
                localStorage.setItem("openedBoxes",this.openedBoxes)
                }
            })
        })
    }

    showPreviouslyOpenedBoxes (){
        const previouslyOpenedBoxes =localStorage.getItem ("openedBoxes")
        if ( previouslyOpenedBoxes!==null){
            const listOfBoxes = previouslyOpenedBoxes.split(",")
            for (let i=0; i<listOfBoxes.length;i++){
                this.boxNumber =listOfBoxes [i]
                this.box=document.querySelector (`[data-number="${this.boxNumber}"]`)
                this.box.classList.add ('hide')
            }
        }
        if (this.boxNumber==25){
            localStorage.clear ()
        }

    }
}

export {History}