import { useEditUserApi } from "@/modules/editUserInfo/api/useEditUserApi.ts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, TEditUser } from "@/modules/editUserInfo/validation.ts";
import useUserStore from "@/stores/userStore.ts";
import { toast } from "sonner";
import { useEffect } from "react";

export const useEditUser = () => {
  const { currentUser, setCurrentUser } = useUserStore();
  const { editedUser, editUserAction, errorEditingUserInfo, updateInProgress } =
    useEditUserApi();

  const form = useForm<TEditUser>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: currentUser?.email,
      userName: currentUser?.userName,
    },
  });

  const onSubmit = (values: TEditUser): void => {
    if (currentUser?.id) {
      const updateUserData = {
        id: currentUser.id,
        email: values.email,
        userName: values.userName,
        gender: currentUser.gender,
      };

      editUserAction(updateUserData);
      return;
    }
    toast.error("You are not logged in", {
      description: "You can't update this user",
    });
  };

  useEffect(() => {
    if (editedUser) {
      setCurrentUser(editedUser);
    }
  }, [editedUser, setCurrentUser]);

  return {
    editUserAction,
    errorEditingUserInfo,
    editedUser,
    updateInProgress,
    form,
    onSubmit,
  };
};
