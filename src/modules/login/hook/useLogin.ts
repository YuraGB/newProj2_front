import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, TLoginFormValues } from "../validation.ts";
import { useForm } from "react-hook-form";
import { useLoginApi } from "@/modules/login/api/useLoginApi.ts";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import {
  FieldsError,
  formatErrorMessage,
} from "@/modules/util/errorFormHandler.ts";

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

  useEffect(() => {
    if (errorLogin) {
      const [name, opts] = formatErrorMessage(errorLogin) as FieldsError<
        typeof defaultValues
      >;
      form.setError(name, opts);
    }
  }, [errorLogin]);

  return {
    form,
    onSubmit,
    errorLogin,
    isLoading,
  };
};
