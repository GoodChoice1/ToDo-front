import http from "@/netClient/config";

export async function register(login, password, email, name) {
  try {
    const responce = await http.post("/auth/register", {
      login,
      password,
      email,
      name,
    });
    return responce.data;
  } catch (error) {
    console.log({ error });
    throw error;
  }
}

export async function login(login, password) {
  try {
    const responce = await http.post("/auth/login", {
      login,
      password,
    });
    const { accessToken } = responce.data;
    localStorage.accessToken = accessToken;
    return responce.data;
  } catch (error) {
    console.log({ error });
    throw error;
  }
}
