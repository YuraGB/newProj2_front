import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, TLoginFormValues } from "../validation.ts";
import { useForm } from "react-hook-form";
import { useLoginApi } from "@/modules/login/api/useLoginApi.ts";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const defaultValues = {
  email: "",
  password: "",
};

export const useLogin = () => {
  const { loginHandler, errorLogin, isLoading, userLogged } = useLoginApi();
  const navigate = useNavigate();

  const form = useForm<TLoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(values: TLoginFormValues) {
    loginHandler(values);
  }

  useEffect(() => {
    if (userLogged?.id) {
      navigate("/profile");
    }
  }, [userLogged]);

  return {
    form,
    onSubmit,
    errorLogin,
    isLoading,
  };
};
