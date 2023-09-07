let string = "";
let a =0;
let b =0;
let buttons = document.querySelectorAll('.btn');
let count = 0;

  function evalExpression(expr) {
    const operators = ['+', '-', '*', '/','^'];
    let currentNumber = '';
    let operator = '+';
    let result = 0;

    for (let i = 0; i < expr.length; i++) {
    const char = expr.charAt(i);

    if (operators.includes(char)) {
        result = applyOperator(result, operator, Number(currentNumber));
        operator = char;
        currentNumber = '';
    } else {
        currentNumber += char;
      }
    }

    result = applyOperator(result, operator, Number(currentNumber));
    return result;
  }

  function applyOperator(a, operator, b) {
    switch (operator) {
    case '+':
        return a + b;
    case '-':
        return a - b;
    case '*':
        return a * b;
    case '/':
        return a / b;
    case '^':
        return a ** b;
    }
  }


Array.from(buttons).forEach((item) => {
    item.addEventListener('click', (e)=>{
        if ( e.target.innerHTML == '='){
            string = evalExpression(string);
            document.querySelector('input').value = string;
        }  
        
        else if ( e.target.innerHTML == '√'){
            string = Math.sqrt(string);
            document.querySelector('input').value = string;
        }
        else if ( e.target.innerHTML == 'X <sup>2</sup>'){
            string = Math.pow(string,2);
            document.querySelector('input').value = string;
        }
        else if ( e.target.innerHTML == 'X <sup>3</sup>'){
            string = Math.pow(string,3);
            document.querySelector('input').value = string;
        }
        else if ( e.target.innerHTML == '∏'){
            string = Math.PI;
            document.querySelector('input').value = string;
        }

        else if ( e.target.innerHTML == 'Sin'){
            string =Math.sin(string* (Math.PI/180));
            document.querySelector('input').value = string ;
        }

        else if ( e.target.innerHTML == 'Cos'){
            if(string== 90)
            {
                string = Math.cos(string* parseInt(Math.PI/180));
                document.querySelector('input').value = string;
            }
            else{
                string = Math.cos(string* (Math.PI/180));
                document.querySelector('input').value = string;
            }
            
        }
        else if ( e.target.innerHTML == 'tan'){
            if(string== 90)
            {
                string = 1/0 ;
                // string = Math.tan(string* parseInt(Math.PI/180));
                document.querySelector('input').value = string;
            }
            else{
                string = Math.tan (string* (Math.PI/180));
                document.querySelector('input').value = string;
            }
        }
        else if ( e.target.innerHTML == 'e'){
            string = Math.E;
            document.querySelector('input').value = string;
        }      
        else if ( e.target.innerHTML == 'log'){
            string = Math.log(string);
            document.querySelector('input').value = string;
        }
        
        else if ( e.target.innerHTML == 'DEL'){
            string = string.toString().slice(0,-1);
            document.querySelector('input').value = string;
        }
        else if ( e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
            count = 0;
        }

        else if ( e.target.innerHTML == 'EXP'){
            string = Math.pow(10,string);
            document.querySelector('input').value = string;
        }
        else if ( e.target.innerHTML == '.')
        {
            if (count == 0 )
            {
                string += e.target.innerHTML;
                document.querySelector('input').value = string;
                count += 1;
            }
        }      
        
        else{
            console.log(e.target)
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
