function saturdayFun (activity = 'roller-skate') {
    return(`This Saturday, I want to ${activity}!`);
} 
saturdayFun("bathe my dog");

function mondayWork (activity = "go to the office") { 
    return(`This Monday, I will ${activity}.`);
}
mondayWork("work from home");

function wrapAdjective (visualFlair = "*"){
    return function innerFunction(adjective = "special") {
                        return(`You are ${visualFlair}${adjective}${visualFlair}!`) 
                    }
    
    }
    wrapAdjective("<3)")("lovely");

let Calculator = { 
    add: function(num1, num2) {
        return num1 + num2 },               // Is there a parameter I can include so I don't have to write num1, num2 every time?
    subtract: function(num1, num2) {
        return num1 - num2 },
    multiply: function(num1, num2) { 
        return num1 * num2 },
    divide: function(num1,num2) {
        return num1/num2   }
    }


Calculator.add(1,3);
Calculator.subtract(1,3);
Calculator.multiply(1,3);
Calculator.divide(10,5);

function actionApplyer(startInteger = 0, [] ){ 
    
    
}
actionApplyer(0)