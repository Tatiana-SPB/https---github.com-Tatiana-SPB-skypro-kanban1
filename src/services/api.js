import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/kanban";

export async function fetchTasks({ token }) {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

//Функция добавления нового слова:

export async function apiAddTask({ token, task }) {
  try {
    const response = await axios.post(API_URL, task, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "text/plain",
      },
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

//Функция получения конкретного слова:

export async function fetchTask({ token, id }) {
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

//Функция изменения слова:

export async function editTask({ token, id, task }) {
  try {
    const response = await axios.put(`${API_URL}/${id}`, task, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "text/plain",
      },
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

//Функция удаления слова:

export async function remove({ token, id }) {
  try {
    await axios.delete(`${API_URL}/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {
    throw Error(error.message);
  }
}
