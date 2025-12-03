function digital(){
    var relogio = document.getElementById('relogio')
    var data= new Date ()
    var hora= data.getHours()
    var minuto = data.getMinutes()
    var segundo= data.getSeconds()
    var rel= document.getElementById("rel")
    hora = hora < 10 ? '0' + hora : hora;
    minuto = minuto < 10 ? '0' + minuto : minuto;
    segundo = segundo < 10 ? '0' + segundo : segundo;
    rel.innerHTML= `${hora
}: ${minuto} : ${segundo}`
    relogio.style.fontSize = '2em'
    relogio.style.textAlign='center'
    
    
    
}