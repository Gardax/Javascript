function addNumbers(num1, num2){
        var result = new Array();
       
        var length = num1.length;
        if(num2.length > num1.length){
                length = num2.length;
        }
       
        for(var i = 0; i < length; i ++){
                if(num1[i] + num2[i] >= 10){
                        var lastDigit = (num1[i] + num2[i]) % 10;
                        result[i] = lastDigit;
                        result[i + 1] = 1;
                }
                else{
                        if(result[i]){
                                result[i] += (num1[i] + num2[i]);
                        }
                        else{
                                result[i] = (num1[i] + num2[i]);
                        }
                }
        }
       
        return result;
}
 
var number1 = [1, 1, 0, 1];
var number2 = [9, 0, 0, 9];
document.write(number1 + "</br>+<br/>" + number2 +
        "<br/>=<br/>" + addNumbers(number1, number2));