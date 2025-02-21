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

export function AddVendorComponent() {
  return (
    <Card className="mx-2">
      <div className="w-1/2">
        <CardHeader>
          <CardTitle>Create vendor</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Vendor name</Label>
                <Input id="name" placeholder="Enter vendor name" />
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
