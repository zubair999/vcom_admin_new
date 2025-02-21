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

export function AddPackageComponent() {
  return (
    <Card className="mx-2">
      <div className="w-1/2">
        <CardHeader>
          <CardTitle>Create Package</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Package name</Label>
                <Input id="name" placeholder="Enter package name" />
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
