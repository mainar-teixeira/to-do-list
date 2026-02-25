const nums = [`<div class="tarefa">
            <p class="texto">A</p>
            <button class="edit">Editar</button>
            <button class="excluir">Excluir</button>
            <button>Concluir</button>
        </div>`,`<div class="tarefa">
            <p class="texto">B</p>
            <button class="edit">Editar</button>
            <button class="excluir">Excluir</button>
            <button>Concluir</button>
        </div>`,`<div class="tarefa">
            <p class="texto">C/p>
            <button class="edit">Editar</button>
            <button class="excluir">Excluir</button>
            <button>Concluir</button>
        </div>`];

const rem3 = nums.splice(1, 1);
console.log(nums);