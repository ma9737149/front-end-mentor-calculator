let inputDisplay = document.querySelector(".display")
let rangedInput = document.querySelector("input[type = 'range']")
let childElement = document.querySelector(".child")
let bodyElement = document.querySelector("body")


function addToDisplay(charOrNumber) {
    if (inputDisplay.value === "math error") {
        inputDisplay.value = ""
    }

    if (inputDisplay.value === "" && charOrNumber === "+" || inputDisplay.value === "" && charOrNumber === "-" || inputDisplay.value === "" && charOrNumber === "*" || inputDisplay.value === "" && charOrNumber === "." || inputDisplay.value === "" && charOrNumber === "/") {
        inputDisplay.value = ""
        return
    }

    if (inputDisplay.value === "" && charOrNumber == 0) {
        return
    }


    if (charOrNumber === "." || charOrNumber === "+" || charOrNumber === "-" || charOrNumber === "/" || charOrNumber === "*") {

        if (inputDisplay.value[inputDisplay.value.length - 1] === "." || inputDisplay.value[inputDisplay.value.length - 1] === "-" || inputDisplay.value[inputDisplay.value.length - 1] === "/" || inputDisplay.value[inputDisplay.value.length - 1] === "+" || inputDisplay.value[inputDisplay.value.length - 1] === "*"){
            return
        }
    }


    inputDisplay.value += charOrNumber
    
}



function removeFromDisplay(){
    if (inputDisplay.value === "math error") {
        inputDisplay.value = ""
    }
    inputDisplay.value = inputDisplay.value.slice(0,-1)
}

function calaulate() {
        try{
            if (inputDisplay.value !== ""){
                inputDisplay.value = eval(inputDisplay.value)
                if (eval(inputDisplay.value) === Infinity) {
                    inputDisplay.value = "math error"
                    return
                }
            } 
        }
        catch(e) {
            inputDisplay.value = "math error"
        }
}





function resetInputIntoNull() {
    if (inputDisplay.value !== "") {
        inputDisplay.value = ""
    }
}

window.onload = function() {
    inputDisplay.value = ""
}


rangedInput.onchange = function () {
    let value = this.value
    childElement.classList.forEach(class_ => {
        if (class_.includes("theme")) {
            childElement.classList.remove(class_)
            bodyElement.classList.remove(class_)
        }
    })
    childElement.classList.add(`theme-${value}`)
    bodyElement.classList.add(`theme-${value}`)
}