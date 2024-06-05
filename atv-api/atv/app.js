function Converter(CEP) {
    fetch("https://cep.awesomeapi.com.br/json/" + CEP)
        .then((response) => response.json())

        .then((data) => alert(data.address + " - " + data.district + " - " + 

        data.city + " - " + data.state ))
        
        .then((error) => console.log(error))
}
 
document.getElementById("calcular").addEventListener("click",()=>{
    
    let CEP = document.getElementById("CEP").value
    Converter(CEP)
})