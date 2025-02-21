"use client"
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { type FileWithPath } from "@mantine/dropzone";
import { Product, Image } from "@/types";
// import { usePutImageMutation } from "@services/s3/get-presigned-url";

interface SavedFiles {
  status: string;
  message: string;
  data: string[];
  thumbnail: string[];
}

interface ChildProps {
  onChange: (images: Image[]) => void;
  defaultValue: Image[] | string | Image
}

export const useMediaUpload = ({ onChange, defaultValue }: ChildProps) => {
  let imagesArray: string[] = [];

  if (Array.isArray(defaultValue)) {
    imagesArray = defaultValue.map((image) => image.src);
  }

 
  const [files, setFiles] = useState<FileWithPath[]>([]);
  const [savedFiles, setSavedFiles] = useState<SavedFiles["thumbnail"]>([]);
  const [fileRejectionMessage, setFileRejectionMessage] = useState<string>("");
  const [isDeletingImages, setIsDeletingImages] = useState<boolean>(false);

  // const { mutateAsync: addImages, isPending: isImageLoading } =
  //   usePutImageMutation();

  // const watchImages = watch("images");

  // useEffect(() => {
  //   setSavedFiles(imagesArray);
  // }, [watchImages]);

  const createGalleryImages = (filenames: string[]): Image[] => {
    return filenames.map((filename) => ({
      src: `${filename}`,
      alt: `${filename}`,
      height: 0,
      width: 0,
    }));
  };

  const dropZoneHandler = async (files: File[]) => {
    try {
      if (files.length == 0) {
        setFileRejectionMessage("Files are not selected. try again");
        return;
      }
      // setFiles(files);
      // const formData = new FormData();
      // files.forEach((file, index) => {
      //   formData.append(`file`, file, file.name);
      // });
      // const uploadedMedia = await addImages(formData);

      // if (uploadedMedia?.status == "fail" && uploadedMedia?.media?.length > 0) {
      //   setFileRejectionMessage("");
      //   setError("images", {
      //     type: "custom",
      //     message: "Files are not saved, but the product can still be saved.",
      //   });
      //   return;
      // }
      // if (
      //   uploadedMedia?.status == "success" &&
      //   uploadedMedia?.media?.length > 0
      // ) {
      //   setSavedFiles(uploadedMedia?.media);
      //   const uploadedMediaFiles = uploadedMedia?.media;
      //   const images = createGalleryImages(uploadedMediaFiles) ?? [];

      //   if (uploadedMedia?.media?.length > 1) {
      //     onChange(images);
      //     setFiles([]);
      //   } else {
      //   }
      // }
    } catch (error) {
      setFileRejectionMessage("Error while uploading images");
    }
  };

  const deleteImage = async (index: number) => {
    setIsDeletingImages(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    const newSavedFiles = [...savedFiles];
    newSavedFiles.splice(index, 1);
    setSavedFiles(newSavedFiles);
    if (newSavedFiles.length == 0) {
      onChange([]);
      setFiles([]);
    } else {
      const images = createGalleryImages(newSavedFiles) ?? [];
      onChange(images);
    }
    setIsDeletingImages(false);
  };

  const deleteImages = async () => {
    setIsDeletingImages(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSavedFiles([]);
    onChange([]);
    setFiles([]);
    setIsDeletingImages(false);
  };

  return {
    setFileRejectionMessage,
    dropZoneHandler,
    setSavedFiles,
    deleteImage,
    deleteImages,
    setIsDeletingImages,
    createGalleryImages,
    isDeletingImages,
    savedFiles,
    files,
    isImageLoading: false,
    fileRejectionMessage,
  };
};