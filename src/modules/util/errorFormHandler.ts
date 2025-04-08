//eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FieldsError<T extends Record<string, any>> = [
  keyof T,
  { message: string; type?: string },
];

export const getErrorMessage = (error: unknown): string => {
  // if axios error
  if (error && typeof error === "object" && "response" in error) {
    const axiosError = error as { response?: { data?: { error?: string } } };
    return axiosError.response?.data?.error || "Server error";
  }

  // if Error
  if (error instanceof Error) {
    return error.message;
  }

  return "Unknown error";
};

// Pattern
let errorPatterns: Record<string, string> = {
  password: "password",
  userName: "name",
  email: "email",
};

export const updateErrorPatterns = (newPatterns: Record<string, string>) => {
  errorPatterns = { ...errorPatterns, ...newPatterns };
};

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatErrorMessage = (error: unknown): FieldsError<any> => {
  const message = getErrorMessage(error);

  const matchedField = Object.entries(errorPatterns).find(([, pattern]) =>
    message.toLowerCase().includes(pattern),
  );

  if (matchedField) {
    const [field] = matchedField;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return [field as keyof any, { message }];
  }

  return ["root", { type: "400", message }];
};
