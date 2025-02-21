"use client";

import React from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";
import Image from "next/image";
import { Trash2Icon } from "lucide-react";
import { Image as ImageType } from "@/types";

interface SavedFiles {
  status: string;
  message: string;
  data: string[];
  thumbnail: string[];
}

interface ChildProps {
  items: SavedFiles["thumbnail"];
  setItems: React.Dispatch<React.SetStateAction<SavedFiles["thumbnail"]>>;
  deleteImage: (index: number) => void;
  createGalleryImages: (filenames: string[]) => ImageType[];
  onChange: (images: ImageType[]) => void;
}

const s3_url = `https://heega.s3.ap-south-1.amazonaws.com`;

export const SortableListComponent: React.FC<ChildProps> = ({
  items,
  setItems,
  deleteImage,
  createGalleryImages,
  onChange,
}) => {
  const onSortEnd = (oldIndex: number, newIndex: number) => {
    const reOrderItem = arrayMove(items, oldIndex, newIndex);
    const reOrderGalleryImages = createGalleryImages(reOrderItem);
    onChange(reOrderGalleryImages);
    setItems((array) => arrayMove(array, oldIndex, newIndex));
  };

  return (
    <SortableList
      className="grid grid-cols-6 2xl:grid-cols-10 grid-rows-2  lg:gap-4 p-5 lg:p-5"
      onSortEnd={onSortEnd}
    >
      {items?.map((item, index) => {
        const product_img_url = `${process.env.NEXT_PUBLIC_MEDIA_URL}/${item}`;
        const itemKey = `${item}-${index}`;

        if (index == 0) {
          return (
            <SortableItem key={itemKey}>
              <div className="relative p-1 border border-stroke rounded-lg col-span-2 row-span-2">
                <Image
                  alt={item}
                  src={product_img_url}
                  width={170}
                  height={170}
                  aria-orientation="horizontal"
                  className="rounded-lg"
                />
                <div
                  className="absolute top-1 right-1 rounded-full p-1 bg-gray1-500 cursor-pointer opacity-1 group-hover:opacity-100 transition-opacity shadow-md"
                  onClick={() => deleteImage(index)}
                >
                  <Trash2Icon color="red" size={16} />
                </div>
              </div>
            </SortableItem>
          );
        }

        return (
          <SortableItem key={itemKey}>
            <div className="relative p-1 border border-stroke rounded-lg">
              <Image
                alt={item}
                src={product_img_url}
                width={150}
                height={150}
                aria-orientation="horizontal"
                className="rounded-lg"
              />
              <div
                className="absolute top-1 right-1 rounded-full p-1 bg-gray1-500 cursor-pointer opacity-1 group-hover:opacity-100 transition-opacity shadow-md"
                onClick={() => deleteImage(index)}
              >
                <Trash2Icon color="red" size={16} />
              </div>
            </div>
          </SortableItem>
        );
      })}
    </SortableList>
  );
};
