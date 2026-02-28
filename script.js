const txtDigitado = document.querySelector('#textoTarefa');
const txtDaTarefa = document.querySelectorAll('.texto');

const btAdd = document.getElementById('Add');

const guard = document.querySelector(".guard");



let guardInString = localStorage.getItem("escorpo") || "";
console.log(guardInString);



guard.innerHTML = guardInString.replaceAll("ª", "");

let editClass, AddClass;
let locationAdd = [1, 2, 3, 4, 5]; 

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


const tarefa = document.querySelectorAll('.tarefa');

const btsEdit = document.querySelectorAll(".edit");

const IndexP = document.querySelectorAll('.tarefa p');


btsEdit.forEach((all, i) => all.addEventListener("click", function() {
    alert ('botão ' + i);

    

    

    if (btsEdit[i].textContent.includes('salvar')) {
        // locationAdd[i]++;

        tarefa[i].style.borderColor = '';
        all.textContent = 'Editar';
        IndexP[i].textContent = txtDigitado.value;
        
        
        let tryArr = guardInString.split("ª");
        let cont = tarefa[i];
        console.log(cont.outerHTML);
        tryArr[i] = cont.outerHTML;
        
        guardInString = tryArr.join("ª");
        localStorage.setItem("escorpo", guardInString);

        

        // alert ("Verdadeiro");
    } else {
        tarefa.forEach((all, index) => {
            all.style.borderColor = '';
            btsEdit[index].textContent = 'Editar';

        });
        tarefa[i].style.borderColor = 'aqua';
        all.textContent = 'salvar';
        // alert ("Falso");
    }

    

    


    // const returnString = isArr.join("ª");
    // guardInString = returnString;
    // localStorage.setItem("escorpo", guardInString);
    

}));