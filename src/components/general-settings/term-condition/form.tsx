"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
} from "@/components";
import { useForm, Controller } from "react-hook-form";

export const TermConditionForm = () => {
  const { control } = useForm();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Terms & Conditons</CardTitle>
        <CardDescription>
          Change your password here. After saving, you&apos;ll be logged out.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Controller
          control={control}
          name="body_html"
          render={({ field: { onChange, value } }) => {
            return (
              <>
                <Input
                  id="description"
                  name="description"
                  value={value}
                  onChange={onChange}
                  defaultValue=""
                />
              </>
            );
          }}
        />
      </CardContent>
      <CardFooter>
        <Button>Save password</Button>
      </CardFooter>
    </Card>
  );
};
