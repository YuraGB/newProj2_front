import { zodResolver } from "@hookform/resolvers/zod";
import {
  formSchema,
  TRegisterFormValues,
} from "@/modules/register/validation.ts";
import { useForm } from "react-hook-form";
import { useRegistrationApi } from "@/modules/register/api/useRegistrationApi.ts";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import {
  FieldsError,
  formatErrorMessage,
} from "@/modules/util/errorFormHandler.ts";

const defaultValues = {
  email: "",
  password: "",
  userName: "",
};

export const useRegister = () => {
  const navigate = useNavigate();
  const form = useForm<TRegisterFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { isLoading, newUserCreated, createNewUser, errorCreateNewUser } =
    useRegistrationApi();

  useEffect(() => {
    if (newUserCreated?.user?.id) {
      navigate("/profile");
    }
  }, [newUserCreated, navigate]);

  useEffect(() => {
    if (errorCreateNewUser) {
      const [name, opts] = formatErrorMessage(
        errorCreateNewUser,
      ) as FieldsError<typeof defaultValues>;
      form.setError(name, opts);
    }
  }, [errorCreateNewUser, form]);

  function onSubmit(values: TRegisterFormValues) {
    createNewUser(values);
  }

  return {
    form,
    onSubmit,
    isLoading,
    errorCreateNewUser,
    newUserCreated,
  };
};
