class History {
    constructor () {
        this.openedBoxes = []
        this.init ()
    }

    init (){
        this.saveHistory (window.app.boxNumber)
        this.showPreviouslyOpenedBoxes ()
    }

    saveHistory (){
        let localValue = localStorage.getItem ("openedBoxes")
        if (localValue!==null){
            this.openedBoxes= localValue.split(',')
        }
        this.openedBoxes.push(window.app.boxNumber)
        localStorage.setItem("openedBoxes",this.openedBoxes)
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