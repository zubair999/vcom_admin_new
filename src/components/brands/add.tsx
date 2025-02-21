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
} from "@/components";
import { MediaUpload } from "@/components/media-uploader";

export function AddBrandComponent() {
  return (
    <Card className="mx-2">
      <div className="w-1/2">
        <CardHeader>
          <CardTitle>Create brand</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Brand name</Label>
                <Input id="name" placeholder="Enter brand name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Description</Label>
                <Input id="name" placeholder="Enter brand description" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Meta Title</Label>
                <Input id="name" placeholder="Enter brand meta title" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Meta Description</Label>
                <Textarea
                  id="name"
                  placeholder="Enter brand meta description"
                />
              </div>
              <div>
                <MediaUpload />
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
