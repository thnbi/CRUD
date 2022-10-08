import { clientService } from "../service/cliente-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (obj) => {
	obj.preventDefault();
	const nome = obj.target.querySelector("[data-nome]").value;
	const email = obj.target.querySelector("[data-email]").value;

	clientService.newClient(nome, email).then(() => {
		window.location.href = "../telas/cadastro_concluido.html";
	});
});
