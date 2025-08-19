import axios from "axios";

export interface AuthLogin {
  email: string;
  password: string;
}

export const loginApi = async (data: AuthLogin) => {
  const response = await axios.post("z", data, {
    withCredentials: true, 
  });
  return response.data;
};
