import { ReactNode } from "react";

export const PageTitle = ({ title }: { title: string }): ReactNode => {
  return (
    <div className="text-3xl font-bold text-gray-800 my-5 first-letter:uppercase">
      <h2>{title}</h2>
    </div>
  );
};
