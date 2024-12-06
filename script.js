var clr = document.getElementById("first")
var clrone = document.getElementById("clrone")
var equal = document.getElementById("equal")
var operator = document.getElementById("red")
var display = document.getElementById("display")
var operands = []

clr.addEventListener("click",function(){ // for allclear
    operands=[]
    display.textContent="0"
})
function operation(event){
    if(event.target.innerText == '÷'){
        operands.push('/')
    }
    else if(event.target.innerText == '×'){
        operands.push('*')
    }
    else if(event.target.innerText == '+'){
        operands.push('+')
    }
    else if(event.target.innerText == '–'){
        operands.push('-')
    }
    var len = operands.length
    if(len>0){
        display.textContent="";
        for(var i=0;i<len;i++){
            display.textContent+=operands[i]
        }
    }
    else{
        display.textContent="0"
    }
}
clrone.addEventListener("click",function(){ //for clrlast
    if(operands.length==0){
        display.textContent="0"
    }else{
        var len = operands[operands.length - 1].length
        if(len > 1){
            operands[operands.length - 1] = operands[operands.length - 1].slice(0,-1)
        }
        else{
            operands.pop()
        }
        var len = operands.length
        if(len>0){
            display.textContent="";
            for(var i=0;i<len;i++){
                display.textContent+=operands[i]
            }
        }
        else{
            display.textContent="0"
        }
    }
})
equal.addEventListener("click",function(){ //for equal
    if(operands.length %2==0 || operands.length <3){
        if(operands.length){
            if(operands.length == 1 && Number.isFinite(Number(operands[0]))){
                display.textContent = operands[0]
            }else{
                display.textContent = "SYNTAX ERROR"
            }
        }
        else{
            display.textContent="0"
        }
        operands = []
    }
    else{
        for(var i = 0;i < operands.length;i++){
            var num1 = Number(operands[0])
            var num2 = Number(operands[2])
            var oper = Number(operands[1])
            if((Number.isFinite(num1)&&Number.isFinite(num2))&&isNaN(oper)){
                if(operands[1]=='/'){
                    var nub = num1 / num2
                    operands.shift()
                    operands.shift()
                    operands.shift()
                    operands.unshift(nub)
                }
                else if(operands[1]=='*'){
                    var nub = num1 * num2 
                    operands.shift()
                    operands.shift()
                    operands.shift()
                    operands.unshift(nub)
                }
                else if(operands[1]=='-'){
                    var nub = num1 - num2
                    operands.shift()
                    operands.shift()
                    operands.shift()
                    operands.unshift(nub)
                }
                else if(operands[1]=='+'){
                    var nub = num1 + num2
                    operands.shift()
                    operands.shift()
                    operands.shift()
                    operands.unshift(nub)
                }
                else{
                    display.textContent = "SYSTAX ERROR"
                    break
                }
            }
            else{
                display.textContent = "SYNTAX ERROR"
                operands = []
                break
            }
        } 
        if(operands.length){
            display.textContent = operands[0]
        }
        operands = []
    }
})
function number(event){  //for number 
    if((event.target.innerText == '0') && (operands.length == 0)){
        display.textContent = "0"
    }
    else{
        if(operands.length == 0){
            operands.push(event.target.innerText)
        }
        else{
            if(Number.isFinite(Number(operands[operands.length -1]))){
                operands[operands.length-1] = operands[operands.length-1]+event.target.innerText
            }
            else{
                operands.push(event.target.innerText)
            }
        }
        

        var len = operands.length
        if(len>0){
            display.textContent="";
            for(var i=0;i<len;i++){
                display.textContent+=operands[i]
            }
        }
        else{
            display.textContent="0"
        }
    }
}



