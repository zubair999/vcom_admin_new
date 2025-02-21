"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "@/components";
import { MediaUpload } from "@/components/media-uploader";

export const GeneralSettingsForm = () => {
  const [formData, setFormData] = useState({
    company_name: "",
    address: "",
    phone_number: "",
    email: "",
    title: "",
    navheadings_title: "",
    description: "",
    website_logo: null as File | null,
    favicon: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleFileChange = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   fileType: "website_logo" | "favicon"
  // ) => {
  //   const file = e.target.files?.[0];
  //   if (file && file.size <= (fileType === "website_logo" ? 200000 : 50000)) {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [fileType]: file,
  //     }));
  //   } else {
  //     alert(`File size exceeds the limit for ${fileType}`);
  //   }
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>General Settings</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you&apos;re done.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="company_name">Company Name</Label>
            <Input
              id="company_name"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              defaultValue=""
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              defaultValue=""
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="phone_number">Phone Number</Label>
            <Input
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              defaultValue=""
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              defaultValue=""
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              defaultValue=""
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="navheadings_title">Navheadings Title</Label>
            <Input
              id="navheadings_title"
              name="navheadings_title"
              value={formData.navheadings_title}
              onChange={handleChange}
              defaultValue=""
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              defaultValue=""
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="website_logo">
              Website Logo (200x150, max 200KB)
            </Label>
            <MediaUpload
              name={""}
              onChange={() => {}}
              placeholder="Website Logo (200x150, max 200KB)"
              defaultValue=""
              maxFiles={1}
              maxSize={3072}
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="website_logo">Favicon (200x150, max 50KB)</Label>
            <MediaUpload
              name={""}
              onChange={() => {}}
              placeholder="Favicon (200x150, max 50KB)"
              defaultValue=""
              maxFiles={1}
              maxSize={3072}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Save Changes</Button>
        </CardFooter>
      </form>
    </Card>
  );
};
