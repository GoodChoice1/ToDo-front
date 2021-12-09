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

export async function getTodoList() {
  try {
    const responce = await http.get("/todos/", {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.accessToken,
      },
    });
    return responce.data?.todoList || [];
  } catch (error) {
    console.log({ error });
    throw error;
  }
}

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

export async function createTodo(title, description, priority) {
  try {
    const responce = await http.post(
      "/todos/",
      {
        title,
        description,
        priority,
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

export async function changeTodoDone(todoId, data) {
  try {
    const responce = await http.patch(
      "/todos/" + todoId,
      {
        isDone: data
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

export async function changeTodoFav(todoId, data) {
  try {
    const responce = await http.patch(
      "/todos/" + todoId,
      {
        isFavourite: data
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

export async function deleteTodos() {
  try {
    const responce = await http.delete("/todos/", {
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

export async function getTodo() {
  try {
      if (localStorage?.todoId){
    const responce = await http.get("/todos/" + localStorage.todoId, {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.accessToken,
      },
    });
    return responce.data;
    }
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

export async function updateUser(login,email,name) {
    try {
      const responce = await http.patch("/user/me" , 
      {
        login,
        email,
        name
      },
      {
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

  export async function updateUserPass(oldPassword,newPassword) {
    try {
      const responce = await http.patch("/user/password" , 
      {
        oldPassword,
        newPassword
      },
      {
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

  export async function deleteTodoById(id){
    try {
      const responce = await http.delete("/todos/"+ id ,
      {
        headers: {
          "Content-Type": "application/json",
          token: localStorage.accessToken,
        },
      });
      localStorage.removeItem('todoId')
      return responce.data
    } catch (error) {
      console.log({error})
    }
  }

  export async function changeTodo(id,title,description,priority,isDone,isFavourite) {
    try {
      const responce = await http.patch(
        "/todos/" + id,
        {
          title,
          description,
          priority,
          isDone,
          isFavourite
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