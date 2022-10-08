export const clientList = () => {
	return fetch(`http://localhost:3000/profile`).then((response) => {
		return response.json();
	});
};

export const clientService = {
	clientList
}