import React from "react";
import { type ControllerFieldState } from "react-hook-form";

interface Props {
  fieldState: ControllerFieldState;
}

export const ErrorMessage: React.FC<Props> = ({ fieldState }) => {
  if (!fieldState.error) return null;
  return (
    <>
      {fieldState.error && (
        <p className="text-red-500 text-xs font-semibold italic mt-1">
          {fieldState.error.message}
        </p>
      )}
    </>
  );
};
