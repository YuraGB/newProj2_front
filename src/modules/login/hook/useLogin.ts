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
import useUserStore from "@/stores/userStore.ts";

const defaultValues = {
  email: "",
  password: "",
};

export const useLogin = () => {
  const { loginHandler, errorLogin, isLoading } = useLoginApi();
  const currentUser = useUserStore((state) => state.currentUser);
  const navigate = useNavigate();

  const form = useForm<TLoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(values: TLoginFormValues) {
    loginHandler(values);
  }

  useEffect(() => {
    if (currentUser) {
      navigate("/profile");
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    if (errorLogin) {
      const [name, opts] = formatErrorMessage(errorLogin) as FieldsError<
        typeof defaultValues
      >;
      form.setError(name, opts);
    }
  }, [errorLogin, form]);

  return {
    form,
    onSubmit,
    errorLogin,
    isLoading,
  };
};
