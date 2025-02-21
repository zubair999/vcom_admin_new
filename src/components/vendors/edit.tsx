"use client";
import * as React from "react";
import {
  Button,
  Textarea,
  Label,
  Input,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  SingleSearchableSelectBox,
} from "@/components";
import { MediaUpload } from "../media-uploader";

export function EditCategoryComponent() {
  return (
    <Card className="mx-2">
      <div className="w-1/2">
        <CardHeader>
          <CardTitle>Edit category</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Parent category</Label>
                <SingleSearchableSelectBox
                  options={[
                    { label: "Hair", value: "next" },
                    { label: "Skin", value: "sveltekit" },
                    { label: "Health & Wellness", value: "astro" },
                    { label: "Yoga", value: "nuxt" },
                  ]}
                  onChange={(value) => console.log(value)}
                  defaultValue="next"
                  placeholder="Select status"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Category name</Label>
                <Input id="name" placeholder="Enter category name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Description</Label>
                <Input id="name" placeholder="Enter category description" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Meta Title</Label>
                <Input id="name" placeholder="Enter category description" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Meta Description</Label>
                <Textarea id="name" placeholder="Enter category description" />
              </div>
              <div>
                <MediaUpload
                  name={""}
                  onChange={() => {}}
                  placeholder="Image"
                  defaultValue=""
                  maxFiles={1}
                  maxSize={3072}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Save</Button>
        </CardFooter>
      </div>
    </Card>
  );
}
