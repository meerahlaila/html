function setScreenValue(value){
    document.getElementById("result").value += value
}

function clearScreen(){
    document.getElementById('result').value = "";
}

function calculateResult(){
    const result = document.getElementById('result');
    const expression = result.value.trim()

    if(expression === ''){
        result.value = "Enter an expression"
    }

    try{
        result.value = eval(expression)
    } catch (e){
        result.value = "Invalid expression"
    }
}