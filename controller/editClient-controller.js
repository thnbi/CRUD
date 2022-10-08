import { clientService } from "../service/cliente-service.js";

(async () => {
	const getURL = new URL(window.location);

	const id = getURL.searchParams.get("id");

	const inputName = document.querySelector("[data-nome]");
	const inputEmail = document.querySelector("[data-email]");

	const data = await clientService.clientDetails(id);
	inputName.value = data.nome;
	inputEmail.value = data.email;
   
	const form = document.querySelector("[data-form]");

	form.addEventListener("submit", async (event) => {
		event.preventDefault();

		await clientService.updateClient(id, inputName.value, inputEmail.value);
		window.location.href = "../telas/edicao_concluida.html";
	});
})();
