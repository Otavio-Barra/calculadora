function insert(num) {
  let number = document.getElementById('resultado').innerHTML;
 document.getElementById('resultado').innerHTML = number + num;
}

function clean() {
 document.getElementById('resultado').innerHTML = "";
}

function deleted() {
  let  resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calculate(){
    let calculate = document.getElementById('resultado').innerHTML
    if (calculate){
        document.getElementById('resultado').innerHTML = eval(calculate);
    }
}