const txtDigitado = document.querySelector('#textoTarefa');
const txtDaTarefa = document.querySelectorAll('.texto');

const btAdd = document.getElementById('Add');

const guard = document.querySelector(".guard");



let guardInString = localStorage.getItem("escorpo") || "";
console.log(guardInString);



guard.innerHTML = guardInString.replaceAll("ª", "");

let editClass, AddClass;

function addicted() {
    const estrutura = `<div class="tarefa">
            <p class="texto">${txtDigitado.value}</p>
            <button class="edit">Editar</button>
            <button class="excluir">Excluir</button>
            <button>Concluir</button>
        </div>`;

    

    guardInString += estrutura + "ª";
    localStorage.setItem("escorpo", guardInString);

    location.reload();
    
}
btAdd.addEventListener('click', addicted);



document.querySelectorAll('.excluir').forEach((all, i) =>  {
    all.addEventListener('click', () => {
        const isArr = guardInString.split("ª");

        const rem = isArr.splice(i, 1);
        // console.log(isArr.join("ª"));

        localStorage.setItem("escorpo", isArr.join("ª"));
        
        

        location.reload();
    }); 
});





document.querySelectorAll(".edit").forEach((all, i) => all.addEventListener("click", function() {
    alert ('botão ' + i);

    guardInString.split("ª");
    guardInString[i] = guardInString[i].replace(`<div class="tarefa">`, `<div class="tarefa a">`);
    // guardInString.join("ª");
    
    

}));