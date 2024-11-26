    function somar(num1, num2){
        return num1 + num2;
    }

    const somarAnonima = function(num1,num2) {
        return num1 + num2;
    }

    const somarArrow = (num1, num2) => num1 + num2;


    console.log(somar(10, 5));
    console.log(somarAnonima(10,5));
    console.log(somarArrow(10,5));

    