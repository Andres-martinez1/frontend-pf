import axios from "axios";
import { User } from "../models/user"; 

export interface AuthLoginPayload {
  email: string;
  password: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface ResetPasswordPayload {
  email: string;
  codigo: string;
  nuevaPassword: string;
}

const apiClient = axios.create({
  baseURL: "http://localhost:3000/auth", 
  withCredentials: true, 
});


export const loginApi = async (data: AuthLoginPayload): Promise<{ user: User }> => {
  const response = await apiClient.post("/login", data);
  return response.data;
};


export const logoutApi = async () => {
  const response = await apiClient.post("/logout");
  return response.data;
};


export const checkAuthStatusApi = async (): Promise<{ user: User }> => {
  const response = await apiClient.get("/me"); 
  return response.data;
};


export const requestPasswordResetApi = async (data: ForgotPasswordPayload) => {
  const response = await apiClient.post("/recuperar-password", data);
  return response.data;
};


export const resetPasswordApi = async (data: ResetPasswordPayload) => {
  const response = await apiClient.post("/restablecer-password", data);
  return response.data;
};