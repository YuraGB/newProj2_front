import axios from "axios";

// type FieldName = "password" | "userName" | "email";

export type FieldsError<T extends Record<string, any>> = [
  keyof T,
  { message: string; type?: string },
];

export const getErrorMessage = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.error || "Server error";
  }
  return error instanceof Error ? error.message : "Unknown error";
};

export const formatErrorMessage = (error: unknown) => {
  const message: string = getErrorMessage(error);
  if (message.includes("password")) {
    return ["password", { message }];
  }

  if (message.includes("name")) {
    return ["userName", { message }];
  }

  if (message.includes("email")) {
    return ["email", { message }];
  }

  return ["root", { type: "400", message }];
};
