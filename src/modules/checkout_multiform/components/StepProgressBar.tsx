import { ReactNode } from "react";
import { useCheckoutMultiStep } from "@/stores/checkoutMultiStepStore.ts";

export const StepProgressBar = (): ReactNode => {
  const step = useCheckoutMultiStep((state) => state.step);
  return (
    <div className="flex justify-center items-center space-x-4">
      <div
        className={`w-4 h-4 rounded-full ${step >= 1 ? "bg-green-500" : "bg-gray-300"}`}
      ></div>
      <div
        className={`w-4 h-4 rounded-full ${step >= 2 ? "bg-green-500" : "bg-gray-300"}`}
      ></div>
      <div
        className={`w-4 h-4 rounded-full ${step >= 3 ? "bg-green-500" : "bg-gray-300"}`}
      ></div>
    </div>
  );
};
