export const clientList = () => {
	return fetch(`http://localhost:3000/profile`).then((response) => {
		return response.json();
	});
};

const newClient = (nome, email) => {
	return fetch(`http://localhost:3000/profile`, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify({
			nome: nome,
			email: email,
		}),
	}).then((response) => {
		return response.body;
	});
};

const deletClient = (id) => {
	return fetch(`http://localhost:3000/profile/${id}`, {
		method: "DELETE",
	});
};

export const clientService = {
	clientList,
	newClient,
	deletClient,
};
