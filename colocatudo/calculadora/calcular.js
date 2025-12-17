


function calculu() {
    var p = window.document.getElementById("peso")
    var al= window.document.getElementById("altura")
    var pe = Number (p.value)
    var alt=Number(al.value)
    
    var resp=window.document.getElementById ("resp")
     var resp2=window.document.getElementById ("resp2")
  var resposta= window.document.getElementsByClassName ("resposta") 
    var imc = pe/(alt*alt)

    resp2.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`

     if(imc < 18.5){
         resp.innerHTML= "Você esta abaixo do peso"     
        
        

     }else if (imc==18.5 || imc == 24.9) {
      resp.innerHTML="Seu peso esta normal"
      
    
    
     }else if (imc > 25 && imc== 29.9) {
         resp.innerHTML= "Você Esta com SOBREPESO"
     }else {
         resp.innerHTML="Proucre um medico, Você esta OBESO"

     }

 }