import { clientService } from "../service/cliente-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", async (obj) => {
	obj.preventDefault();
	try {
		const nome = obj.target.querySelector("[data-nome]").value;
		const email = obj.target.querySelector("[data-email]").value;

		await clientService.newClient(nome, email);
		const cadastro_concluido = () => {
			window.location.href = "../telas/cadastro_concluido.html";
		};
	} catch (err) {
		console.error(err);
		window.location.href = "../telas/erro.html";
	}
});
