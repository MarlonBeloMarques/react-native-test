import axios from "axios";

const get = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch ({ response }) {
    return {
      status: response.status,
      error: response.data,
    };
  }
}

const httpRequest = {
  get,
};

export default httpRequest;
