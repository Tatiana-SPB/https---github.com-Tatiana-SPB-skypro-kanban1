import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/words/";

export async function fetchWords({ token }) {
  try {
    const data = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

//Функция добавления нового слова:

export async function postWord({ token, word }) {
  try {
    const data = await axios.post(API_URL, word, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "text/html",
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

//Функция получения конкретного слова:

export async function fetchWord({ token, id }) {
  try {
    const data = await axios.get(API_URL + id, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

//Функция изменения слова:

export async function editWord({ token, id, word }) {
  try {
    const data = await axios.patch(API_URL + id, word, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "text/html",
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

//Функция удаления слова:

export async function deleteWord({ token, id }) {
  try {
    const data = await axios.delete(API_URL, id, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "text",
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

