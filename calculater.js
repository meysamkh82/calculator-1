let number1;
            let op;
            let number2;
            let inp = document.getElementById('inp')
            function reset(){
                inp.value = ''
            }
            function clc(a){
                inp.value += a.innerHTML
                a.style.backgroundColor = "red"
                setTimeout(function(){
                    a.style.backgroundColor = "rgb(104, 195, 236)"
                },200)
            }
            function opertion(t){
                op = t.innerHTML;
                number1 = parseFloat(inp.value)
                inp.value = ""
                t.style.backgroundColor = "red"
                setTimeout(function(){
                    t.style.backgroundColor = "rgb(1, 12, 61)"
                },200)
            }
            function radical(){
                document.getElementById('radical').style.backgroundColor = "red"
                setTimeout(function(){
                    document.getElementById('radical').style.backgroundColor = "rgb(1, 12, 61)"
                },200)
                let res = Math.sqrt(parseFloat(inp.value));
                inp.value = res
            }
            function result(){
                number2 = parseFloat(inp.value);
                let result;
                switch(op){
                    case '+' : result = number1 + number2;break;
                    case '-' : result = number1 - number2;break;
                    case '×' : result = number1 * number2;break;
                    case '÷' : result = number1 / number2;break;
                    case '%' : result = number1 % number2;break;
                    default: 'Eror';break;
                }
                inp.value = result
            }
            function minus(num){
                let res = parseInt(inp.value) > 0 ? 'plus' : 'minus';
                console.log(res)
                if(res === 'plus'){
                    inp.value = parseFloat(inp.value * -1)
                }
                else{
                    console.log(inp.value)
                    inp.value = parseFloat(inp.value * -1)
                }
            }
            // function txt(e){
            //     let result;
            //     let key = e.keyCode;
            //     switch(key){
            //         case 46 : inp.value = '';break;
            //         case 8 : inp.value = "";break;
            //         case 13 : document.getElementById('mosavi').style.backgroundColor = 'yellow';  number2 = parseInt(inp.value);
            //
            //     switch(op){
            //         case '+' : result = number1 + number2;break;
            //         case '-' : result = number1 - number2;break;
            //         case '×' : result = number1 * number2;break;
            //         case '÷' : result = number1 / number2;break;
            //         case '%' : result = number1 % number2;break;
            //         default: 'Eror'
            //     }inp.value = parseInt(result);break;
            //         case 107 : document.getElementById('sum').style.backgroundColor = 'red';number1 = parseInt(inp.value);inp.value = "";op = '+';break;
            //         case 109 : document.getElementById('menha').style.backgroundColor = 'red';number1 = parseInt(inp.value);inp.value = "";op = '-';break;
            //         case 106 : document.getElementById('zarb').style.backgroundColor = 'red';number1 = parseInt(inp.value);inp.value = "";op = '×';break;
            //         case 111 : document.getElementById('th').style.backgroundColor = 'red';number1 = parseInt(inp.value);inp.value = "";op = '÷';break;
            //         case 97 :document.getElementsByClassName('adad')[0].style.backgroundColor = 'red';  inp.value += "1"; break;
            //         case 98 :document.getElementsByClassName('adad')[1].style.backgroundColor = 'red';  inp.value += "2"; break;
            //         case 99 :document.getElementsByClassName('adad')[2].style.backgroundColor = 'red';  inp.value += "3"; break;
            //         case 100 :document.getElementsByClassName('adad')[3].style.backgroundColor = 'red'; inp.value += "4"; break;
            //         case 101 :document.getElementsByClassName('adad')[4].style.backgroundColor = 'red'; inp.value += "5"; break;
            //         case 102 :document.getElementsByClassName('adad')[5].style.backgroundColor = 'red'; inp.value += "6"; break;
            //         case 103 :document.getElementsByClassName('adad')[6].style.backgroundColor = 'red'; inp.value += "7"; break;
            //         case 104 :document.getElementsByClassName('adad')[7].style.backgroundColor = 'red'; inp.value += "8"; break;
            //         case 105 :document.getElementsByClassName('adad')[8].style.backgroundColor = 'red'; inp.value += "9"; break;
            //         case 96 :document.getElementsByClassName('adad')[10].style.backgroundColor = 'red'; inp.value += "0"; break;
            //         case 110 :document.getElementsByClassName('adad')[11].style.backgroundColor = 'red';inp.value += '.'; break;
            // }
            //
            //
            // if(key == 107 || 13 || 109 || 106 || 111){
            // setTimeout(function(){
            //             document.getElementById('mosavi').style.backgroundColor = "rgb(1, 12, 61)"
            //             document.getElementById('zarb').style.backgroundColor = "rgb(1, 12, 61)"
            //             document.getElementById('sum').style.backgroundColor = "rgb(1, 12, 61)"
            //             document.getElementById('menha').style.backgroundColor = "rgb(1, 12, 61)"
            //             document.getElementById('th').style.backgroundColor = "rgb(1, 12, 61)"
            //             },200)  }
            // if(key == 49||97||50||98||51||99||52||100||53||101||54||102||55||103||56||104||57||105||48||96||190||110){
            //     var cl = document.getElementsByClassName('adad');
            //     setTimeout(function(){
            //             for(p in cl){
            //                 cl[p].style.backgroundColor = "rgb(104, 195, 236)";
            //             }
            //             },200)
            //         }
            // }