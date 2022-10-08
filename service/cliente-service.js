export const clientList = () => {
	return fetch(`http://localhost:3000/profile`).then((response) => {
		if (response.ok) {
			return response.json();
		}
		throw new Error("could not list clients");
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
		if (response.ok) {
			return response.body;
		}
		throw new Error("could not create a new client");
	});
};

const deletClient = (id) => {
	return fetch(`http://localhost:3000/profile/${id}`, {
		method: "DELETE",
	}).then((response) => {
		if (!response.ok) {
			throw new Error("could not delete client");
		}
	});
};

const clientDetails = (id) => {
	return fetch(`http://localhost:3000/profile/${id}`).then((response) => {
		if (response.ok) {
			return response.json();
		}
		throw new Error("could not detail client");
	});
};

const updateClient = (id, name, email) => {
	return fetch(`http://localhost:3000/profile/${id}`, {
		method: "PUT",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify({
			nome: name,
			email: email,
		}),
	}).then((response) => {
		if (response.ok) {
			return response.json;
		}
		throw new Error("could not update client");
	});
};

export const clientService = {
	clientList,
	newClient,
	deletClient,
	clientDetails,
	updateClient,
};
