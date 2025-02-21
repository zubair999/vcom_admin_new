import { type FileWithPath } from "@mantine/dropzone";
import React from "react";
import { Image } from "@mantine/core";
import { Category } from "@/types";
import { type FieldErrors } from "react-hook-form";

interface ChildProps {
  files: FileWithPath[];
  isImageLoading: boolean;
  errors?: FieldErrors<Category>;
}

export const MediaPreview: React.FC<ChildProps> = ({
  files,
  isImageLoading,
  errors,
}) => {
  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    if (index == 0) {
      return (
        <div key={file.name} className="col-span-2 row-span-2 relative">
          <div className={`relative`}>
            <Image
              alt={file.name}
              className={`w-full rounded border border-gray1-900 ${
                isImageLoading
                  ? "opacity-10"
                  : errors?.image
                  ? "opacity-10"
                  : ""
              }`}
              src={imageUrl}
              onLoad={() => URL.revokeObjectURL(imageUrl)}
            />
            <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-sm">
              {isImageLoading ? <div>Loading</div> : ""}
              {errors?.image && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  width={30}
                  height={30}
                  fill="red"
                  viewBox="0 0 52 52"
                >
                  <path d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z" />
                  <path d="M35.707 16.293a.999.999 0 0 0-1.414 0L26 24.586l-8.293-8.293a.999.999 0 1 0-1.414 1.414L24.586 26l-8.293 8.293a.999.999 0 1 0 1.414 1.414L26 27.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L27.414 26l8.293-8.293a.999.999 0 0 0 0-1.414z" />
                </svg>
              )}
            </span>
          </div>
        </div>
      );
    }
    return (
      <div key={file.name} className="relative">
        <div className={`absolute`}>
          <Image
            alt={file.name}
            className={`w-full rounded border border-gray1-900 ${
              isImageLoading ? "opacity-10" : errors?.image ? "opacity-10" : ""
            }`}
            src={imageUrl}
            onLoad={() => URL.revokeObjectURL(imageUrl)}
          />
          <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-sm">
            {isImageLoading ? <div>Loading</div> : ""}
            {errors?.image && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width={30}
                height={30}
                fill="red"
                viewBox="0 0 52 52"
              >
                <path d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z" />
                <path d="M35.707 16.293a.999.999 0 0 0-1.414 0L26 24.586l-8.293-8.293a.999.999 0 1 0-1.414 1.414L24.586 26l-8.293 8.293a.999.999 0 1 0 1.414 1.414L26 27.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L27.414 26l8.293-8.293a.999.999 0 0 0 0-1.414z" />
              </svg>
            )}
          </span>
        </div>
      </div>
    );
  });

  return <>{previews}</>;
};
