import { zodResolver } from "@hookform/resolvers/zod";
import {
  formSchema,
  TRegisterFormValues,
} from "@/modules/register/validation.ts";
import { useForm } from "react-hook-form";
import { useRegistrationApi } from "@/modules/register/api/useRegistrationApi.ts";
import { useEffect } from "react";
import { useNavigate } from "react-router";

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
    if (newUserCreated?.id) {
      navigate("/profile");
    }
  }, [newUserCreated]);

  function onSubmit(values: TRegisterFormValues) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
