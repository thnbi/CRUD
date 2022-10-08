import { clientService } from "../service/cliente-service.js";

const createNewLine = (nome, email) => {
	const newClientLine = document.createElement("tr");
	const content = `<td class="td" data-td>${nome}</td>
   <td>${email}</td>
   <td>
      <ul class="tabela__botoes-controle">
         <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
         <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
      </ul>
   </td> 
   `;
	newClientLine.innerHTML = content;
	return newClientLine;
};
const table = document.querySelector("[data-tabela]");
clientService.clientList().then((data) => {
	data.forEach((element) => {
		table.appendChild(createNewLine(element.nome, element.email));
	});
});
