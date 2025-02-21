"use client";
import * as React from "react";
import { Controller } from "react-hook-form";
import {
  Textarea,
  Label,
  Input,
  SingleSearchableSelectBox,
  ErrorMessage,
} from "@/components";
import { useCategoryForm } from "./useCategoryForm";
// import { MediaUpload } from "@/components/media-uploader";
import { MediaUpload } from "@/components/media-uploader";

export const CategoryForm: React.FC = () => {
  const { methods } = useCategoryForm();
  const { control } = methods;

  const options = [
    { label: "Hair", value: 1 },
    { label: "Skin", value: 2 },
    { label: "Health & Wellness", value: 3 },
    { label: "Yoga", value: 4 },
  ];

  return (
    <>
      {/* parent category */}
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="parent_slug">Parent category</Label>
        <Controller
          control={control}
          name="parent_id"
          render={({ field: { onChange, value }, fieldState }) => {
            return (
              <>
                <SingleSearchableSelectBox
                  onChange={onChange}
                  defaultValue={value}
                  placeholder="Select parent category"
                  options={options}
                />
                <ErrorMessage fieldState={fieldState} />
              </>
            );
          }}
        />
      </div>

      {/* category name */}
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="name">Category name</Label>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value }, fieldState }) => {
            return (
              <>
                <Input
                  type="text"
                  defaultValue={value}
                  onChange={onChange}
                  placeholder="Enter category name"
                />
                <ErrorMessage fieldState={fieldState} />
              </>
            );
          }}
        />
      </div>

      {/* description */}
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="description">Description</Label>
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value } }) => (
            <Textarea
              defaultValue={value}
              onChange={onChange}
              placeholder="Enter category description"
            />
          )}
        />
      </div>

      {/* meta title */}
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="meta_title">Meta Title</Label>
        <Controller
          control={control}
          name="meta_title"
          render={({ field: { onChange, value } }) => (
            <Input
              defaultValue={value}
              onChange={onChange}
              placeholder="Enter category meta title"
            />
          )}
        />
      </div>

      {/* meta description */}
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="meta_description">Meta Description</Label>
        <Controller
          control={control}
          name="meta_description"
          render={({ field: { onChange, value } }) => (
            <Textarea
              defaultValue={value}
              onChange={onChange}
              placeholder="Enter category meta description"
            />
          )}
        />
      </div>

      {/* category image */}
      <div>
        <Controller
          control={control}
          name="image"
          render={() => <MediaUpload />}
        />
      </div>
    </>
  );
};
