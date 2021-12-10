import http from "@/netClient/config";

export async function getTodoList() {
  try {
    const responce = await http.get("/todos/", );
    return responce.data?.todoList || [];
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
        isDone: data,
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
        isFavourite: data,
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
    if (localStorage?.todoId) {
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

export async function deleteTodoById(id) {
  try {
    const responce = await http.delete("/todos/" + id, {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.accessToken,
      },
    });
    localStorage.removeItem("todoId");
    return responce.data;
  } catch (error) {
    console.log({ error });
  }
}

export async function changeTodo(
  id,
  title,
  description,
  priority,
  isDone,
  isFavourite
) {
  try {
    const responce = await http.patch(
      "/todos/" + id,
      {
        title,
        description,
        priority,
        isDone,
        isFavourite,
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
