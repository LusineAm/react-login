const USERS_API_URL = "https://dummyjson.com/users";

export const login = async (email, password) => {
	try {
		const response = await fetch(USERS_API_URL);
		const { users } = await response.json();
		const user = users.find((user) => user.email === email);

		if (!user) {
			throw new Error("User not found");
		}

		if (user.password !== password) {
			throw new Error("Invalid credentials");
		}

		return user;
	} catch (error) {
		console.error("Authentication error:", error.message);
		throw error;
	}
};
