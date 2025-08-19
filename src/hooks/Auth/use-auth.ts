import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { loginApi } from "../../services/auth.service";
import { AuthLogin, LoginResponse } from "../../models/auth";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const useLogin = (
  request: AuthLogin | null
): UseQueryResult<LoginResponse, Error> => {
  return useQuery<LoginResponse, Error>({
    queryKey: ["login", request],
    queryFn: () => loginApi(request!),
    enabled: !!request,
    retry: 0,
  });
};
