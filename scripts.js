//// CALC PROJ:

////Variables/Objects:
const display = document.querySelector('.display-para')
const theParent = document.querySelector('#parent')
let equalsValue1
let equalsValue2
let operatorActive = false
let numActive = false
let opArray = []

theParent.addEventListener('click', handleClicks, false)

function handleClicks(e) {
    let clickedItem = e.target.textContent
    
    // Target the children of the event listener:
    if (e.target !== e.currentTarget && e.target.id == 'nums') {
        //console.log('num clicked')
        //Remove operator from display before next set of numbers:
        if (operatorActive) {
            display.textContent = ''
            operatorActive = false
            //console.log(`operatorActive: ${operatorActive}`)   
        }
        display.textContent += clickedItem
        } else if (e.target !== e.currentTarget && e.target.id == 'ops' || e.target.className == 'equals') {
            //console.log('operator clicked')
            //set to true if operator is active
            
            operatorActive = e.target.className
            opArray.push(operatorActive)
            if (opArray.length > 2){opArray.shift()}
            operatorPrevious = opArray[0]

            //console.log(operatorActive, operatorPrevious)

           
            //// OPERATOR FOLLOWED BY ANOTHER OPERATOR:
            if (!equalsValue1 && !equalsValue2) {
                equalsValue1 = parseInt(display.textContent)
                //console.log(`EqVal1: ${equalsValue1}`)
                display.textContent = e.target.textContent  
            } else if (equalsValue1 && !equalsValue2) {
                equalsValue2 = parseInt(display.textContent)
                //console.log(equalsValue2)
                equalsValue1 = equalsFunc(operatorPrevious, equalsValue1, equalsValue2)
                
                display.textContent = equalsValue1
            }  
        } else if (e.target !== e.currentTarget && e.target.className == 'equals') {
            //console.log(operatorPrevious, equalsValue1, equalsValue2)
            display.textContent = console.log(equalsFunc(operatorPrevious, equalsValue1, equalsValue2))
        }
    
    e.stopPropagation()
}

function additionFunc(x,y) {return x + y}

function subtractionFunc(x,y) {return x - y}

function multiplicationFunc(x,y) {return x * y}

function divisionFunc(x,y) {return x / y}

function equalsFunc(curOp, eqVal1, eqVal2) {

    if (curOp == 'plus'){
        return additionFunc(eqVal1, eqVal2)
    } 
    else if (curOp == 'minus') {
        return subtractionFunc(eqVal1, eqVal2)
    } 
    else if (curOp == 'mult') {
        return multiplicationFunc(eqVal1, eqVal2)
    }
    else if (curOp == 'div') {
        return subtractionFunc(eqVal1, eqVal2)
    }
}
