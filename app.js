
const Calculo = (props) =>{
    var Valor_Input = document.getElementById("valor-do-input").value;
    var Resultado = document.getElementById("Div-Resultado");
  
    if(Valor_Input != ""){
      if(props == 1  ){
        let Fahrenheit;
     
        Fahrenheit = (1.8 * Valor_Input + 32);
        Resultado.innerHTML = Fahrenheit;
      }
      else if(props == 2){  
        let Kelvin;
  
        Kelvin = Number(Valor_Input) + 273.15;
        Resultado.innerHTML = Kelvin;
      }
    }else{
        alert("Nenhum valor informado!");
    }
  }