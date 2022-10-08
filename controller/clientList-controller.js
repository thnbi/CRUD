import { clientService } from "../service/cliente-service.js";

const createNewLine = (nome, email, id) => {
	const newClientLine = document.createElement("tr");
	const content = `<td class="td" data-td>${nome}</td>
   <td>${email}</td>
   <td>
      <ul class="tabela__botoes-controle">
         <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
         <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
      </ul>
   </td> 
   `;
	newClientLine.innerHTML = content;

	newClientLine.dataset.id = id;
	return newClientLine;
};
const table = document.querySelector("[data-tabela]");

table.addEventListener("click", async (event) => {
	let deletButton =
		event.target.className === "botao-simples botao-simples--excluir";
	if (deletButton) {
		try {
			const clientLine = event.target.closest("[data-id]");
			let id = clientLine.dataset.id;
			await clientService.deletClient(id);
			clientLine.remove();
		} catch (err) {
			console.error(err);
			window.location.href = "../telas/erro.html";
		}
	}
});

const render = async () => {
	try {
		const clientList = await clientService.clientList();

		clientList.forEach((element) => {
			table.appendChild(
				createNewLine(element.nome, element.email, element.id)
			);
		});
	} catch (err) {
		console.error(err);
		window.location.href = "../telas/erro.html";
	}
};

render();
