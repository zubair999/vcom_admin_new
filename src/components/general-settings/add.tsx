import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GeneralSettingsForm } from "./general-setting/form";
import { TermConditionForm } from "./term-condition/form";

export function GeneralSettingComponent() {
  return (
    <Tabs defaultValue="account" className="w-[900px] mx-2">
      <TabsList className="grid w-full grid-cols-6">
        <TabsTrigger value="account">General Settings</TabsTrigger>
        <TabsTrigger value="term">Terms & Condition</TabsTrigger>
        <TabsTrigger value="privacypolicy">Privacy Policy</TabsTrigger>
        <TabsTrigger value="returnpolicy">Return Policy</TabsTrigger>
        <TabsTrigger value="cancellationpolicy">
          Cancellation Policy
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <GeneralSettingsForm />
      </TabsContent>
      <TabsContent value="term">
        <TermConditionForm />
      </TabsContent>
      <TabsContent value="privacypolicy">
        <Card>
          <CardHeader>
            <CardTitle>Privacy Policy</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged
              out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="returnpolicy">
        <Card>
          <CardHeader>
            <CardTitle>Return Policy</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged
              out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="cancellationpolicy">
        <Card>
          <CardHeader>
            <CardTitle>Cancellation Policy</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged
              out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
