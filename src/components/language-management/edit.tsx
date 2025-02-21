"use client";
import * as React from "react";
import {
  Button,
  Label,
  Input,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components";

export function EditLanguageManagementComponent() {
  return (
    <Card className="mx-2">
      <div className="w-1/2">
        <CardHeader>
          <CardTitle>Edit language</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Language</Label>
                <Input id="name" placeholder="Enter category name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Code</Label>
                <Input id="name" placeholder="Enter category description" />
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
