import { clientService } from "../service/cliente-service.js";

const getURL = new URL(window.location);

const id = getURL.searchParams.get("id");

const inputName = document.querySelector("[data-nome]");
const inputEmail = document.querySelector("[data-email]");

clientService.clientDetails(id).then((data) => {
	inputName.value = data.nome;
	inputEmail.value = data.email;
});

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	clientService
		.updateClient(id, inputName.value, inputEmail.value)
		.then(() => {
         console.log(inputName.value, inputEmail.value);
			window.location.href = "../telas/edicao_concluida.html";
		});
});
