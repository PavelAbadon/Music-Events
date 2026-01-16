const baseUrl = "http://localhost:3030/users";

export async function login(email, password) {
  const response = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  const data = await response.json();
  localStorage.setItem("user", JSON.stringify(data)); 
  return data;
}
