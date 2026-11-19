const times = [
    {
        time:"Botafogo",
        serie:"série A"
    },
    {
        time:"Corinthians",
        serie:"série B"
    },
    {
        time:"Chapecoence",
        serie:"série A"
    },
    {
        time:"SónoPeloFC",
        serie:"série B"
    },
]
const formulario=
document.getElementById("formtime")
const campotime =
document.getElementById("time")
const camposerie =
document.getElementById("serie")
const corpotabela =
document.getElementById("corpotabela")

function exibir(){
    corpotabela.innerHTML="";
    for (let posicao = 0; posicao<times.length;posicao++){
        const time = times[posicao]

        corpotabela.innerHTML+=`
        <tr>
        <td>${posicao}</td>
        <td>${time.time}</td>
        <td>${time.serie}</td>
        </tr>
        
        `
    }
}
exibir();

formulario.addEventListener("submit",
    function(evento){
        evento.preventDefault();
        const time = {
            time: camposerie.Value,
            curso: campotime.value
        }
        times.push(time)
        exibir()

})
