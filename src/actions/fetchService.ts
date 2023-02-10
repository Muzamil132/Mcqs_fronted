import axios from "axios";

const baseUrl = "http://localhost:4000";

export const fetchWrapper = async (
  url: string,
  method?: string,
  payload?: any,
  token?: string
) => {
  try {
    const response = await axios({
      url: `${baseUrl}/${url}`,
      method: method,
      data: payload,

      headers: {
        "Content-Type": "application/json",
      },
    });

    return {
      user: response.data,
      error: null,
      status: "idle",
    };
  } catch (err: any) {
    console.log(err.response.data);
    return {
      user: null,
      error: err.response.data,
      status: "idle",
    };
  }
};
