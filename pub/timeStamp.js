

function Timestamp() {

    const _self = {}
	

    _self.getCurrentTime = function(selector) {
        const element = document.querySelector(selector)
        return element.currentTime
    }

    _self.displayTime = function(video, selector) {
        const vid = document.querySelector(video)
        const currTime = vid.currentTime
        const element = document.querySelector(selector)

        element.appendChild(document.createTextNode(currTime))
    }

    _self.displayNote = function(inputSelector, outputSelector, video) {
        const vid = document.querySelector(video)
        
        const currTime = vid.currentTime
        const inputElement = document.querySelector(inputSelector)
        const outputElement = document.querySelector(outputSelector)
        const text = inputElement.value

        outputElement.appendChild(document.createTextNode(currTime))
        outputElement.appendChild(document.createTextNode(" " + text + " "))

    }

    return _self
}