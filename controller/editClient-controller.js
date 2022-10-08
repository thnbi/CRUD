import { clientService } from "../service/cliente-service.js";

(async () => {
	const getURL = new URL(window.location);

	const id = getURL.searchParams.get("id");

	const inputName = document.querySelector("[data-nome]");
	const inputEmail = document.querySelector("[data-email]");

	try {
		const data = await clientService.clientDetails(id);
		inputName.value = data.nome;
		inputEmail.value = data.email;
	} catch (err) {
		console.error(err);
		window.location.href = "../telas/erro.html";
	}

	const form = document.querySelector("[data-form]");

	form.addEventListener("submit", async (event) => {
		event.preventDefault();
		try {
			await clientService.updateClient(
				id,
				inputName.value,
				inputEmail.value
			);
			window.location.href = "../telas/edicao_concluida.html";
		} catch (err) {
			console.error(err);
			window.location.href = "../telas/erro.html";
		}
	});
})();
