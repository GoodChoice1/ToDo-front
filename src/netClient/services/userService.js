import http from "@/netClient/config";

export async function logout() {
  try {
    const responce = await http.post(
      "/user/logout",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          token: localStorage.accessToken,
        },
      }
    );
    localStorage.removeItem("accessToken");
    return responce.data;
  } catch (error) {
    console.log({ error });
    throw error;
  }
}

export async function getUser() {
  try {
    const responce = await http.get("/user/me", {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.accessToken,
      },
    });
    return responce.data;
  } catch (error) {
    console.log({ error });
    throw error;
  }
}

export async function updateUser(login, email, name) {
  try {
    const responce = await http.patch(
      "/user/me",
      {
        login,
        email,
        name,
      },
      {
        headers: {
          "Content-Type": "application/json",
          token: localStorage.accessToken,
        },
      }
    );
    return responce.data;
  } catch (error) {
    console.log({ error });
    throw error;
  }
}

export async function updateUserPass(oldPassword, newPassword) {
  try {
    const responce = await http.patch(
      "/user/password",
      {
        oldPassword,
        newPassword,
      },
      {
        headers: {
          "Content-Type": "application/json",
          token: localStorage.accessToken,
        },
      }
    );
    return responce.data;
  } catch (error) {
    console.log({ error });
    throw error;
  }
}
