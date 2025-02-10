export type TNewUser = {
  email: string;
  password: string;
  userName: string;
};

export type TUser = Omit<TNewUser, "password"> & { id: number };
