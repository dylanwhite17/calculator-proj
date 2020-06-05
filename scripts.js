//// CALC PROJ:

////Variables/Objects:
const display = document.querySelector('.display-para')

//OPERATORS:
const operators = {
    plus: {
        queryClick: document.querySelector('.plus'),
        operator: false
        },
    minus: {
        queryClick: document.querySelector('.minus'),
        operator: false
    }, 
    mult: {
        queryClick: document.querySelector('.mult'),
        operator: false
    }, 
    div: {
        queryClick: document.querySelector('.div'),
        operator: false
    }  
}

//NUMS + SCREEN CONTENT:
const userInput = {
    one: {
        queryClick: document.querySelector('.one'),
        value: 1
        },
    two: {
        queryClick: document.querySelector('.two'),
        value: 2
    }, 
    three: {
        queryClick: document.querySelector('.three'),
        value: 3
    }, 
    four: {
        queryClick: document.querySelector('.four'),
        value: 4
    },
    five: {
        queryClick: document.querySelector('.five'),
        value: 5
        },
    six: {
        queryClick: document.querySelector('.six'),
        value: 6
    }, 
    seven: {
        queryClick: document.querySelector('.seven'),
        value: 7
    }, 
    eight: {
        queryClick: document.querySelector('.eight'),
        value: 8
    },
    nine: {
        queryClick: document.querySelector('.nine'),
        value: 9
        },
    zero: {
        queryClick: document.querySelector('.zero'),
        value: 0
    }, 
    leftP: {
        queryClick: document.querySelector('.leftP'),
        value: '('
    }, 
    rightP: {
        queryClick: document.querySelector('.rightP'),
        value: ')'
    },
    dec: {
        queryClick: document.querySelector('.dec'),
        value: '.'
    },
    clear: {
        queryClick: document.querySelector('.clear'),
        value: ''   
    },
    equals: {
        queryClick: document.querySelector('.equals'),
        op: null,
        value1: null,
        value2: null   
    }
}

equals.queryClick.addEventListener('click', function(){
    //console.log(equals.value1, equals.op, equals.value2)
    if (equals.op = '+')
    display.textContent = (addTwo(equals.value1, equals.value2))
    equals.value1 = null
    equals.value2 = null
    equals.op = null
})

clear.queryClick.addEventListener('click', function(){
    display.textContent = clear.value
})

div.queryClick.addEventListener('click', function(){
    display.textContent += div.value
})

mult.queryClick.addEventListener('click', function(){
    display.textContent += mult.value
})

minus.queryClick.addEventListener('click', function(){
    display.textContent += minus.value
})

plus.queryClick.addEventListener('click', function(){
    if (display.content) {
        display.textContent = clear.value
    }
    display.textContent = plus.op
    equals.op = plus.op
})

one.queryClick.addEventListener('click', function(){
    display.textContent = clear.value
    if (equals.value1 == null) {
        display.textContent = one.value
        equals.value1 = one.value
    } else if (equals.value2 == null) {
        display.textContent = one.value
        equals.value2 = one.value
    }
    // display.textContent += one.value
})

two.queryClick.addEventListener('click', function(){
    display.textContent += parseInt(two.value)
})

three.queryClick.addEventListener('click', function(){
    display.textContent += three.value
})

four.queryClick.addEventListener('click', function(){
    display.textContent += four.value
})

five.queryClick.addEventListener('click', function(){
    display.textContent += five.value
})

six.queryClick.addEventListener('click', function(){
    display.textContent += six.value
})

seven.queryClick.addEventListener('click', function(){
    display.textContent += seven.value
})

eight.queryClick.addEventListener('click', function(){
    display.textContent += eight.value
})

nine.queryClick.addEventListener('click', function(){
    display.textContent += nine.value
})

zero.queryClick.addEventListener('click', function(){
    display.textContent += zero.value
})

decimal.queryClick.addEventListener('click', function(){
    display.textContent += decimal.value
})

leftPara.queryClick.addEventListener('click', function(){
    display.textContent += leftPara.value
})

rightPara.queryClick.addEventListener('click', function(){
    display.textContent += rightPara.value
})

function addTwo(x, y) {
    
    return x + y
}