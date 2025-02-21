"use client";

import React from "react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { SortableListComponent } from "@/components";
import { MediaPreview } from "@/components";
import { Image as ImageType } from "@/types";
import { useMediaUpload } from "@/components/media-uploader/useMediaUpload";

interface ChildProps {
  name: string;
  placeholder: string;
  defaultValue: ImageType | ImageType[] | string;
  onChange: () => void;
  maxFiles?: number;
  maxSize?: number;
}

export const MediaUpload: React.FC<ChildProps> = ({
  name,
  onChange,
  placeholder,
  defaultValue,
  maxFiles,
  maxSize,
}) => {
  const {
    dropZoneHandler,
    setFileRejectionMessage,
    deleteImage,
    deleteImages,
    setSavedFiles,
    createGalleryImages,
    isDeletingImages,
    savedFiles,
    isImageLoading,
    fileRejectionMessage,
    files,
  } = useMediaUpload({ onChange, defaultValue });

  return (
    <>
      <div className="rounded-lg relative flex flex-col gap-1 h-[150px] justify-center text-center w-full bg-[#fdfdfd] dark:bg-boxdark border border-dashed">
        {files.length == 0 && savedFiles.length == 0 ? (
          <>
            <Dropzone
              onDrop={(files) => dropZoneHandler(files)}
              onReject={(files) => {
                setFileRejectionMessage(
                  "Max 9 files can be uploaded at one time."
                );
              }}
              accept={IMAGE_MIME_TYPE}
              maxSize={5 * 1024 ** 2}
              maxFiles={9}
            >
              Upload new files
              <label className="mb-3 mt-2 block text-xs font-medium  text-gray1-900 dark:text-gray1-900">
                or drop here images to upload
              </label>
            </Dropzone>
          </>
        ) : savedFiles.length > 0 ? (
          <div>
            <SortableListComponent
              items={savedFiles}
              setItems={setSavedFiles}
              deleteImage={deleteImage}
              createGalleryImages={createGalleryImages}
              onChange={onChange}
            />
          </div>
        ) : (
          <div className="grid grid-cols-6 2xl:grid-cols-10 grid-rows-2 lg:gap-4 p-5 lg:p-5">
            <MediaPreview
              files={files}
              isImageLoading={isImageLoading}
              errors={{}}
            />
          </div>
        )}
      </div>
      {fileRejectionMessage && (
        <p className="text-red text-xs font-semibold italic mt-1">
          {fileRejectionMessage}
        </p>
      )}
    </>
  );
};
